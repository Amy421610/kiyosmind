// ═══════════════════════════════════════════════
//  KIYO'S MIND — app.js
// ═══════════════════════════════════════════════

// ── Estado global ────────────────────────────
let cfg = {
  level: 'N4',
  cat: 'V',
  mode: 'all',
  qty: 20,
  hint: true,
};

let session = {
  queue: [], limit: 0,
  correct: 0, answered: 0,
  seconds: 0, timerID: null,
  isPaused: false,
};

let currentUser  = null;   // objeto perfil activo
let bgmOn = false, sfxOn = true;

const STORAGE_KEY = 'kiyos_mind_profiles_v2';

// ── Perfiles ────────────────────────────────
function loadProfiles() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
  catch { return []; }
}
function saveProfiles(arr) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
}
function getProfile(name) {
  return loadProfiles().find(p => p.name === name);
}
function upsertProfile(profile) {
  const arr = loadProfiles();
  const i = arr.findIndex(p => p.name === profile.name);
  if (i >= 0) arr[i] = profile; else arr.push(profile);
  saveProfiles(arr);
}

function emptyProfile(name, avatar) {
  return {
    name, avatar,
    streak: 0,
    bestStreak: 0,
    lastDate: null,        // YYYY-MM-DD
    activeDays: [],        // array de "YYYY-MM-DD"
    totalAnswered: 0,
    totalCorrect: 0,
    records: {},           // key: "level_cat_qty" → seconds
  };
}

// ── Pantalla de perfiles ─────────────────────
function renderProfileScreen() {
  const grid = document.getElementById('profile-grid');
  const profiles = loadProfiles();
  grid.innerHTML = '';

  if (profiles.length === 0) {
    grid.innerHTML = '<div style="grid-column:span 2;text-align:center;color:var(--sub);font-size:.82rem;padding:20px;">まだプロフィールがありません</div>';
    return;
  }

  profiles.forEach(p => {
    const today = todayStr();
    const streakOk = isStreakAlive(p);
    const acc = p.totalAnswered > 0 ? Math.round(p.totalCorrect / p.totalAnswered * 100) : null;
    const div = document.createElement('div');
    div.className = 'profile-card';
    div.innerHTML = `
      <div class="profile-avatar">${p.avatar}</div>
      <div class="profile-name">${p.name}</div>
      <div class="profile-streak">🔥 ${streakOk ? p.streak : 0}日連続</div>
      <div class="profile-acc">${acc !== null ? acc + '% 正解率' : '記録なし'}</div>
    `;
    div.onclick = () => selectProfile(p.name);
    grid.appendChild(div);
  });
}

function showAddProfile() {
  const f = document.getElementById('add-profile-form');
  f.style.display = f.style.display === 'none' ? 'block' : 'none';
}

function createProfile() {
  const name = document.getElementById('new-profile-name').value.trim();
  if (!name) { toast('名前を入力してください', false); return; }
  if (loadProfiles().find(p => p.name === name)) { toast('その名前はすでに存在します', false); return; }
  const av = document.querySelector('#avatar-picker .chip.on')?.dataset.av || '🌸';
  upsertProfile(emptyProfile(name, av));
  document.getElementById('new-profile-name').value = '';
  document.getElementById('add-profile-form').style.display = 'none';
  renderProfileScreen();
}

// Avatar picker
document.querySelectorAll('#avatar-picker .chip').forEach(c => {
  c.onclick = () => {
    document.querySelectorAll('#avatar-picker .chip').forEach(x => x.classList.remove('on'));
    c.classList.add('on');
  };
});

function selectProfile(name) {
  currentUser = getProfile(name);
  checkAndUpdateStreak();
  navTo('home-screen');
}

