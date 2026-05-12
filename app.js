// ═══════════════════════════════════════════════
//  KIYO'S MIND — app.js  v3
// ═══════════════════════════════════════════════

// ── Estado global ────────────────────────────
const cfg = { level:'N4', cat:'V', mode:'time', minutes:1, hint:true, duelMinutes:1 };

let session = {
  queue:[], limit:0, correct:0, answered:0,
  seconds:0, timerID:null, isPaused:false,
  lives:3, mode:'',
  missed:[],          // {q, correct, given}
  duel:{ turn:0, scores:[0,0], players:[] },
};

let currentUser = null;
let libCat = 'V';
let bgmOn = false, sfxOn = true;
const STORE = 'kiyos_mind_v3';

// ── Utilidades de almacenamiento ─────────────
const loadProfiles = () => { try{ return JSON.parse(localStorage.getItem(STORE))||[]; }catch{ return []; } };
const saveProfiles = a => localStorage.setItem(STORE, JSON.stringify(a));
const getProfile   = n => loadProfiles().find(p=>p.name===n);
const upsertProfile= p => { const a=loadProfiles(), i=a.findIndex(x=>x.name===p.name); i>=0?a[i]=p:a.push(p); saveProfiles(a); };

const todayStr = () => new Date().toISOString().slice(0,10);
const isAlive  = p => { if(!p?.lastDate)return false; const y=new Date(Date.now()-864e5).toISOString().slice(0,10); return p.lastDate===todayStr()||p.lastDate===y; };

function emptyProfile(name,avatar){
  return { name, avatar, streak:0, bestStreak:0, lastDate:null, activeDays:[], totalAnswered:0, totalCorrect:0, missedBank:[] };
}

// ── Racha ────────────────────────────────────
function checkStreak(){
  if(!currentUser)return;
  const today=todayStr(), yest=new Date(Date.now()-864e5).toISOString().slice(0,10);
  if(currentUser.lastDate===today)return;
  currentUser.streak = currentUser.lastDate===yest ? (currentUser.streak||0)+1 : 1;
  currentUser.bestStreak = Math.max(currentUser.streak, currentUser.bestStreak||0);
  currentUser.lastDate = today;
  if(!currentUser.activeDays) currentUser.activeDays=[];
  if(!currentUser.activeDays.includes(today)) currentUser.activeDays.push(today);
  upsertProfile(currentUser);
}

// ── Pantalla de perfiles ─────────────────────
function renderProfileScreen(){
  const grid=document.getElementById('profile-grid');
  const profiles=loadProfiles();
  grid.innerHTML='';
  if(!profiles.length){
    grid.innerHTML='<div style="grid-column:span 2;text-align:center;color:var(--sub);padding:24px;font-size:.82rem;">まだプロフィールがありません</div>';
    return;
  }
  profiles.forEach(p=>{
    const streak = isAlive(p)?p.streak:0;
    const acc = p.totalAnswered>0 ? Math.round(p.totalCorrect/p.totalAnswered*100)+'%' : '—';
    const d=document.createElement('div');
    d.className='p-card';
    d.innerHTML=`<div class="p-av">${p.avatar}</div><div class="p-name">${p.name}</div><div class="p-streak">🔥 ${streak}日連続</div><div class="p-acc">${acc} 正解率</div>`;
    d.onclick=()=>selectProfile(p.name);
    grid.appendChild(d);
  });
}

function showAddProfile(){
  const f=document.getElementById('add-profile-form');
  f.style.display=f.style.display==='none'?'block':'none';
}

document.querySelectorAll('#av-picker .chip').forEach(c=>{
  c.onclick=()=>{ document.querySelectorAll('#av-picker .chip').forEach(x=>x.classList.remove('on')); c.classList.add('on'); };
});

function createProfile(){
  const name=document.getElementById('new-name').value.trim();
  if(!name){ toast('名前を入力してください',false); return; }
  if(loadProfiles().find(p=>p.name===name)){ toast('その名前はすでに存在します',false); return; }
  const av=document.querySelector('#av-picker .chip.on')?.dataset.av||'🌸';
  upsertProfile(emptyProfile(name,av));
  document.getElementById('new-name').value='';
  document.getElementById('add-profile-form').style.display='none';
  renderProfileScreen();
}

function selectProfile(name){
  currentUser=getProfile(name);
  checkStreak();
  navTo('home-screen');
}

