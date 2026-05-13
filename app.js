// ═══════════════════════════════════════════════
//  KIYO'S MIND — app.js  v4
//  Firebase config — reemplaza con la tuya
// ═══════════════════════════════════════════════
const firebaseConfig = {
  apiKey: "AIzaSyCPJPx6520GnERho81otuwjCwIuNkmaZSs",
  authDomain: "kiyos-mind.firebaseapp.com",
  projectId: "kiyos-mind",
  storageBucket: "kiyos-mind.firebasestorage.app",
  messagingSenderId: "722634807143",
  appId: "1:722634807143:web:487aa4cea09777967a01c2",
  measurementId: "G-QEDX8FRXFK"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const PROFILES_COL = 'profiles';

// ── Estado global ────────────────────────────
const cfg = { level:'N4', cat:'V', mode:'time', minutes:1, hint:true, duelMinutes:1 };
let session = { queue:[], limit:0, correct:0, answered:0, seconds:0, timerID:null, isPaused:false, lives:3, mode:'', missed:[], duel:{ turn:0, scores:[0,0], players:[] } };
let currentUser = null;
let allProfiles = [];
let libCat = 'V';
let bgmOn = false, sfxOn = true;

// ══════════════════════════════════════════════
//  FIREBASE — CRUD
// ══════════════════════════════════════════════
async function loadAllProfiles() {
  try {
    const snap = await db.collection(PROFILES_COL).get();
    allProfiles = snap.docs.map(d => d.data());
  } catch(e) {
    console.error('Firebase load error:', e);
    allProfiles = [];
  }
}

async function saveProfile(p) {
  try {
    await db.collection(PROFILES_COL).doc(p.name).set(p);
    const i = allProfiles.findIndex(x => x.name === p.name);
    if(i >= 0) allProfiles[i] = p; else allProfiles.push(p);
  } catch(e) { console.error('Firebase save error:', e); }
}

function emptyProfile(name, avatar) {
  return { name, avatar, streak:0, bestStreak:0, lastDate:null, activeDays:[], totalAnswered:0, totalCorrect:0, missedBank:[], monthCorrect:0, monthAnswered:0, monthStr: currentMonthStr() };
}

const currentMonthStr = () => new Date().toISOString().slice(0,7); // "2025-05"
const todayStr = () => new Date().toISOString().slice(0,10);
const isAlive  = p => { if(!p?.lastDate) return false; const y=new Date(Date.now()-864e5).toISOString().slice(0,10); return p.lastDate===todayStr()||p.lastDate===y; };

// ── Racha ────────────────────────────────────
function checkStreak() {
  if(!currentUser) return;
  const today = todayStr(), yest = new Date(Date.now()-864e5).toISOString().slice(0,10);
  if(currentUser.lastDate === today) return;
  currentUser.streak = currentUser.lastDate === yest ? (currentUser.streak||0)+1 : 1;
  currentUser.bestStreak = Math.max(currentUser.streak, currentUser.bestStreak||0);
  currentUser.lastDate = today;
  if(!currentUser.activeDays) currentUser.activeDays = [];
  if(!currentUser.activeDays.includes(today)) currentUser.activeDays.push(today);
  // Reset mes si cambió
  if(currentUser.monthStr !== currentMonthStr()) { currentUser.monthStr = currentMonthStr(); currentUser.monthCorrect=0; currentUser.monthAnswered=0; }
  saveProfile(currentUser);
}

// ══════════════════════════════════════════════
//  PANTALLAS
// ══════════════════════════════════════════════
function navTo(id) {
  if(id !== 'game-screen') stopTimer();
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  if(id === 'profile-screen') renderProfileScreen();
  if(id === 'home-screen')    renderHome();
  if(id === 'lib-screen')     renderLib();
  if(id === 'lb-screen')      renderLeaderboard();
}
function togglePause(show) { session.isPaused=show; document.getElementById('pause-screen').classList.toggle('show',show); }

// ── Perfiles ─────────────────────────────────
function renderProfileScreen() {
  const grid = document.getElementById('profile-grid');
  grid.innerHTML = '';
  if(!allProfiles.length) {
    grid.innerHTML = '<div style="grid-column:span 2;text-align:center;color:var(--sub);padding:24px;font-size:.82rem;">まだプロフィールがありません</div>';
    return;
  }
  allProfiles.forEach(p => {
    const streak = isAlive(p) ? p.streak : 0;
    const acc = p.totalAnswered > 0 ? Math.round(p.totalCorrect/p.totalAnswered*100)+'%' : '—';
    const d = document.createElement('div');
    d.className = 'p-card';
    d.innerHTML = `<div class="p-av">${p.avatar}</div><div class="p-name">${p.name}</div><div class="p-streak">🔥 ${streak}日連続</div><div class="p-acc">${acc} 正解率</div>`;
    d.onclick = () => selectProfile(p.name);

const delBtn = document.createElement('div');
delBtn.textContent = '✕ 削除';
delBtn.style.cssText = 'font-size:.6rem;color:var(--err);margin-top:10px;cursor:pointer;font-weight:700;';
delBtn.onclick = async (e) => {
  e.stopPropagation();
  if(!confirm(`「${p.name}」を削除しますか？`)) return;
  await db.collection(PROFILES_COL).doc(p.name).delete();
  allProfiles = allProfiles.filter(x => x.name !== p.name);
  renderProfileScreen();
};
d.appendChild(delBtn);
    grid.appendChild(d);
  });
}

function showAddProfile() {
  const f = document.getElementById('add-profile-form');
  f.style.display = f.style.display === 'none' ? 'block' : 'none';
}

document.querySelectorAll('#av-picker .chip').forEach(c => {
  c.onclick = () => { document.querySelectorAll('#av-picker .chip').forEach(x=>x.classList.remove('on')); c.classList.add('on'); };
});

async function createProfile() {
  const name = document.getElementById('new-name').value.trim();
  if(!name) { toast('名前を入力してください', false); return; }
  if(allProfiles.find(p => p.name === name)) { toast('その名前はすでに存在します', false); return; }
  const av = document.querySelector('#av-picker .chip.on')?.dataset.av || '🌸';
  const p = emptyProfile(name, av);
  await saveProfile(p);
  document.getElementById('new-name').value = '';
  document.getElementById('add-profile-form').style.display = 'none';
  renderProfileScreen();
}

async function selectProfile(name) {
  currentUser = allProfiles.find(p => p.name === name);
  if(!currentUser) return;
  checkStreak();
  navTo('home-screen');
}

// ── Home ─────────────────────────────────────
function renderHome() {
  if(!currentUser) return;
  const streak = isAlive(currentUser) ? currentUser.streak : 0;
  const acc = currentUser.totalAnswered > 0 ? Math.round(currentUser.totalCorrect/currentUser.totalAnswered*100)+'%' : '—';
  document.getElementById('home-av').textContent = currentUser.avatar;
  document.getElementById('home-greet').textContent = greet() + '、' + currentUser.name + '！';
  document.getElementById('home-sub').textContent = cfg.level + ' · ' + catLabel(cfg.cat);
  document.getElementById('s-streak').textContent = streak;
  document.getElementById('s-acc').textContent = acc;
  document.getElementById('s-total').textContent = currentUser.totalAnswered || 0;
  renderCal();
}
const greet = () => { const h=new Date().getHours(); return h<12?'おはよう':h<18?'こんにちは':'こんばんは'; };
const catLabel = c => c==='V'?'動詞':c==='G'?'文法':'⭐星問題';

function renderCal() {
  const g = document.getElementById('cal'); g.innerHTML='';
  const today = todayStr(), days = currentUser?.activeDays || [];
  for(let i=13;i>=0;i--) {
    const d = new Date(Date.now()-i*864e5).toISOString().slice(0,10);
    const el = document.createElement('div');
    el.className = 'cal-d' + (days.includes(d)?' done':'') + (d===today?' today':'');
    g.appendChild(el);
  }
}

// ── Leaderboard ──────────────────────────────
async function renderLeaderboard() {
  await loadAllProfiles();
  const month = currentMonthStr();

  // Normalizar datos del mes
  const data = allProfiles.map(p => {
    const mCorrect  = p.monthStr === month ? (p.monthCorrect||0)  : 0;
    const mAnswered = p.monthStr === month ? (p.monthAnswered||0) : 0;
    const mAcc = mAnswered > 0 ? Math.round(mCorrect/mAnswered*100) : 0;
    return { ...p, mCorrect, mAnswered, mAcc, streak: isAlive(p)?(p.streak||0):0 };
  }).sort((a,b) => b.mCorrect - a.mCorrect);

  const champWrap = document.getElementById('lb-champ-wrap');
  const champ = data[0];
  if(champ && champ.mAnswered > 0) {
    champWrap.style.display = 'block';
    document.getElementById('lb-champ-name').textContent = champ.avatar + ' ' + champ.name;
    document.getElementById('lb-champ-sub').textContent = `今月の正解: ${champ.mCorrect}問 · 正解率: ${champ.mAcc}%`;
  } else { champWrap.style.display='none'; }

  // Barras de comparación
  const bars = document.getElementById('lb-bars');
  bars.innerHTML = '';
  const maxCorrect = Math.max(...data.map(p=>p.mCorrect), 1);
  data.forEach((p,i) => {
    const cls = i===0?'bar-p1':'bar-p2';
    bars.innerHTML += `
      <div class="bar-label"><span>${p.avatar} ${p.name}</span><span>${p.mCorrect}問正解 (${p.mAcc}%)</span></div>
      <div class="bar-track"><div class="bar-fill ${cls}" style="width:${Math.round(p.mCorrect/maxCorrect*100)}%"></div></div>`;
  });

  // Tabla de comparación
  const rows = document.getElementById('lb-rows');
  rows.innerHTML = '';
  data.forEach((p,i) => {
    const totalAcc = p.totalAnswered>0 ? Math.round(p.totalCorrect/p.totalAnswered*100) : 0;
    const el = document.createElement('div');
    el.className = 'lb-row';
    el.innerHTML = `
      <div class="lb-rank">${i===0?'🥇':i===1?'🥈':'🥉'}</div>
      <div class="lb-av">${p.avatar}</div>
      <div class="lb-info">
        <div class="lb-name">${p.name}</div>
        <div class="lb-detail">🔥${p.streak}日連続 · 総合${totalAcc}% · ${p.totalAnswered||0}問</div>
      </div>
      <div class="lb-score">${p.mCorrect}</div>`;
    rows.appendChild(el);
  });
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

function renderDuelPlayerSelect() {
  const wrap = document.getElementById('duel-player-select');
  const others = allProfiles.filter(p => p.name !== currentUser?.name);
  if(!others.length){ wrap.innerHTML='<div class="sub" style="font-size:.78rem;">他のプロフィールがありません</div>'; return; }
  wrap.innerHTML = '';
  const row = document.createElement('div'); row.className='chip-row';
  others.forEach((p,i) => {
    const c = document.createElement('span');
    c.className='chip'+(i===0?' on':''); c.dataset.name=p.name;
    c.textContent=p.avatar+' '+p.name;
    c.onclick=()=>{ wrap.querySelectorAll('.chip').forEach(x=>x.classList.remove('on')); c.classList.add('on'); };
    row.appendChild(c);
  });
  wrap.appendChild(row);
}

// ══════════════════════════════════════════════
//  CONJUGACIÓN
// ══════════════════════════════════════════════
function getForm(v, type) {
  const s=v.f.slice(0,-1), l=v.f.slice(-1);
  const mNai ={る:'ら',む:'ま',ぶ:'ば',ぬ:'な',つ:'た',す:'さ',ぐ:'が',く:'か',う:'わ'};
  const mTe  ={る:'って',む:'んで',ぶ:'んで',ぬ:'んで',つ:'って',す:'して',ぐ:'いで',く:'いて',う:'って'};
  const mPot ={る:'れ',む:'め',ぶ:'べ',ぬ:'ね',つ:'て',す:'せ',ぐ:'げ',く:'け',う:'え'};
  const mPas ={る:'ら',む:'ま',ぶ:'ば',ぬ:'な',つ:'た',す:'さ',ぐ:'が',く:'か',う:'わ'};
  const mVol ={る:'よう',む:'もう',ぶ:'ぼう',ぬ:'のう',つ:'とう',す:'そう',ぐ:'ごう',く:'こう',う:'おう'};
  const mMasu={る:'り',む:'み',ぶ:'び',ぬ:'に',つ:'ち',す:'し',ぐ:'ぎ',く:'き',う:'い'};

  if(v.g===3){
    const base=v.f.replace(/する$/,'');
    if(v.f==='くる'){ const m={nai_stem:'こ',te:'きて',ta:'きた',masu:'き',Volitivo:'こよう',Potencial:'こられ',Pasiva:'こられ',dic:'くる'}; return m[type]||'くる'; }
    const m={nai_stem:base+'し',te:base+'して',ta:base+'した',masu:base+'し',Volitivo:base+'しよう',Potencial:base+'でき',Pasiva:base+'され',dic:v.f};
    return m[type]||v.f;
  }
  if(v.g===2){
    const m={nai_stem:s,te:s+'て',ta:s+'た',masu:s,Volitivo:s+'よう',Potencial:s+'られ',Pasiva:s+'られ',dic:v.f};
    return m[type]||v.f;
  }
  // Grupo 1
  if(type==='dic')      return v.f;
  if(type==='nai_stem') return s+mNai[l];
  if(type==='masu')     return s+mMasu[l];
  if(type==='te'){ if(v.f==='いく')return'いって'; return s+mTe[l]; }
  if(type==='ta'){ if(v.f==='いく')return'いった'; const te=s+mTe[l]; return te.replace('んで','んだ').replace('いで','いだ').replace('いて','いた').replace('って','った').replace('して','した').replace('て','た'); }
  if(type==='Potencial') return s+mPot[l]+'る';
  if(type==='Pasiva')    return s+mPas[l]+'れ';
  if(type==='Volitivo')  return s+mVol[l];
  return v.f;
}

// Distractores tramposos: mismo grupo o diferente para confundir
function buildTrickyOpts(correct, v, formType) {
  const allForms = ['te','nai_stem','ta','masu','Volitivo','Pasiva','Potencial'];
  const sameGroup = verbData.filter(x => x.lv===cfg.level && x.g===v.g && x.f!==v.f);
  const diffGroup = verbData.filter(x => x.lv===cfg.level && x.g!==v.g);
  const pool = [];

  // 1. Forma correcta del verbo en otros tipos (confusión dentro del mismo verbo)
  allForms.filter(f=>f!==formType).forEach(f => { const r=getForm(v,f); if(r&&r!==correct) pool.push(r); });

  // 2. Misma forma pero de verbos del mismo grupo (confusión interverbal)
  sameGroup.slice(0,4).forEach(ov => { const r=getForm(ov,formType); if(r&&r!==correct&&!pool.includes(r)) pool.push(r); });

  // 3. Misma forma de verbos de diferente grupo (trampa de grupo)
  diffGroup.slice(0,3).forEach(ov => { const r=getForm(ov,formType); if(r&&r!==correct&&!pool.includes(r)) pool.push(r); });

  pool.sort(() => Math.random()-.5);
  const opts = [correct];
  for(const x of pool){ if(!opts.includes(x)) opts.push(x); if(opts.length>=4) break; }
  // Relleno si faltan
  while(opts.length < 4) { const r=getForm(v,allForms[opts.length%allForms.length]); if(!opts.includes(r)) opts.push(r); else opts.push('—'); }
  return opts.filter(x=>x&&x!=='—').slice(0,4).sort(()=>Math.random()-.5);
}

// ══════════════════════════════════════════════
//  SESIÓN
// ══════════════════════════════════════════════
function buildQueue() {
  const verbs   = verbData.filter(v=>v.lv===cfg.level);
  const grammar = grammarData.filter(g=>g.lv===cfg.level);
  let base = [];
  if(cfg.cat==='V'){
    ['te','nai_stem','ta','masu','Volitivo','Pasiva','Potencial'].forEach(t=>verbs.forEach(v=>base.push({type:'V',v,t})));
  } else if(cfg.cat==='G'){
    const valid=['te','ta','nai_stem','masu','Volitivo','Potencial','Pasiva','dic'];
    grammar.filter(g=>valid.includes(g.f)).forEach(g=>verbs.forEach(v=>base.push({type:'G',v,g})));
  } else {
    base = starData.filter(q=>q.lv===cfg.level).map(q=>({type:'S',q}));
  }
  return base.sort(()=>Math.random()-.5);
}

function startSession() {
  stopTimer();
  const m = cfg.mode;
  if(m==='review'){
    const bank = (currentUser?.missedBank||[]).filter(x=>x.lv===cfg.level&&x.cat===cfg.cat);
    if(!bank.length){ toast('復習する問題がありません 🎉',true); return; }
    session.queue = bank.map(x=>x.item).sort(()=>Math.random()-.5);
    session.limit = session.queue.length;
    initVars(m); navTo('game-screen'); nextQ(); return;
  }
  if(m==='duel'){
    const sel = document.querySelector('#duel-player-select .chip.on');
    const op  = allProfiles.find(p=>p.name===sel?.dataset.name);
    if(!op){ toast('対戦相手を選んでください',false); return; }
    session.duel = {turn:0,scores:[0,0],players:[currentUser,op]};
    document.getElementById('duel-scores-wrap').style.display='grid';
    renderDuelBoxes();
    session.queue = buildQueue();
    session.limit = Infinity;
    initVars(m); startCountdown(cfg.duelMinutes); navTo('game-screen'); nextQ(); return;
  }
  session.queue = buildQueue();
  session.limit = (m==='zen'||m==='time') ? Infinity : session.queue.length;
  initVars(m);
  if(m==='time') startCountdown(cfg.minutes);
  navTo('game-screen'); nextQ();
}

function initVars(m) {
  session.mode=m; session.correct=0; session.answered=0;
  session.seconds=0; session.lives=3; session.missed=[];
  session.isPaused=false;
  document.getElementById('duel-scores-wrap').style.display=(m==='duel')?'grid':'none';
  document.getElementById('lives-row').style.display=(m==='lives')?'flex':'none';
  document.getElementById('prog-fill').style.width='0%';
  document.getElementById('q-timer').style.display=(m==='time'||m==='duel')?'block':'none';
  if(m==='lives') renderLives();
}

function startCountdown(minutes) {
  let rem = minutes*60;
  document.getElementById('q-timer').textContent = fmtTime(rem);
  session.timerID = setInterval(()=>{
    if(session.isPaused) return;
    rem--;
    document.getElementById('q-timer').textContent = fmtTime(rem);
    if(rem<=0){ stopTimer(); endSession(); }
  },1000);
}
const fmtTime = s => `${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}`;
const stopTimer = () => { if(session.timerID){ clearInterval(session.timerID); session.timerID=null; } };
const renderLives = () => { document.getElementById('lives-row').innerHTML=''; for(let i=0;i<3;i++){ const s=document.createElement('span'); s.textContent=i<session.lives?'❤️':'🩶'; document.getElementById('lives-row').appendChild(s); } };

// ══════════════════════════════════════════════
//  PREGUNTAS
// ══════════════════════════════════════════════
function nextQ() {
  if(!session.queue.length||(session.limit<Infinity&&session.answered>=session.limit)){ endSession(); return; }
  const pct = session.limit<Infinity&&session.limit>0 ? (session.answered/session.limit*100) : 0;
  document.getElementById('prog-fill').style.width = pct+'%';
  document.getElementById('q-counter').textContent = session.limit<Infinity ? `${session.answered+1} / ${session.limit}` : `${session.answered+1}問`;
  const item = session.queue[0];
  if(!item){ endSession(); return; }
  if(item.type==='S'){ renderStar(item.q); return; }
  if(item.type==='V'){ renderVerb(item);   return; }
  if(item.type==='G'){ renderGrammar(item); return; }
}

// ── Verbo ────────────────────────────────────
function renderVerb(item) {
  const {v,t} = item;
  const correct = getForm(v,t);
  if(!correct){ skip(); return; }
  // Mostrar grupo para que aprenda, pero NO la forma
  setQCard(
    `${v.m} · ${groupLabel(v.g)}`,
    `${v.k}<rt>${v.f}</rt>`,
    formLabel(t),
    cfg.hint ? `💡 Toca para ver el tipo de conjugación` : null,
    formLabel(t) + ': ¿cuál es la forma correcta?'
  );
  const opts = buildTrickyOpts(correct, v, t);
  renderOpts(opts, correct, item);
}

// ── Gramática ─────────────────────────────────
// NO muestra el tag (ej: 〜ておきます), solo el SIGNIFICADO
function renderGrammar(item) {
  const {v,g} = item;
  const correct = getForm(v,g.f);
  if(!correct){ skip(); return; }
  setQCard(
    `${v.k}（${v.m}）`,
    `?<rt></rt>`,
    g.m,  // Solo el significado, sin el tag
    cfg.hint ? `💡 Toca para ver la fórmula` : null,
    g.formula
  );
  const opts = buildTrickyOpts(correct, v, g.f);
  renderOpts(opts, correct, item);
}

function setQCard(meta, mainHtml, tag, hintLabel, hintContent) {
  document.getElementById('q-meta').textContent = meta;
  document.getElementById('q-main').innerHTML = mainHtml;
  document.getElementById('q-tag').textContent = tag;
  const h = document.getElementById('q-hint');
  if(hintLabel && cfg.hint) {
    h.style.display = 'inline-block';
    h.textContent = hintLabel;
    h._content = hintContent || '';
    h.onclick = () => { h.textContent = h._content; h.onclick=null; };
  } else {
    h.style.display = 'none';
  }
}

// ── Estrella JLPT ─────────────────────────────
function renderStar(q) {
  const area = document.getElementById('opts-area'); area.innerHTML='';

  // Construir orden correcto y ubicar ★ en la posición 3 del orden
  // q.order = [idx1, idx2, idx3, idx4] donde idx es 1-based en q.parts
  // q.starIndex = cuál de los 4 partes (1-based) va en ★
  // La ★ es la posición 3 del orden (índice 2)
  const ordered = q.order.map(i => q.parts[i-1]);
  const starPosInOrder = q.order.indexOf(q.starIndex); // 0-based

  // Oración: pre + blank1 + blank2 + ★ + blank3 + post
  // pero la ★ puede estar en pos 0,1,2,3
  const sent = document.createElement('div');
  sent.className = 'star-sentence';
  let html = (q.pre ? q.pre + '　' : '');
  for(let i=0;i<4;i++){
    if(i === starPosInOrder) html += `<span class="star-blank is-star">★</span>　`;
    else html += `<span class="star-blank">${i+1}</span>　`;
  }
  html += (q.post || '');
  sent.innerHTML = html;
  area.appendChild(sent);

  // Hint: gramática oculta, se revela al tocar
  const hintRow = document.createElement('div');
  hintRow.style.cssText='display:flex;gap:8px;justify-content:center;margin:6px 0 12px;flex-wrap:wrap;';

  if(cfg.hint){
    const hBtn = document.createElement('div');
    hBtn.className='q-hint';
    hBtn.textContent='💡 文法のヒント';
    hBtn.onclick=()=>{ hBtn.textContent=q.grammar; hBtn.onclick=null; };
    hintRow.appendChild(hBtn);
  }
  area.appendChild(hintRow);

  // Instrucción
  const inst = document.createElement('div');
  inst.style.cssText='font-size:.62rem;color:var(--sub);text-align:center;margin-bottom:10px;';
  inst.textContent='★ に入る最もよいものを１・２・３・４から一つえらびなさい';
  area.appendChild(inst);

  // Opciones 2x2
  const grid = document.createElement('div');
  grid.className='star-opts';
  q.parts.forEach((p,i)=>{
    const btn = document.createElement('div');
    btn.className='star-opt';
    btn.innerHTML=`<div class="num">${i+1}</div><div>${p}</div>`;
    btn.onclick=()=>{
      const isCorrect = (i+1) === q.starIndex;
      btn.classList.add(isCorrect?'ok':'bad');
      if(!isCorrect) grid.querySelectorAll('.star-opt').forEach((b,j)=>{ if(j+1===q.starIndex) b.classList.add('ok'); });
      grid.querySelectorAll('.star-opt').forEach(b=>b.onclick=null);
      // Mostrar traducción si falla
      if(!isCorrect){
        const tr = document.createElement('div');
        tr.className='hint-reveal show';
        tr.innerHTML=`🌐 ${q.translation}`;
        area.appendChild(tr);
      }
      handleAnswer(isCorrect,{type:'S',q},p);
    };
    grid.appendChild(btn);
  });
  area.appendChild(grid);
}

// ── Opciones ──────────────────────────────────
function renderOpts(opts, correct, item) {
  const area = document.getElementById('opts-area'); area.innerHTML='';
  opts.forEach(o=>{
    const b = document.createElement('button');
    b.className='opt-btn'; b.textContent=o;
    b.onclick=()=>{
      const ok=o===correct;
      b.classList.add(ok?'ok':'bad');
      if(!ok) area.querySelectorAll('.opt-btn').forEach(x=>{if(x.textContent===correct)x.classList.add('ok');});
      area.querySelectorAll('.opt-btn').forEach(x=>{x.disabled=true;x.onclick=null;});
      handleAnswer(ok,item,o);
    };
    area.appendChild(b);
  });
}

// ── Respuesta ─────────────────────────────────
async function handleAnswer(ok, item, given) {
  session.answered++;
  if(ok) session.correct++;

  if(currentUser){
    currentUser.totalAnswered=(currentUser.totalAnswered||0)+1;
    if(ok) currentUser.totalCorrect=(currentUser.totalCorrect||0)+1;
    // Stats del mes
    if(currentUser.monthStr!==currentMonthStr()){ currentUser.monthStr=currentMonthStr(); currentUser.monthCorrect=0; currentUser.monthAnswered=0; }
    currentUser.monthAnswered=(currentUser.monthAnswered||0)+1;
    if(ok) currentUser.monthCorrect=(currentUser.monthCorrect||0)+1;
    if(!ok) saveMissed(item);
    else    clearMissed(item);
    await saveProfile(currentUser);
  }

  if(session.mode==='duel'){
    if(ok) session.duel.scores[session.duel.turn]++;
    renderDuelBoxes();
    session.duel.turn=1-session.duel.turn;
  }

  if(ok){
    toast('正解！✨',true);
    session.queue.shift();
    setTimeout(nextQ,1300);
  } else {
    if(session.mode==='zen'||session.mode==='time'||session.mode==='duel') session.queue.push(session.queue.shift());
    else session.queue.shift();
    if(session.mode==='lives'){
      session.lives--;
      renderLives();
      if(session.lives<=0){ toast('ゲームオーバー 💔',false); setTimeout(endSession,1500); return; }
    }
    session.missed.push({label:getItemLabel(item),correct:getItemCorrect(item),given});
    toast('不正解…\n答え: '+getItemCorrect(item),false);
    setTimeout(nextQ,2400);
  }
}

const getItemLabel  = item => item.type==='V'?`${item.v.k}（${formLabel(item.t)}）`:item.type==='G'?`${item.v.k} + ${item.g.tag}`:item.q?.grammar||'?';
const getItemCorrect= item => item.type==='V'?getForm(item.v,item.t):item.type==='G'?getForm(item.v,item.g.f):item.q?.parts[item.q.starIndex-1]||'?';

function saveMissed(item){
  if(!currentUser||item.type==='S')return;
  if(!currentUser.missedBank)currentUser.missedBank=[];
  const key=JSON.stringify({type:item.type,v:item.v?.f,t:item.t,g:item.g?.tag});
  if(!currentUser.missedBank.find(x=>x.key===key)) currentUser.missedBank.push({key,lv:cfg.level,cat:cfg.cat,item});
}
function clearMissed(item){
  if(!currentUser||!currentUser.missedBank||item.type==='S')return;
  const key=JSON.stringify({type:item.type,v:item.v?.f,t:item.t,g:item.g?.tag});
  currentUser.missedBank=currentUser.missedBank.filter(x=>x.key!==key);
}

function renderDuelBoxes(){
  const {players,scores,turn}=session.duel;
  [0,1].forEach(i=>{
    const box=document.getElementById('d-box-'+i);
    if(!players[i]){box.innerHTML='';return;}
    box.innerHTML=`<div class="duel-av">${players[i].avatar}</div><div class="duel-name">${players[i].name}</div><div class="duel-pts">${scores[i]}</div>`;
    box.classList.toggle('active',i===turn);
  });
}

function skip(){ session.queue.shift(); nextQ(); }

// ── Resultado ─────────────────────────────────
function endSession(){
  stopTimer();
  const pct=session.answered>0?Math.round(session.correct/session.answered*100):0;
  const ring=document.getElementById('res-ring');
  ring.textContent=pct+'%';
  ring.className='res-ring '+(pct>=80?'great':pct>=50?'ok':'bad');
  const msgs={great:'すばらしい！🌸',ok:'よくできました！',bad:'もっと練習しよう！'};
  document.getElementById('res-label').textContent=msgs[pct>=80?'great':pct>=50?'ok':'bad'];
  let sub='';
  if(session.mode==='duel'){
    const {players,scores}=session.duel;
    const w=scores[0]>scores[1]?players[0]:scores[1]>scores[0]?players[1]:null;
    sub=w?`${w.avatar} ${w.name} の勝ち！`:'引き分け！';
  }
  document.getElementById('res-sub').textContent=sub;
  document.getElementById('res-score').textContent=`${session.correct} / ${session.answered}`;
  document.getElementById('res-time').textContent=(session.mode==='time'||session.mode==='duel')?`タイム: ${session.mode==='time'?cfg.minutes:cfg.duelMinutes}分`:'';
  document.getElementById('res-acc').textContent=`正解率: ${pct}%`;
  const mwrap=document.getElementById('res-missed-wrap'),mlist=document.getElementById('res-missed');
  mlist.innerHTML='';
  if(session.missed.length){
    mwrap.style.display='block';
    session.missed.slice(0,12).forEach(m=>{
      const d=document.createElement('div'); d.className='res-missed-item';
      d.innerHTML=`<strong>${m.label}</strong><br>あなた: ${m.given||'—'} → <span>正解: ${m.correct}</span>`;
      mlist.appendChild(d);
    });
  } else mwrap.style.display='none';
  navTo('result-screen');
}

// ── Toast ─────────────────────────────────────
let toastT;
function toast(msg,ok){
  if(ok&&sfxOn) document.getElementById('sfx-ok').play().catch(()=>{});
  if(!ok&&sfxOn) document.getElementById('sfx-err').play().catch(()=>{});
  const el=document.getElementById('toast');
  el.textContent=msg; el.className='show '+(ok?'t-ok':'t-err');
  clearTimeout(toastT);
  toastT=setTimeout(()=>el.className='',ok?1200:2300);
}

// ── Biblioteca ────────────────────────────────
function switchLib(c){ libCat=c; document.getElementById('lib-V').classList.toggle('on',c==='V'); document.getElementById('lib-G').classList.toggle('on',c==='G'); renderLib(); }
function renderLib(){
  const tbl=document.getElementById('lib-tbl');
  const verbs=verbData.filter(v=>v.lv===cfg.level);
  if(libCat==='V'){
    tbl.style.minWidth='900px';
    let h=`<tr><th>Español</th><th>辞書</th><th>Grupo</th><th>ます</th><th>て</th><th>た</th><th>ない</th><th>意向</th><th>受身</th><th>可能</th></tr>`;
    verbs.forEach(v=>{ h+=`<tr>
      <td><b>${v.m}</b></td><td>${v.k}（${v.f}）</td>
      <td style="color:var(--accent);font-weight:700;">G${v.g}</td>
      <td>${getForm(v,'masu')}ます</td><td>${getForm(v,'te')}</td><td>${getForm(v,'ta')}</td>
      <td>${getForm(v,'nai_stem')}ない</td><td>${getForm(v,'Volitivo')}</td>
      <td>${getForm(v,'Pasiva')}れる</td><td>${getForm(v,'Potencial')}る</td>
    </tr>`; });
    tbl.innerHTML=h;
  } else {
    tbl.style.minWidth='100%';
    const gr=grammarData.filter(g=>g.lv===cfg.level);
    let h=`<tr><th>文法</th><th style="text-align:left;min-width:180px;">意味</th><th style="text-align:left;min-width:200px;">公式 / 例文</th></tr>`;
    gr.forEach(g=>{ h+=`<tr>
      <td style="color:var(--accent);font-weight:700;white-space:nowrap;">${g.tag}</td>
      <td style="text-align:left;"><b>${g.m}</b></td>
      <td style="text-align:left;font-size:.68rem;">
        <span style="color:var(--sub);">${g.formula}</span><br>
        <span style="color:var(--accent);">${g.hint||''}</span><br>
        <span style="color:var(--text);opacity:.7;">${g.ex||''}</span>
      </td>
    </tr>`; });
    tbl.innerHTML=h;
  }
}

// ── Audio / Tema ──────────────────────────────
function toggleBgm(){ bgmOn=!bgmOn; const l=document.getElementById('bgm-light'),d=document.getElementById('bgm-dark'),t=document.body.getAttribute('data-theme'); if(!bgmOn){l.pause();d.pause();}else(t==='dark'?d:l).play().catch(()=>{}); document.getElementById('lbl-bgm').textContent=bgmOn?'ON':'OFF'; }
function toggleSfx(){ sfxOn=!sfxOn; document.getElementById('lbl-sfx').textContent=sfxOn?'ON':'OFF'; }
function toggleTheme(){ const t=document.body.getAttribute('data-theme')==='dark'?'light':'dark'; document.body.setAttribute('data-theme',t); if(bgmOn){document.getElementById('bgm-light').pause();document.getElementById('bgm-dark').pause();(t==='dark'?document.getElementById('bgm-dark'):document.getElementById('bgm-light')).play().catch(()=>{});} }

// ── Labels ────────────────────────────────────
const formLabel  = t=>({te:'〜て形',ta:'〜た形',nai_stem:'〜ない(語幹)',masu:'〜ます(語幹)',Volitivo:'意向形',Potencial:'可能形',Pasiva:'受身形',dic:'辞書形'}[t]||t);
const groupLabel = g=>g===1?'グループ1(五段)':g===2?'グループ2(一段)':'グループ3(不規則)';

// ── Init ──────────────────────────────────────
window.onload = async () => {
  await loadAllProfiles();
  document.getElementById('loading-screen').style.display='none';
  renderProfileScreen();
};