// ── Racha ────────────────────────────────────
function todayStr() {
  return new Date().toISOString().slice(0, 10);
}
function isStreakAlive(p) {
  if (!p.lastDate) return false;
  const today = todayStr();
  const yesterday = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
  return p.lastDate === today || p.lastDate === yesterday;
}
function checkAndUpdateStreak() {
  if (!currentUser) return;
  const today = todayStr();
  const yesterday = new Date(Date.now() - 864e5).toISOString().slice(0, 10);

  if (currentUser.lastDate === today) return; // ya contado hoy

  if (currentUser.lastDate === yesterday) {
    currentUser.streak = (currentUser.streak || 0) + 1;
  } else if (currentUser.lastDate !== today) {
    currentUser.streak = 1; // reiniciar
  }
  currentUser.lastDate = today;
  currentUser.bestStreak = Math.max(currentUser.streak, currentUser.bestStreak || 0);
  if (!currentUser.activeDays) currentUser.activeDays = [];
  if (!currentUser.activeDays.includes(today)) currentUser.activeDays.push(today);
  upsertProfile(currentUser);
}

// ── Home ─────────────────────────────────────
function renderHome() {
  if (!currentUser) return;
  const streak = isStreakAlive(currentUser) ? currentUser.streak : 0;
  const acc = currentUser.totalAnswered > 0
    ? Math.round(currentUser.totalCorrect / currentUser.totalAnswered * 100) + '%'
    : '—';

  document.getElementById('home-avatar').textContent = currentUser.avatar;
  document.getElementById('home-greeting').textContent = greet() + '、' + currentUser.name + '！';
  document.getElementById('home-sub').textContent = 'レベル: ' + cfg.level + '　カテゴリー: ' + catLabel(cfg.cat);
  document.getElementById('stat-streak').textContent = streak;
  document.getElementById('stat-acc').textContent = acc;
  document.getElementById('stat-total').textContent = currentUser.totalAnswered || 0;
  renderCalendar();
}
function greet() {
  const h = new Date().getHours();
  if (h < 12) return 'おはよう';
  if (h < 18) return 'こんにちは';
  return 'こんばんは';
}
function catLabel(c) {
  return c === 'V' ? '動詞' : c === 'G' ? '文法' : '⭐星問題';
}

function renderCalendar() {
  const grid = document.getElementById('cal-grid');
  grid.innerHTML = '';
  const today = todayStr();
  const days = currentUser.activeDays || [];
  for (let i = 13; i >= 0; i--) {
    const d = new Date(Date.now() - i * 864e5).toISOString().slice(0, 10);
    const el = document.createElement('div');
    el.className = 'cal-day' + (days.includes(d) ? ' done' : '') + (d === today ? ' today' : '');
    el.title = d;
    grid.appendChild(el);
  }
}

// ── Setters de configuración ─────────────────
function setLevel(lv, el) {
  cfg.level = lv;
  document.querySelectorAll('#level-chips .chip').forEach(c => c.classList.remove('on'));
  el.classList.add('on');
  renderHome();
}
function setCat(c) {
  cfg.cat = c;
  ['V','G','S'].forEach(x => document.getElementById('cat-'+x).classList.toggle('on', x===c));
  renderHome();
}
function setMode(m) {
  cfg.mode = m;
  document.getElementById('m-all').classList.toggle('on', m==='all');
  document.getElementById('m-speed').classList.toggle('on', m==='speed');
  document.getElementById('speed-opts').style.display = m==='speed' ? 'block' : 'none';
}
function setQty(q, el) {
  cfg.qty = q;
  document.querySelectorAll('#qty-chips .chip').forEach(c => c.classList.remove('on'));
  el.classList.add('on');
}
function setHint(v) {
  cfg.hint = v;
  document.getElementById('h-on').classList.toggle('on', v);
  document.getElementById('h-off').classList.toggle('on', !v);
}

// ── Navegación ───────────────────────────────
function navTo(id) {
  if (id !== 'game-screen') stopTimer();
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  if (id === 'profile-screen') renderProfileScreen();
  if (id === 'home-screen')    renderHome();
  if (id === 'lib-screen')     renderLib();
}

// ── Pausa ────────────────────────────────────
function togglePause(show) {
  session.isPaused = show;
  document.getElementById('pause-screen').classList.toggle('show', show);
}