// ── Home ─────────────────────────────────────
function renderHome(){
  if(!currentUser)return;
  const streak=isAlive(currentUser)?currentUser.streak:0;
  const acc=currentUser.totalAnswered>0?Math.round(currentUser.totalCorrect/currentUser.totalAnswered*100)+'%':'—';
  document.getElementById('home-av').textContent=currentUser.avatar;
  document.getElementById('home-greet').textContent=greet()+'、'+currentUser.name+'！';
  document.getElementById('home-sub').textContent='N'+cfg.level.slice(1)+' · '+catLabel(cfg.cat);
  document.getElementById('s-streak').textContent=streak;
  document.getElementById('s-acc').textContent=acc;
  document.getElementById('s-total').textContent=currentUser.totalAnswered||0;
  renderCal();
}
const greet=()=>{ const h=new Date().getHours(); return h<12?'おはよう':h<18?'こんにちは':'こんばんは'; };
const catLabel=c=>c==='V'?'動詞':c==='G'?'文法':'⭐星問題';

function renderCal(){
  const g=document.getElementById('cal'); g.innerHTML='';
  const today=todayStr(), days=currentUser?.activeDays||[];
  for(let i=13;i>=0;i--){
    const d=new Date(Date.now()-i*864e5).toISOString().slice(0,10);
    const el=document.createElement('div');
    el.className='cal-d'+(days.includes(d)?' done':'')+(d===today?' today':'');
    g.appendChild(el);
  }
}

// ── Setters ──────────────────────────────────
function setLevel(lv,el){ cfg.level=lv; document.querySelectorAll('#lv-chips .chip').forEach(c=>c.classList.remove('on')); el.classList.add('on'); renderHome(); }
function setCat(c){ cfg.cat=c; ['V','G','S'].forEach(x=>document.getElementById('cat-'+x).classList.toggle('on',x===c)); renderHome(); }
function setMode(m){
  cfg.mode=m;
  ['time','lives','zen','review','duel'].forEach(x=>document.getElementById('md-'+x)?.classList.toggle('on',x===m));
  document.getElementById('time-opts').style.display=(m==='time')?'block':'none';
  document.getElementById('duel-opts').style.display=(m==='duel')?'block':'none';
  if(m==='duel') renderDuelPlayerSelect();
}
function setMinutes(n,el){ cfg.minutes=n; document.querySelectorAll('#min-chips .chip').forEach(c=>c.classList.remove('on')); el.classList.add('on'); }
function setDuelMinutes(n,el){ cfg.duelMinutes=n; document.querySelectorAll('#duel-min-chips .chip').forEach(c=>c.classList.remove('on')); el.classList.add('on'); }
function setHint(v){ cfg.hint=v; document.getElementById('h-on').classList.toggle('on',v); document.getElementById('h-off').classList.toggle('on',!v); }

function renderDuelPlayerSelect(){
  const wrap=document.getElementById('duel-player-select');
  const others=loadProfiles().filter(p=>p.name!==currentUser?.name);
  if(!others.length){ wrap.innerHTML='<div class="sub" style="font-size:.78rem;">他のプロフィールがありません</div>'; return; }
  wrap.innerHTML='';
  const row=document.createElement('div'); row.className='chip-row';
  others.forEach((p,i)=>{
    const c=document.createElement('span');
    c.className='chip'+(i===0?' on':'');
    c.dataset.name=p.name;
    c.textContent=p.avatar+' '+p.name;
    c.onclick=()=>{ wrap.querySelectorAll('.chip').forEach(x=>x.classList.remove('on')); c.classList.add('on'); };
    row.appendChild(c);
  });
  wrap.appendChild(row);
}

// ── Nav ──────────────────────────────────────
function navTo(id){
  if(id!=='game-screen') stopTimer();
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  if(id==='profile-screen') renderProfileScreen();
  if(id==='home-screen')    renderHome();
  if(id==='lib-screen')     renderLib();
}

function togglePause(show){ session.isPaused=show; document.getElementById('pause-screen').classList.toggle('show',show); }

// ── Conjugación ──────────────────────────────
function getForm(v,type){
  const s=v.f.slice(0,-1), l=v.f.slice(-1);
  const mNai ={る:'ら',む:'ま',ぶ:'ば',ぬ:'な',つ:'た',す:'さ',ぐ:'が',く:'か',う:'わ'};
  const mTe  ={る:'って',む:'んで',ぶ:'んで',ぬ:'んで',つ:'って',す:'して',ぐ:'いで',く:'いて',う:'って'};
  const mPot ={る:'れ',む:'め',ぶ:'べ',ぬ:'ね',つ:'て',す:'せ',ぐ:'げ',く:'け',う:'え'};
  const mPas ={る:'ら',む:'ま',ぶ:'ば',ぬ:'な',つ:'た',す:'さ',ぐ:'が',く:'か',う:'わ'};
  const mVol ={る:'よう',む:'もう',ぶ:'ぼう',ぬ:'のう',つ:'とう',す:'そう',ぐ:'ごう',く:'こう',う:'おう'};
  const mMasu={る:'り',む:'み',ぶ:'び',ぬ:'に',つ:'ち',す:'し',ぐ:'ぎ',く:'き',う:'い'};

  if(v.g===3){
    const base=v.f.replace(/する$/,'');
    if(v.f==='くる'){
      if(type==='nai_stem')return'こ'; if(type==='te')return'きて'; if(type==='ta')return'きた';
      if(type==='masu')return'き'; if(type==='Volitivo')return'こよう';
      if(type==='Potencial')return'こられ'; if(type==='Pasiva')return'こられ'; if(type==='dic')return'くる';
    }
    if(type==='nai_stem')return base+'し'; if(type==='te')return base+'して'; if(type==='ta')return base+'した';
    if(type==='masu')return base+'し'; if(type==='Volitivo')return base+'しよう';
    if(type==='Potencial')return base+'でき'; if(type==='Pasiva')return base+'され'; if(type==='dic')return v.f;
  }
  if(v.g===2){
    if(type==='nai_stem')return s; if(type==='te')return s+'て'; if(type==='ta')return s+'た';
    if(type==='masu')return s; if(type==='Volitivo')return s+'よう';
    if(type==='Potencial')return s+'られ'; if(type==='Pasiva')return s+'られ'; if(type==='dic')return v.f;
  }
  if(type==='dic')return v.f;
  if(type==='nai_stem')return s+mNai[l];
  if(type==='masu')return s+mMasu[l];
  if(type==='te'){ if(v.f==='いく')return'いって'; return s+mTe[l]; }
  if(type==='ta'){ if(v.f==='いく')return'いった'; const te=s+mTe[l]; return te.replace('んで','んだ').replace('いで','いだ').replace('いて','いた').replace('って','った').replace('して','した').replace('て','た'); }
  if(type==='Potencial')return s+mPot[l]+'る';
  if(type==='Pasiva')return s+mPas[l]+'れ';
  if(type==='Volitivo')return s+mVol[l];
  return v.f;
}

// ── Build session queue ──────────────────────
function buildQueue(){
  const verbs  =verbData.filter(v=>v.lv===cfg.level);
  const grammar=grammarData.filter(g=>g.lv===cfg.level);
  let base=[];

  if(cfg.cat==='V'){
    ['te','nai_stem','ta','masu','Volitivo','Pasiva','Potencial'].forEach(t=>verbs.forEach(v=>base.push({type:'V',v,t})));
  } else if(cfg.cat==='G'){
    const valid=['te','ta','nai_stem','masu','Volitivo','Potencial','Pasiva','dic'];
    grammar.filter(g=>valid.includes(g.f)).forEach(g=>verbs.forEach(v=>base.push({type:'G',v,g})));
  } else {
    base=starData.filter(q=>q.lv===cfg.level).map(q=>({type:'S',q}));
  }
  return base.sort(()=>Math.random()-.5);
}

// ── Start session ────────────────────────────
function startSession(){
  stopTimer();
  const m=cfg.mode;

  if(m==='review'){
    // Cargar banco de errores del usuario
    const bank=(currentUser?.missedBank||[]).filter(x=>x.lv===cfg.level&&x.cat===cfg.cat);
    if(!bank.length){ toast('復習する問題がありません 🎉',true); return; }
    session.queue=bank.map(x=>x.item).sort(()=>Math.random()-.5);
    session.limit=session.queue.length;
    initSessionVars(m);
    navTo('game-screen'); nextQ(); return;
  }

  if(m==='duel'){
    // Determinar oponente
    const sel=document.querySelector('#duel-player-select .chip.on');
    const opName=sel?.dataset.name;
    const op=opName?getProfile(opName):null;
    if(!op){ toast('対戦相手を選んでください',false); return; }
    session.duel={turn:0,scores:[0,0],players:[currentUser,op]};
    document.getElementById('duel-scores-wrap').style.display='grid';
    renderDuelBoxes();
    const base=buildQueue();
    session.queue=base;
    session.limit=Infinity;
    initSessionVars(m);
    startCountdown(cfg.duelMinutes);
    navTo('game-screen'); nextQ(); return;
  }

  const base=buildQueue();
  session.queue=base;
  session.limit=m==='zen'?Infinity:m==='lives'?base.length:Infinity;
  initSessionVars(m);
  if(m==='time') startCountdown(cfg.minutes);
  navTo('game-screen'); nextQ();
}