// ══════════════════════════════════════════════
//  MOTOR DE CONJUGACIÓN
// ══════════════════════════════════════════════
function getForm(v, type) {
  const s = v.f.slice(0, -1);
  const l = v.f.slice(-1);

  const mapNai  = {る:'ら',む:'ま',ぶ:'ば',ぬ:'な',つ:'た',す:'さ',ぐ:'が',く:'か',う:'わ'};
  const mapTe   = {る:'って',む:'んで',ぶ:'んで',ぬ:'んで',つ:'って',す:'して',ぐ:'いで',く:'いて',う:'って'};
  const mapPot  = {る:'れ',む:'め',ぶ:'べ',ぬ:'ね',つ:'て',す:'せ',ぐ:'げ',く:'け',う:'え'};
  const mapPas  = {る:'ら',む:'ま',ぶ:'ば',ぬ:'な',つ:'た',す:'さ',ぐ:'が',く:'か',う:'わ'};
  const mapVol  = {る:'よう',む:'もう',ぶ:'ぼう',ぬ:'のう',つ:'とう',す:'そう',ぐ:'ごう',く:'こう',う:'おう'};
  const mapMasu = {る:'り',む:'み',ぶ:'び',ぬ:'に',つ:'ち',す:'し',ぐ:'ぎ',く:'き',う:'い'};

  // Grupo 3 (irregular)
  if (v.g === 3) {
    const base = v.f.replace(/する$/, '');
    if (v.f === 'くる') {
      if (type === 'nai_stem') return 'こ';
      if (type === 'te')       return 'きて';
      if (type === 'ta')       return 'きた';
      if (type === 'masu')     return 'き';
      if (type === 'Volitivo') return 'こよう';
      if (type === 'Potencial')return 'こられ';
      if (type === 'Pasiva')   return 'こられ';
      if (type === 'dic')      return 'くる';
    }
    // する / ～する
    if (type === 'nai_stem') return base + 'し';
    if (type === 'te')       return base + 'して';
    if (type === 'ta')       return base + 'した';
    if (type === 'masu')     return base + 'し';
    if (type === 'Volitivo') return base + 'しよう';
    if (type === 'Potencial')return base + 'でき';
    if (type === 'Pasiva')   return base + 'され';
    if (type === 'dic')      return v.f;
  }

  // Grupo 2 (ichidan)
  if (v.g === 2) {
    if (type === 'nai_stem') return s;
    if (type === 'te')       return s + 'て';
    if (type === 'ta')       return s + 'た';
    if (type === 'masu')     return s;
    if (type === 'Volitivo') return s + 'よう';
    if (type === 'Potencial')return s + 'られ';
    if (type === 'Pasiva')   return s + 'られ';
    if (type === 'dic')      return v.f;
  }

  // Grupo 1 (godan)
  if (type === 'dic')      return v.f;
  if (type === 'nai_stem') return s + mapNai[l];
  if (type === 'masu')     return s + mapMasu[l];
  if (type === 'te') {
    if (v.f === 'いく') return 'いって';
    return s + mapTe[l];
  }
  if (type === 'ta') {
    if (v.f === 'いく') return 'いった';
    const te = s + mapTe[l];
    return te.replace('んで','んだ').replace('いで','いだ').replace('いて','いた')
             .replace('って','った').replace('して','した').replace('て','た');
  }
  if (type === 'Potencial') return s + mapPot[l] + 'る';
  if (type === 'Pasiva')    return s + mapPas[l] + 'れ';
  if (type === 'Volitivo')  return s + mapVol[l];
  return v.f;
}