function initSessionVars(m){
  session.mode=m; session.correct=0; session.answered=0;
  session.seconds=0; session.lives=3; session.missed=[];
  session.isPaused=false;
  // UI resets
  document.getElementById('duel-scores-wrap').style.display=(m==='duel')?'grid':'none';
  document.getElementById('lives-row').style.display=(m==='lives')?'flex':'none';
  document.getElementById('prog-fill').style.width='0%';
  document.getElementById('q-timer').style.display=(m==='time'||m==='duel')?'block':'none';
  if(m==='lives') renderLives();
}

// ── Countdown (time & duel) ──────────────────
function startCountdown(minutes){
  let remaining=minutes*60;
  document.getElementById('q-timer').textContent=fmtTime(remaining);
  session.timerID=setInterval(()=>{
    if(session.isPaused)return;
    remaining--;
    document.getElementById('q-timer').textContent=fmtTime(remaining);
    if(remaining<=0){ stopTimer(); endSession(); }
  },1000);
}
const fmtTime=s=>`${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}`;
const stopTimer=()=>{ if(session.timerID){ clearInterval(session.timerID); session.timerID=null; } };

// ── Vidas ────────────────────────────────────
function renderLives(){
  const row=document.getElementById('lives-row');
  row.innerHTML='';
  for(let i=0;i<3;i++){
    const s=document.createElement('span');
    s.textContent=i<session.lives?'❤️':'🩶';
    row.appendChild(s);
  }
}

// ── Siguiente pregunta ───────────────────────
function nextQ(){
  if(!session.queue.length||session.answered>=session.limit){ endSession(); return; }

  const pct=session.limit<Infinity&&session.limit>0?(session.answered/session.limit*100):0;
  document.getElementById('prog-fill').style.width=pct+'%';
  document.getElementById('q-counter').textContent=
    session.limit<Infinity?`${session.answered+1} / ${session.limit}`:
    `${session.answered+1}問`;

  const item=session.queue[0];
  if(!item){ endSession(); return; }

  if(item.type==='S'){ renderStar(item.q); return; }
  if(item.type==='V'){ renderVerb(item);   return; }
  if(item.type==='G'){ renderGrammar(item); return; }
}

// ── Render verbo ─────────────────────────────
function renderVerb(item){
  const {v,t}=item;
  const correct=getForm(v,t);
  if(!correct){ skip(); return; }
  setQCard(v.m,`${v.k}<rt>${v.f}</rt>`,formLabel(t),cfg.hint?`💡 Forma ${formLabel(t)} · ${groupLabel(v.g)}`:null);
  const opts=buildOpts(correct,v,['te','nai_stem','ta','masu','Volitivo','Potencial']);
  renderOpts(opts,correct,item);
}

// ── Render gramática ─────────────────────────
function renderGrammar(item){
  const {v,g}=item;
  const correct=getForm(v,g.f);
  if(!correct){ skip(); return; }
  setQCard(`${v.k}（${v.m}）`,`${g.tag}<rt></rt>`,g.m,cfg.hint?`💡 ${g.hint}`:null);
  const opts=buildOpts(correct,v,['te','nai_stem','ta','masu','Volitivo','Potencial']);
  renderOpts(opts,correct,item);
}

// ── Render estrella JLPT ─────────────────────
function renderStar(q){
  const area=document.getElementById('opts-area');
  area.innerHTML='';
  setQCard('⭐ 星問題 · JLPT N4','★<rt></rt>',q.grammar,null);
  document.getElementById('q-hint').style.display='none';

  // Oración con 4 blanks
  const wrap=document.createElement('div');
  wrap.className='star-q-wrap';

  const sent=document.createElement('div');
  sent.className='star-sentence';
  // Construir blanks con números
  let html=q.sentence.replace(/＿＿/g,(_,offset,str)=>{
    // contar cuántos ya reemplazamos
    const idx=(str.slice(0,offset).match(/＿＿/g)||[]).length+1;
    return `<span class="star-blank" data-idx="${idx}">&emsp;${idx}&emsp;</span>`;
  });
  // marcar el blank ★
  sent.innerHTML=html;
  setTimeout(()=>{
    const blanks=sent.querySelectorAll('.star-blank');
    // La posición ★ es starIndex-1 en base 0 (hay 4 blanks: pos 1,2,★,4)
    // Contamos: posición de ★ es el 3er blank (índice 2)
    if(blanks[2]) blanks[2].classList.add('is-star');
  },0);
  wrap.appendChild(sent);

  // Instrucción
  const inst=document.createElement('div');
  inst.style.cssText='font-size:.65rem;color:var(--sub);text-align:center;margin:10px 0 4px;font-weight:600;letter-spacing:.5px;';
  inst.textContent='★ に入る最もよいものを選んでください';
  wrap.appendChild(inst);

  // Opciones en grid 2x2 con número + texto
  const grid=document.createElement('div');
  grid.className='star-opts';
  q.parts.forEach((p,i)=>{
    const btn=document.createElement('div');
    btn.className='star-opt';
    btn.innerHTML=`<div class="num">${i+1}</div><div>${p}</div>`;
    btn.onclick=()=>{
      const isCorrect=(i+1)===q.starIndex;
      btn.classList.add(isCorrect?'ok':'bad');
      if(!isCorrect){
        grid.querySelectorAll('.star-opt').forEach((b,j)=>{ if(j+1===q.starIndex) b.classList.add('ok'); });
      }
      lockStar(grid);
      handleAnswer(isCorrect,{type:'S',q},q.parts[q.starIndex-1]);
    };
    grid.appendChild(btn);
  });
  wrap.appendChild(grid);

  // Traducción (hint)
  if(cfg.hint){
    const tr=document.createElement('div');
    tr.style.cssText='font-size:.68rem;color:var(--sub);text-align:center;margin-top:12px;padding:8px 14px;background:var(--bg);border-radius:var(--r-xs);';
    tr.textContent='🌐 '+q.translation;
    wrap.appendChild(tr);
  }

  area.appendChild(wrap);
}
const lockStar=grid=>grid.querySelectorAll('.star-opt').forEach(b=>b.onclick=null);

// ── Helpers de render ────────────────────────
function setQCard(meta,mainHtml,tag,hint){
  document.getElementById('q-meta').textContent=meta;
  document.getElementById('q-main').innerHTML=mainHtml;
  document.getElementById('q-tag').textContent=tag;
  const h=document.getElementById('q-hint');
  h.style.display=hint?'inline-block':'none';
  if(hint) h.textContent=hint;
}

function buildOpts(correct,v,types){
  const pool=types.map(t=>getForm(v,t)).filter(x=>x&&x!==correct);
  const opts=[correct];
  for(const x of pool.sort(()=>Math.random()-.5)){ if(!opts.includes(x)) opts.push(x); if(opts.length>=4)break; }
  return opts.sort(()=>Math.random()-.5);
}

function renderOpts(opts,correct,item){
  const area=document.getElementById('opts-area');
  area.innerHTML='';
  opts.forEach(o=>{
    const b=document.createElement('button');
    b.className='opt-btn'; b.textContent=o;
    b.onclick=()=>{
      const ok=o===correct;
      b.classList.add(ok?'ok':'bad');
      if(!ok) area.querySelectorAll('.opt-btn').forEach(x=>{ if(x.textContent===correct) x.classList.add('ok'); });
      area.querySelectorAll('.opt-btn').forEach(x=>{ x.disabled=true; x.onclick=null; });
      handleAnswer(ok,item,o);
    };
    area.appendChild(b);
  });
}