// ══════════════════════════════════════════════
//  SESIÓN
// ══════════════════════════════════════════════
function startSession() {
  stopTimer();
  session = { queue:[], limit:0, correct:0, answered:0, seconds:0, timerID:null, isPaused:false };

  const verbs   = verbData.filter(v => v.lv === cfg.level);
  const grammar = grammarData.filter(g => g.lv === cfg.level);
  let base = [];

  if (cfg.cat === 'V') {
    const forms = ['te','nai_stem','ta','masu','Volitivo','Pasiva','Potencial'];
    verbs.forEach(v => forms.forEach(t => base.push({ type:'V', v, t })));
  } else if (cfg.cat === 'G') {
    // Solo gramáticas con forma que el motor puede generar
    const validForms = ['te','ta','nai_stem','masu','Volitivo','Potencial','Pasiva'];
    grammar.filter(g => validForms.includes(g.f)).forEach(g => {
      verbs.forEach(v => base.push({ type:'G', v, g }));
    });
  } else {
    base = starData.filter(q => q.lv === cfg.level).map(q => ({ type:'S', q }));
  }

  base = base.sort(() => Math.random() - .5);
  session.limit = cfg.mode === 'all' ? base.length : Math.min(cfg.qty, base.length);
  session.queue = base.slice(0, session.limit);

  // Timer
  const timerEl = document.getElementById('q-timer');
  if (cfg.mode === 'speed') {
    timerEl.style.display = 'block';
    timerEl.textContent = '0s';
    session.timerID = setInterval(() => {
      if (!session.isPaused) {
        session.seconds++;
        timerEl.textContent = session.seconds + 's';
      }
    }, 1000);
  } else {
    timerEl.style.display = 'none';
  }

  navTo('game-screen');
  nextQ();
}

function stopTimer() {
  if (session.timerID) { clearInterval(session.timerID); session.timerID = null; }
}

// ══════════════════════════════════════════════
//  PREGUNTAS
// ══════════════════════════════════════════════
function nextQ() {
  if (session.answered >= session.limit) { endSession(); return; }

  // Progreso
  const pct = session.limit > 0 ? (session.answered / session.limit * 100) : 0;
  document.getElementById('prog-fill').style.width = pct + '%';
  document.getElementById('q-counter').textContent = `${session.answered + 1} / ${session.limit}`;

  const item = session.queue[0];
  if (!item) { endSession(); return; }

  if (item.type === 'S') { renderStar(item.q); return; }
  if (item.type === 'V') { renderVerb(item);   return; }
  if (item.type === 'G') { renderGrammar(item); return; }
}

// ── Preguntas de verbo ───────────────────────
function renderVerb(item) {
  const { v, t } = item;
  const correct = getForm(v, t);
  if (!correct) { skip(); return; }

  setQCard(
    v.m,
    `${v.k}<rt>${v.f}</rt>`,
    formLabel(t),
    cfg.hint ? `💡 Forma ${formLabel(t)} de ${groupLabel(v.g)}` : null
  );

  const opts = buildOpts(correct, v, ['te','nai_stem','ta','masu','Volitivo','Potencial']);
  renderOpts(opts, correct, null, true);
}

// ── Preguntas de gramática ───────────────────
function renderGrammar(item) {
  const { v, g } = item;
  const correct = getForm(v, g.f);
  if (!correct) { skip(); return; }

  setQCard(
    `${v.k} (${v.m})`,
    `${g.tag}<rt></rt>`,
    g.m,
    cfg.hint ? `💡 ${g.hint}` : null
  );

  const opts = buildOpts(correct, v, ['te','nai_stem','ta','masu','Volitivo','Potencial']);
  renderOpts(opts, correct, null, true);
}

// ── Preguntas estrella ───────────────────────
function renderStar(q) {
  const area = document.getElementById('opts-area');
  area.innerHTML = '';

  setQCard('⭐ 星問題', '★<rt></rt>', q.grammar, null);

  // Oración
  const sent = document.createElement('div');
  sent.className = 'star-sentence';
  sent.innerHTML = q.sentence.replace('★', '<span class="blank">　★　</span>');
  area.appendChild(sent);

  // Opciones
  const shuffled = [...q.options].sort(() => Math.random() - .5);
  shuffled.forEach(opt => {
    const b = document.createElement('button');
    b.className = 'opt-btn';
    b.textContent = opt;
    b.onclick = () => {
      const ok = opt === q.answer;
      b.classList.add(ok ? 'correct' : 'wrong');
      if (!ok) {
        // Marcar correcta
        area.querySelectorAll('.opt-btn').forEach(x => {
          if (x.textContent === q.answer) x.classList.add('correct');
        });
      }
      lockOpts();
      recordAnswer(ok);
      if (ok) {
        toast('正解！✨', true);
        session.queue.shift();
        setTimeout(nextQ, 1400);
      } else {
        toast(`答え: ${q.answer}${q.explanation ? '\n' + q.explanation : ''}`, false);
        session.queue.push(session.queue.shift());
        setTimeout(nextQ, 2600);
      }
    };
    area.appendChild(b);
  });
}

// ── Helpers ──────────────────────────────────
function setQCard(meta, mainHtml, tag, hint) {
  document.getElementById('q-meta').textContent = meta;
  document.getElementById('q-main').innerHTML = mainHtml;
  document.getElementById('q-tag').textContent = tag;
  const hEl = document.getElementById('q-hint');
  if (hint) { hEl.textContent = hint; hEl.style.display = 'inline-block'; }
  else       { hEl.style.display = 'none'; }
}

function buildOpts(correct, v, formTypes) {
  const pool = formTypes.map(t => getForm(v, t)).filter(x => x && x !== correct);
  const opts = [correct];
  const shuffled = pool.sort(() => Math.random() - .5);
  for (const x of shuffled) {
    if (!opts.includes(x)) opts.push(x);
    if (opts.length >= 4) break;
  }
  return opts.sort(() => Math.random() - .5);
}

function renderOpts(opts, correct, explanation, requeueOnWrong) {
  const area = document.getElementById('opts-area');
  area.innerHTML = '';
  opts.forEach(o => {
    const b = document.createElement('button');
    b.className = 'opt-btn';
    b.textContent = o;
    b.onclick = () => {
      const ok = o === correct;
      b.classList.add(ok ? 'correct' : 'wrong');
      if (!ok) area.querySelectorAll('.opt-btn').forEach(x => { if (x.textContent === correct) x.classList.add('correct'); });
      lockOpts();
      recordAnswer(ok);
      if (ok) {
        toast('正解！✨', true);
        session.queue.shift();
        setTimeout(nextQ, 1400);
      } else {
        toast(`答え: ${correct}`, false);
        if (requeueOnWrong) session.queue.push(session.queue.shift());
        else session.queue.shift();
        setTimeout(nextQ, 2200);
      }
    };
    area.appendChild(b);
  });
}

function lockOpts() {
  document.querySelectorAll('.opt-btn').forEach(b => b.onclick = null);
}

function skip() {
  session.queue.shift();
  nextQ();
}

function recordAnswer(ok) {
  session.answered++;
  if (ok) session.correct++;
  if (currentUser) {
    currentUser.totalAnswered = (currentUser.totalAnswered || 0) + 1;
    if (ok) currentUser.totalCorrect = (currentUser.totalCorrect || 0) + 1;
    upsertProfile(currentUser);
  }
}

// ── Fin de sesión ────────────────────────────
function endSession() {
  stopTimer();

  const pct = session.limit > 0 ? Math.round(session.correct / session.limit * 100) : 0;
  const ring = document.getElementById('result-ring');
  ring.textContent = pct + '%';
  ring.className = 'result-ring ' + (pct >= 80 ? 'great' : pct >= 50 ? 'ok' : 'bad');

  const labels = {great:'すばらしい！🌸', ok:'よくできました！', bad:'もっと練習しよう！'};
  const key = pct >= 80 ? 'great' : pct >= 50 ? 'ok' : 'bad';
  document.getElementById('result-label').textContent = labels[key];
  document.getElementById('result-sub').textContent = '';
  document.getElementById('result-score').textContent = `${session.correct} / ${session.limit}`;
  document.getElementById('result-acc').textContent = `正解率: ${pct}%`;

  const timeEl = document.getElementById('result-time');
  if (cfg.mode === 'speed') {
    timeEl.style.display = 'block';
    timeEl.textContent = `タイム: ${session.seconds}s`;
    saveRecord(session.limit, session.seconds);
  } else {
    timeEl.style.display = 'none';
  }

  navTo('result-screen');
}

function saveRecord(qty, sec) {
  if (!currentUser) return;
  const k = `${cfg.level}_${cfg.cat}_${qty}`;
  if (!currentUser.records) currentUser.records = {};
  if (!currentUser.records[k] || sec < currentUser.records[k]) currentUser.records[k] = sec;
  upsertProfile(currentUser);
}