// ── Manejo de respuesta ──────────────────────
function handleAnswer(ok,item,given){
  session.answered++;
  if(ok) session.correct++;

  // Actualizar stats del usuario activo
  if(currentUser){
    currentUser.totalAnswered=(currentUser.totalAnswered||0)+1;
    if(ok) currentUser.totalCorrect=(currentUser.totalCorrect||0)+1;
    if(!ok) saveMissed(item);
    else    clearMissed(item);
    upsertProfile(currentUser);
  }

  // Duel: turno
  if(session.mode==='duel'){
    if(ok) session.duel.scores[session.duel.turn]++;
    renderDuelBoxes();
    session.duel.turn=1-session.duel.turn; // alternar
  }

  // Feedback
  if(ok){
    toast('正解！✨',true);
    session.queue.shift();
    setTimeout(nextQ,1300);
  } else {
    // Requeue o eliminar según modo
    if(session.mode==='zen'||session.mode==='time'||session.mode==='duel'){
      session.queue.push(session.queue.shift());
    } else {
      session.queue.shift();
    }
    // Vidas
    if(session.mode==='lives'){
      session.lives--;
      renderLives();
      if(session.lives<=0){ toast('ゲームオーバー 💔',false); setTimeout(endSession,1500); return; }
    }
    // Guardar en missed para resultado
    session.missed.push({label:getItemLabel(item),correct:getItemCorrect(item),given});
    toast('不正解…\n答え: '+getItemCorrect(item),false);
    setTimeout(nextQ,2400);
  }
}

function getItemLabel(item){
  if(item.type==='V') return `${item.v.k} (${formLabel(item.t)})`;
  if(item.type==='G') return `${item.v.k} + ${item.g.tag}`;
  if(item.type==='S') return item.q.grammar;
  return '?';
}
function getItemCorrect(item){
  if(item.type==='V') return getForm(item.v,item.t);
  if(item.type==='G') return getForm(item.v,item.g.f);
  if(item.type==='S') return item.q.parts[item.q.starIndex-1];
  return '?';
}

// ── Banco de errores (repaso) ────────────────
function saveMissed(item){
  if(!currentUser||item.type==='S')return;
  if(!currentUser.missedBank) currentUser.missedBank=[];
  const key=JSON.stringify({type:item.type,v:item.v?.f,t:item.t,g:item.g?.tag});
  if(!currentUser.missedBank.find(x=>x.key===key)){
    currentUser.missedBank.push({key,lv:cfg.level,cat:cfg.cat,item});
  }
}
function clearMissed(item){
  if(!currentUser||!currentUser.missedBank||item.type==='S')return;
  const key=JSON.stringify({type:item.type,v:item.v?.f,t:item.t,g:item.g?.tag});
  currentUser.missedBank=currentUser.missedBank.filter(x=>x.key!==key);
}

// ── Duel boxes ───────────────────────────────
function renderDuelBoxes(){
  const {players,scores,turn}=session.duel;
  [0,1].forEach(i=>{
    const box=document.getElementById('d-box-'+i);
    if(!players[i]){ box.innerHTML=''; return; }
    box.innerHTML=`<div class="duel-av">${players[i].avatar}</div><div class="duel-name">${players[i].name}</div><div class="duel-pts">${scores[i]}</div>`;
    box.classList.toggle('active',i===turn);
  });
}

// ── Fin de sesión ────────────────────────────
function endSession(){
  stopTimer();
  const pct=session.answered>0?Math.round(session.correct/session.answered*100):0;
  const ring=document.getElementById('res-ring');
  ring.textContent=pct+'%';
  ring.className='res-ring '+(pct>=80?'great':pct>=50?'ok':'bad');

  const msgs={great:'すばらしい！🌸',ok:'よくできました！',bad:'もっと練習しよう！'};
  const k=pct>=80?'great':pct>=50?'ok':'bad';
  document.getElementById('res-label').textContent=msgs[k];

  let sub='';
  if(session.mode==='duel'){
    const {players,scores}=session.duel;
    const winner=scores[0]>scores[1]?players[0]:scores[1]>scores[0]?players[1]:null;
    sub=winner?`${winner.avatar} ${winner.name} の勝ち！`:'引き分け！';
  }
  document.getElementById('res-sub').textContent=sub;
  document.getElementById('res-score').textContent=`${session.correct} / ${session.answered}`;
  document.getElementById('res-time').textContent=session.mode==='time'||session.mode==='duel'?`タイム: ${session.mode==='time'?cfg.minutes:cfg.duelMinutes}分`:'';
  document.getElementById('res-acc').textContent=`正解率: ${pct}%`;

  // Missed list
  const mwrap=document.getElementById('res-missed-wrap');
  const mlist=document.getElementById('res-missed');
  mlist.innerHTML='';
  if(session.missed.length){
    mwrap.style.display='block';
    session.missed.slice(0,12).forEach(m=>{
      const d=document.createElement('div');
      d.className='res-missed-item';
      d.innerHTML=`<strong>${m.label}</strong><br>あなた: ${m.given||'—'} → <span>正解: ${m.correct}</span>`;
      mlist.appendChild(d);
    });
  } else {
    mwrap.style.display='none';
  }

  navTo('result-screen');
}