// ── Toast ────────────────────────────────────
let toastTimer;
function toast(msg, ok) {
  if (ok && sfxOn) document.getElementById('sfx-ok').play().catch(()=>{});
  if (!ok && sfxOn) document.getElementById('sfx-err').play().catch(()=>{});

  const el = document.getElementById('toast');
  el.textContent = msg;
  el.className = 'toast show ' + (ok ? 't-ok' : 't-err');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { el.className = 'toast'; }, ok ? 1300 : 2500);
}

// ── Labels ───────────────────────────────────
function formLabel(t) {
  const map = {
    te:'〜て形', ta:'〜た形', nai_stem:'〜ない(語幹)',
    masu:'〜ます(語幹)', Volitivo:'意向形', Potencial:'可能形', Pasiva:'受身形', dic:'辞書形',
  };
  return map[t] || t;
}
function groupLabel(g) {
  return g === 1 ? 'グループ1(五段)' : g === 2 ? 'グループ2(一段)' : 'グループ3(不規則)';
}

// ── Biblioteca ───────────────────────────────
let libCat = 'V';
function switchLib(c) {
  libCat = c;
  document.getElementById('lib-V').classList.toggle('on', c==='V');
  document.getElementById('lib-G').classList.toggle('on', c==='G');
  renderLib();
}
function renderLib() {
  const wrap = document.getElementById('lib-table-wrap');
  const tbl  = document.getElementById('lib-table');
  const verbs = verbData.filter(v => v.lv === cfg.level);

  if (libCat === 'V') {
    wrap.style.minWidth = '';
    tbl.style.minWidth = '860px';
    let html = `<tr>
      <th>Español</th><th>辞書</th><th>ます</th><th>て</th><th>た</th>
      <th>ない</th><th>意向</th><th>受身</th><th>可能</th>
    </tr>`;
    verbs.forEach(v => {
      html += `<tr>
        <td><b>${v.m}</b></td>
        <td>${v.k}（${v.f}）</td>
        <td>${getForm(v,'masu')}ます</td>
        <td>${getForm(v,'te')}</td>
        <td>${getForm(v,'ta')}</td>
        <td>${getForm(v,'nai_stem')}ない</td>
        <td>${getForm(v,'Volitivo')}</td>
        <td>${getForm(v,'Pasiva')}れる</td>
        <td>${getForm(v,'Potencial')}る</td>
      </tr>`;
    });
    tbl.innerHTML = html;
  } else {
    tbl.style.minWidth = '100%';
    const grammar = grammarData.filter(g => g.lv === cfg.level);
    let html = `<tr><th>文法</th><th style="text-align:left;">意味 / 公式</th></tr>`;
    grammar.forEach(g => {
      html += `<tr>
        <td style="color:var(--accent);font-weight:700;white-space:nowrap;">${g.tag}</td>
        <td style="text-align:left;"><b>${g.m}</b><br>
          <span style="color:var(--sub);font-size:.7rem;">${g.formula}</span><br>
          <span style="color:var(--accent);font-size:.68rem;">${g.hint || ''}</span>
        </td>
      </tr>`;
    });
    tbl.innerHTML = html;
  }
}

// ── Audio ────────────────────────────────────
function toggleBgm() {
  bgmOn = !bgmOn;
  const lgt = document.getElementById('bgm-light');
  const drk = document.getElementById('bgm-dark');
  const theme = document.body.getAttribute('data-theme');
  if (!bgmOn) { lgt.pause(); drk.pause(); }
  else (theme === 'dark' ? drk : lgt).play().catch(()=>{});
  document.getElementById('lbl-bgm').textContent = bgmOn ? 'ON' : 'OFF';
}
function toggleSfx() {
  sfxOn = !sfxOn;
  document.getElementById('lbl-sfx').textContent = sfxOn ? 'ON' : 'OFF';
}
function toggleTheme() {
  const t = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.body.setAttribute('data-theme', t);
  if (bgmOn) {
    document.getElementById('bgm-light').pause();
    document.getElementById('bgm-dark').pause();
    (t === 'dark' ? document.getElementById('bgm-dark') : document.getElementById('bgm-light')).play().catch(()=>{});
  }
}

// ── Init ─────────────────────────────────────
window.onload = () => {
  renderProfileScreen();
};