// ── Skip ─────────────────────────────────────
function skip(){ session.queue.shift(); nextQ(); }

// ── Toast ────────────────────────────────────
let toastT;
function toast(msg,ok){
  if(ok&&sfxOn) document.getElementById('sfx-ok').play().catch(()=>{});
  if(!ok&&sfxOn) document.getElementById('sfx-err').play().catch(()=>{});
  const el=document.getElementById('toast');
  el.textContent=msg; el.className='show '+(ok?'t-ok':'t-err');
  clearTimeout(toastT);
  toastT=setTimeout(()=>el.className='',ok?1200:2300);
}

// ── Biblioteca ───────────────────────────────
function switchLib(c){ libCat=c; document.getElementById('lib-V').classList.toggle('on',c==='V'); document.getElementById('lib-G').classList.toggle('on',c==='G'); renderLib(); }
function renderLib(){
  const tbl=document.getElementById('lib-tbl');
  const verbs=verbData.filter(v=>v.lv===cfg.level);
  if(libCat==='V'){
    tbl.style.minWidth='860px';
    let h=`<tr><th>Español</th><th>辞書</th><th>ます</th><th>て</th><th>た</th><th>ない</th><th>意向</th><th>受身</th><th>可能</th></tr>`;
    verbs.forEach(v=>{ h+=`<tr><td><b>${v.m}</b></td><td>${v.k}（${v.f}）</td><td>${getForm(v,'masu')}ます</td><td>${getForm(v,'te')}</td><td>${getForm(v,'ta')}</td><td>${getForm(v,'nai_stem')}ない</td><td>${getForm(v,'Volitivo')}</td><td>${getForm(v,'Pasiva')}れる</td><td>${getForm(v,'Potencial')}る</td></tr>`; });
    tbl.innerHTML=h;
  } else {
    tbl.style.minWidth='100%';
    const gr=grammarData.filter(g=>g.lv===cfg.level);
    let h=`<tr><th>文法</th><th style="text-align:left;min-width:200px;">意味 / 公式</th></tr>`;
    gr.forEach(g=>{ h+=`<tr><td style="color:var(--accent);font-weight:700;white-space:nowrap;">${g.tag}</td><td style="text-align:left;"><b>${g.m}</b><br><span style="color:var(--sub);font-size:.68rem;">${g.formula}</span><br><span style="color:var(--accent);font-size:.65rem;">${g.hint||''}</span></td></tr>`; });
    tbl.innerHTML=h;
  }
}

// ── Audio / Tema ─────────────────────────────
function toggleBgm(){
  bgmOn=!bgmOn;
  const l=document.getElementById('bgm-light'),d=document.getElementById('bgm-dark');
  const t=document.body.getAttribute('data-theme');
  if(!bgmOn){l.pause();d.pause();}
  else (t==='dark'?d:l).play().catch(()=>{});
  document.getElementById('lbl-bgm').textContent=bgmOn?'ON':'OFF';
}
function toggleSfx(){ sfxOn=!sfxOn; document.getElementById('lbl-sfx').textContent=sfxOn?'ON':'OFF'; }
function toggleTheme(){
  const t=document.body.getAttribute('data-theme')==='dark'?'light':'dark';
  document.body.setAttribute('data-theme',t);
  if(bgmOn){
    document.getElementById('bgm-light').pause();
    document.getElementById('bgm-dark').pause();
    (t==='dark'?document.getElementById('bgm-dark'):document.getElementById('bgm-light')).play().catch(()=>{});
  }
}

// ── Labels ───────────────────────────────────
const formLabel=t=>({te:'〜て形',ta:'〜た形',nai_stem:'〜ない(語幹)',masu:'〜ます(語幹)',Volitivo:'意向形',Potencial:'可能形',Pasiva:'受身形',dic:'辞書形'}[t]||t);
const groupLabel=g=>g===1?'グループ1(五段)':g===2?'グループ2(一段)':'グループ3(不規則)';

// ── Init ─────────────────────────────────────
window.onload=()=>{ renderProfileScreen(); };
