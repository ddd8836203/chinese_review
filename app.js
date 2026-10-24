// ============================================================================
// 六上國語特訓 2.0 (app.js) — 100% 對齊數學網頁 2.0 視覺排版與互動架構
// ============================================================================

const STORAGE_PREFIX = 'g6_chinese_';
const ACTIVE_USER_KEY = 'g6_chinese_active_user';
const LEGACY_MIGRATED_KEY = 'g6_chinese_legacy_migrated_v2';
const CLOUD_SYNC_URL_KEY = 'g6_chinese_firebase_db_url';
const DEFAULT_FIREBASE_DB_URL = 'https://math-review-6-default-rtdb.asia-southeast1.firebasedatabase.app';

const USERS = [
  { id: 'rex',   name: 'Rex',    role: '正式學員', icon: '🦖', color: '#5b4bdb', bg: '#ede9fe', isTest: false },
  { id: 'test1', name: 'Test 1', role: '測試帳號', icon: '🧪', color: '#0d9488', bg: '#ccfbf1', isTest: true },
  { id: 'test2', name: 'Test 2', role: '測試帳號', icon: '🔬', color: '#d97706', bg: '#fef3c7', isTest: true },
  { id: 'test3', name: 'Test 3', role: '測試帳號', icon: '🛠️', color: '#e11d48', bg: '#ffe4e6', isTest: true }
];

const ALL_BATCH_TYPES = ['寫國字', '寫注音', '原本題庫', '新題庫擴充', '段考真題'];

const state = {
  currentUser: localStorage.getItem(ACTIVE_USER_KEY) || 'rex',
  view: 'dashboard', // 'dashboard' | 'quiz' | 'result' | 'error_book' | 'print' | 'export'
  selectedBatches: [...ALL_BATCH_TYPES],
  examSchool: 'ALL',

  // Quiz session
  quizTitle: '',
  quizMode: 'unit', // 'unit' | 'error_book' | 'qr_sheet'
  currentUnitId: null,
  quizQuestions: [],
  quizIndex: 0,
  resumeTargetIdx: null,
  answers: {},          // qId -> { result: 'ok'|'slow'|'bad', selectedOptionText, revealed, wrongBlanks: [] }
  optionOrders: {},     // qId -> options array
  imgModeQuestions: {}, // qId -> boolean
  sessionHistory: [],
  lastFinishedSession: null,

  // Error book filter
  errorFilterUnit: null,

  // Print setup config
  printConfig: {
    unitIds: ['L1'],
    batches: [...ALL_BATCH_TYPES],
    count: 10
  },

  // Cloud sync
  cloudDbUrl: localStorage.getItem(CLOUD_SYNC_URL_KEY) || DEFAULT_FIREBASE_DB_URL
};

// ============================================================================
// 1. 本地儲存、舊資料無痛遷移與 Firebase 雲端同步
// ============================================================================
function getUserKey(key, userId = state.currentUser) {
  return `${STORAGE_PREFIX}u_${userId}_${key}`;
}

function getCurrentUserObj() {
  return USERS.find(u => u.id === state.currentUser) || USERS[0];
}

function migrateLegacyDataToRex() {
  if (localStorage.getItem(LEGACY_MIGRATED_KEY)) return;
  try {
    const legacyEB = localStorage.getItem('g6_chinese_errorBook');
    const legacyEC = localStorage.getItem('g6_chinese_errorCounts');
    const legacyFH = localStorage.getItem('g6_chinese_full_history');
    if (legacyEB && !localStorage.getItem(getUserKey('errorBook', 'rex'))) {
      localStorage.setItem(getUserKey('errorBook', 'rex'), legacyEB);
    }
    if (legacyEC && !localStorage.getItem(getUserKey('errorCounts', 'rex'))) {
      localStorage.setItem(getUserKey('errorCounts', 'rex'), legacyEC);
    }
    if (legacyFH && !localStorage.getItem(getUserKey('full_history', 'rex'))) {
      localStorage.setItem(getUserKey('full_history', 'rex'), legacyFH);
    }
    localStorage.setItem(LEGACY_MIGRATED_KEY, '1');
  } catch (e) {
    console.warn('Migration warning:', e);
  }
}

function getErrorBook(uid = state.currentUser) {
  try { return JSON.parse(localStorage.getItem(getUserKey('errorBook', uid)) || '[]'); }
  catch { return []; }
}
function saveErrorBook(list) {
  localStorage.setItem(getUserKey('errorBook'), JSON.stringify([...new Set(list)]));
  updateNavBadge();
}

function getErrorCounts(uid = state.currentUser) {
  try { return JSON.parse(localStorage.getItem(getUserKey('errorCounts', uid)) || '{}'); }
  catch { return {}; }
}
function saveErrorCounts(map, uid = state.currentUser) {
  localStorage.setItem(getUserKey('errorCounts', uid), JSON.stringify(map));
}

function getCorrectCounts(uid = state.currentUser) {
  try { return JSON.parse(localStorage.getItem(getUserKey('correctCounts', uid)) || '{}'); }
  catch { return {}; }
}
function saveCorrectCounts(map, uid = state.currentUser) {
  localStorage.setItem(getUserKey('correctCounts', uid), JSON.stringify(map));
}

function mergeCounts(localMap = {}, remoteMap = {}) {
  const res = { ...localMap };
  for (const [k, v] of Object.entries(remoteMap || {})) {
    res[k] = Math.max(res[k] || 0, v || 0);
  }
  return res;
}

function getMasteredIds(uid = state.currentUser) {
  try { return JSON.parse(localStorage.getItem(getUserKey('masteredIds', uid)) || '[]'); }
  catch { return []; }
}
function saveMasteredIds(list) {
  localStorage.setItem(getUserKey('masteredIds'), JSON.stringify([...new Set(list)]));
}

function getSlowIds(uid = state.currentUser) {
  try { return JSON.parse(localStorage.getItem(getUserKey('uncertainIds', uid)) || '[]'); }
  catch { return []; }
}
function saveSlowIds(list) {
  localStorage.setItem(getUserKey('uncertainIds'), JSON.stringify([...new Set(list)]));
}

function getFullHistory(uid = state.currentUser) {
  try { return JSON.parse(localStorage.getItem(getUserKey('full_history', uid)) || '[]'); }
  catch { return []; }
}
function saveFullHistory(list) {
  localStorage.setItem(getUserKey('full_history'), JSON.stringify(list));
}

function getUnitProgressMap(uid = state.currentUser) {
  try { return JSON.parse(localStorage.getItem(getUserKey('unitProgress', uid)) || '{}'); }
  catch { return {}; }
}
function saveUnitProgress(unitId, index) {
  if (!unitId) return;
  const map = getUnitProgressMap();
  map[unitId] = { index, updatedAt: new Date().toISOString() };
  localStorage.setItem(getUserKey('unitProgress'), JSON.stringify(map));
}

function loadUserStatsSummary(uid) {
  const bank = getCleanBank();
  const eb = getErrorBook(uid);
  const ms = getMasteredIds(uid);
  const fh = getFullHistory(uid);
  const mastered = bank.filter(q => ms.includes(q.id) && !eb.includes(q.id)).length;
  const pct = bank.length > 0 ? Math.round((mastered / bank.length) * 100) : 0;
  return { errCount: eb.length, mastered, pct, sessions: fh.length };
}

let cloudTimer = null;
function scheduleCloudPush() {
  if (!state.cloudDbUrl) return;
  if (cloudTimer) clearTimeout(cloudTimer);
  cloudTimer = setTimeout(() => pushToCloud(state.currentUser), 1000);
}

async function pushToCloud(uid = state.currentUser) {
  if (!state.cloudDbUrl) return;
  const base = state.cloudDbUrl.replace(/\/+$/, '');
  const payload = {
    updatedAt: new Date().toISOString(),
    errorBook: getErrorBook(uid),
    errorCounts: getErrorCounts(uid),
    correctCounts: getCorrectCounts(uid),
    masteredIds: getMasteredIds(uid),
    uncertainIds: getSlowIds(uid),
    full_history: getFullHistory(uid),
    unitProgress: getUnitProgressMap(uid)
  };
  try {
    await fetch(`${base}/g6_chinese_users/${uid}.json`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
  } catch (e) {}
}

async function syncFromCloud(uid = state.currentUser, notify = false) {
  if (!state.cloudDbUrl) return;
  const base = state.cloudDbUrl.replace(/\/+$/, '');
  try {
    const res = await fetch(`${base}/g6_chinese_users/${uid}.json`);
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const data = await res.json();
    if (data && typeof data === 'object') {
      const mergedEB = [...new Set([...getErrorBook(uid), ...(data.errorBook || [])])];
      localStorage.setItem(getUserKey('errorBook', uid), JSON.stringify(mergedEB));

      const mergedMS = [...new Set([...getMasteredIds(uid), ...(data.masteredIds || [])])].filter(id => !mergedEB.includes(id));
      localStorage.setItem(getUserKey('masteredIds', uid), JSON.stringify(mergedMS));

      // 跨設備合併次數表：取 Math.max，保證任何設備練習數字持續累積！
      if (data.errorCounts) {
        localStorage.setItem(getUserKey('errorCounts', uid), JSON.stringify(mergeCounts(getErrorCounts(uid), data.errorCounts)));
      }
      if (data.correctCounts) {
        localStorage.setItem(getUserKey('correctCounts', uid), JSON.stringify(mergeCounts(getCorrectCounts(uid), data.correctCounts)));
      }
      if (Array.isArray(data.full_history) && data.full_history.length > getFullHistory(uid).length) {
        localStorage.setItem(getUserKey('full_history', uid), JSON.stringify(data.full_history));
      }
      if (data.unitProgress) {
        localStorage.setItem(getUserKey('unitProgress', uid), JSON.stringify({ ...data.unitProgress, ...getUnitProgressMap(uid) }));
      }
      updateNavBadge();
      if (state.view === 'dashboard') renderDashboardView();
      if (state.view === 'quiz') renderQuizQuestion();
      if (notify) showToast('✅ 已從雲端同步最新累積學習次數！');
    } else {
      await pushToCloud(uid);
      if (notify) showToast('☁️ 已將本機進度備份至雲端！');
    }
  } catch (e) {
    if (notify) showToast('⚠️ 雲端連線失敗，目前使用本機儲存');
  }
}

// ============================================================================
// 做法 B：自給自足日誌（給 AI 診斷分析，不依賴本機 data.js）
// ============================================================================
function buildSlimLogEntry(q, resultState, chosenOpt, userText, durationSec) {
  let optsStr = '';
  if (q.type === 'mcq' && Array.isArray(q.options)) {
    optsStr = q.options.map(o => {
      const lbl = o.label ? `[${o.label}] ` : '';
      const star = o.isCorrect ? '*' : '';
      return `${lbl}${o.text}${star}`;
    }).join(' | ');
  } else {
    optsStr = `手寫正解: ${q.correctAnswer || ''}`;
  }

  let studentAns = '';
  if (chosenOpt) {
    studentAns = (chosenOpt.label ? `[${chosenOpt.label}] ` : '') + (chosenOpt.text || '');
  } else {
    studentAns = userText || (resultState === 'ok' ? '全對秒殺' : resultState === 'slow' ? '寫對想很久' : '寫錯');
  }

  const nowStr = new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei', hour12: false });

  return {
    t: nowStr,
    id: q.id,
    sch: q.school || '單元特訓',
    cat: q.category || q.batch || '',
    q: q.question,
    opts: optsStr,
    ans: studentAns,
    res: resultState, // 'ok' | 'slow' | 'bad'
    sec: durationSec || 1
  };
}

async function pushSlimLogToCloud(q, resultState, chosenOpt, userText, durationSec) {
  const entry = buildSlimLogEntry(q, resultState, chosenOpt, userText, durationSec);

  // 1. 本地輕量快取最近 200 筆流水日誌（供匯出與離線分析）
  try {
    const raw = localStorage.getItem(getUserKey('recent_answer_logs')) || '[]';
    const arr = JSON.parse(raw);
    arr.unshift(entry);
    if (arr.length > 200) arr.length = 200;
    localStorage.setItem(getUserKey('recent_answer_logs'), JSON.stringify(arr));
  } catch (e) {}

  // 2. 獨立日誌節點直推雲端（只寫不讀，避免消耗同步頻寬）
  if (!state.cloudDbUrl) return;
  const base = state.cloudDbUrl.replace(/\/+$/, '');
  const uid = state.currentUser;
  const logKey = `${Date.now()}_${q.id}`;
  try {
    await fetch(`${base}/g6_chinese_logs/${uid}/${logKey}.json`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(entry)
    });
  } catch (e) {}
}

function switchUser(uid) {
  if (!USERS.some(u => u.id === uid)) return;
  state.currentUser = uid;
  localStorage.setItem(ACTIVE_USER_KEY, uid);
  updateNavUserUI();
  updateNavBadge();
  syncFromCloud(uid, false);
  state.view = 'dashboard';
  renderDashboardView();
  showToast(`已切換為：${getCurrentUserObj().icon} ${getCurrentUserObj().name}`);
}

function resetTestUser(uid) {
  const uObj = USERS.find(x => x.id === uid);
  if (!uObj || !uObj.isTest) {
    showToast('🔒 正式學員 Rex 資料受保護，禁止清空！');
    return;
  }
  ['errorBook', 'errorCounts', 'correctCounts', 'masteredIds', 'uncertainIds', 'full_history', 'unitProgress', 'recent_answer_logs'].forEach(k => {
    localStorage.removeItem(getUserKey(k, uid));
  });
  if (state.cloudDbUrl) {
    const base = state.cloudDbUrl.replace(/\/+$/, '');
    fetch(`${base}/g6_chinese_users/${uid}.json`, { method: 'DELETE' }).catch(() => {});
    fetch(`${base}/g6_chinese_logs/${uid}.json`, { method: 'DELETE' }).catch(() => {});
  }
  updateNavBadge();
  if (state.view === 'dashboard') renderDashboardView();
  showToast(`🧹 已清空測試帳號【${uObj.name}】的所有紀錄`);
}

// ============================================================================
// 2. 介面共用輔助 (Toast、Topbar、Lightbox、帳號設定彈窗、QR Code)
// ============================================================================
let toastTimer = null;
function showToast(msg) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2600);
}

function updateNavBadge() {
  const badge = document.getElementById('nav-error-count');
  if (!badge) return;
  const cnt = getErrorBook().length;
  badge.textContent = cnt;
  if (cnt === 0) badge.classList.add('zero');
  else badge.classList.remove('zero');
}

function updateNavUserUI() {
  const curUser = getCurrentUserObj();
  const btn = document.getElementById('nav-user');
  const iconEl = document.getElementById('nav-user-icon');
  const nameEl = document.getElementById('nav-user-name');
  if (iconEl) iconEl.textContent = curUser.icon;
  if (nameEl) nameEl.textContent = curUser.name;
  if (btn) {
    btn.style.borderColor = curUser.color;
    btn.style.background = curUser.bg;
    btn.style.color = curUser.color;
  }
}

function getCleanBank() {
  return (typeof QUESTION_BANK !== 'undefined' ? QUESTION_BANK : []).filter(Boolean);
}

function getExamSchoolsList() {
  const bank = getCleanBank().filter(q => q.lessonId === 'EXAM_MID1');
  const map = {};
  bank.forEach(q => {
    if (q.school) map[q.school] = (map[q.school] || 0) + 1;
  });
  const list = [{ id: 'ALL', shortName: '🏫 全部六校合輯', count: bank.length }];
  Object.keys(map).forEach(s => {
    list.push({ id: s, shortName: `🏫 ${s}`, count: map[s] });
  });
  return list;
}

function formatPlainStem(questionText) {
  return String(questionText || '').replace(/\[\[(國字|注音):(.*?):(.*?)\]\]/g, '【$2 ➔ ？】');
}

function parseHandwritingBlanks(questionText) {
  const regex = /\[\[(國字|注音):(.*?):(.*?)\]\]/g;
  const blanks = [];
  let match;
  let idx = 0;
  while ((match = regex.exec(questionText)) !== null) {
    blanks.push({ index: idx++, mode: match[1], prompt: match[2], answer: match[3] });
  }
  return blanks;
}

function makeQRCode(url) {
  if (typeof qrcode === 'undefined') return '';
  try {
    const qr = qrcode(0, 'L');
    qr.addData(url);
    qr.make();
    return qr.createSvgTag({ cellSize: 2, margin: 1 });
  } catch (e) {
    return '';
  }
}

function openLightbox(imgSrc, title = '考卷原圖檢視') {
  let modal = document.getElementById('lightbox-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'lightbox-modal';
    modal.className = 'lightbox-modal';
    document.body.appendChild(modal);
  }
  modal.innerHTML = `
    <div class="lightbox-header">
      <span class="lightbox-title">📷 ${title}</span>
      <button type="button" class="lightbox-close-btn" id="lightbox-close" title="關閉">✕</button>
    </div>
    <div class="lightbox-body" id="lightbox-body">
      <img src="${imgSrc}" alt="${title}">
    </div>
  `;
  modal.style.display = 'flex';
  const closeModal = () => { modal.style.display = 'none'; };
  document.getElementById('lightbox-close').onclick = closeModal;
  modal.onclick = (e) => {
    if (e.target === modal || e.target.id === 'lightbox-body') closeModal();
  };
}

function openUserModal() {
  let modal = document.getElementById('user-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'user-modal';
    modal.className = 'user-modal-backdrop';
    document.body.appendChild(modal);
  }

  const renderModalContent = () => {
    const userCardsHtml = USERS.map(u => {
      const isCurrent = u.id === state.currentUser;
      const st = loadUserStatsSummary(u.id);
      return `
        <div class="user-profile-card ${isCurrent ? 'active' : ''}" style="--u-color: ${u.color}; --u-bg: ${u.bg};">
          <div class="u-card-left" data-pick-user="${u.id}">
            <span class="u-avatar">${u.icon}</span>
            <div class="u-info">
              <div class="u-name-row">
                <b>${u.name}</b>
                <span class="u-role-tag" style="background:${u.bg}; color:${u.color};">${u.role}</span>
                ${isCurrent ? `<span class="u-cur-badge">✔ 使用中</span>` : ''}
              </div>
              <div class="u-stats-row">
                <span>掌握度 <b>${st.pct}%</b> (${st.mastered}題)</span>
                <span>·</span>
                <span class="${st.errCount > 0 ? 'err-txt' : ''}">錯題 <b>${st.errCount}</b></span>
                <span>·</span>
                <span>練習 <b>${st.sessions}</b> 場</span>
              </div>
            </div>
          </div>
          <div class="u-card-actions">
            ${!isCurrent ? `<button type="button" class="btn btn-sm btn-primary" data-pick-user="${u.id}">切換</button>` : ''}
            ${u.isTest ? `
              <button type="button" class="btn btn-sm btn-ghost btn-reset-test" data-reset-user="${u.id}">🧹 清空</button>
            ` : `
              <span class="u-protect-tag">🔒 保護中</span>
            `}
          </div>
        </div>
      `;
    }).join('');

    modal.innerHTML = `
      <div class="user-modal-panel glass" role="dialog" aria-label="切換學習帳號與雲端設定">
        <div class="user-modal-head">
          <div>
            <h3>👥 切換使用人員（錯題本與進度獨立隔離）</h3>
            <p class="muted" style="font-size: 13px; margin: 4px 0 0;">點擊人員即可立即切換，測試帳號可隨時一鍵清空重置，絕不影響 Rex 的紀錄。</p>
          </div>
          <button type="button" class="btn-close-drawer" id="user-modal-close">✕</button>
        </div>

        <div class="user-cards-list">${userCardsHtml}</div>

        <div class="cloud-sync-box">
          <div class="cloud-sync-head">
            <span>☁️ 跨裝置雲端同步（Firebase Realtime DB）</span>
            <span class="cloud-badge ${state.cloudDbUrl ? 'on' : ''}">${state.cloudDbUrl ? '🟢 已掛載 /g6_chinese_users' : '⚪ 本機獨立儲存'}</span>
          </div>
          <div class="cloud-input-row">
            <input type="url" id="input-cloud-url" placeholder="貼上 https://你的專案.firebasedatabase.app" value="${state.cloudDbUrl || ''}">
            <button type="button" class="btn btn-primary btn-sm" id="btn-save-cloud">儲存並同步</button>
          </div>
          <div class="cloud-sync-hint">
            與數學網頁共用同一組 Firebase 資料庫，國語進度獨立儲存在 <code>/g6_chinese_users/${state.currentUser}.json</code>。
          </div>
        </div>
      </div>
    `;

    document.getElementById('user-modal-close').onclick = () => { modal.style.display = 'none'; };
    modal.querySelectorAll('[data-pick-user]').forEach(el => {
      el.onclick = () => {
        switchUser(el.getAttribute('data-pick-user'));
        modal.style.display = 'none';
      };
    });
    modal.querySelectorAll('[data-reset-user]').forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const uid = btn.getAttribute('data-reset-user');
        const uObj = USERS.find(x => x.id === uid);
        if (uObj && confirm(`確定要清空測試帳號【${uObj.name}】的所有錯題本與練習進度嗎？`)) {
          resetTestUser(uid);
          renderModalContent();
        }
      };
    });

    const saveCloudBtn = document.getElementById('btn-save-cloud');
    if (saveCloudBtn) {
      saveCloudBtn.onclick = async () => {
        const val = (document.getElementById('input-cloud-url')?.value || '').trim();
        state.cloudDbUrl = val;
        localStorage.setItem(CLOUD_SYNC_URL_KEY, val);
        if (val) {
          saveCloudBtn.disabled = true;
          saveCloudBtn.textContent = '同步中...';
          await syncFromCloud(state.currentUser, true);
        }
        renderModalContent();
      };
    }
  };

  modal.onclick = (e) => { if (e.target === modal) modal.style.display = 'none'; };
  renderModalContent();
  modal.style.display = 'flex';
}

// ============================================================================
// 3. 首頁 (Dashboard View) — 完全比照數學網頁精簡開頭與標準尺寸卡片
// ============================================================================
function filterQuestionsByBatches(list) {
  if (!state.selectedBatches || state.selectedBatches.length === 0) return list;
  return list.filter(q => state.selectedBatches.includes(q.batch));
}

function getUnitStats(unitId) {
  const bank = getCleanBank();
  let all = bank.filter(q => q.lessonId === unitId);
  if (unitId === 'EXAM_MID1' && state.examSchool !== 'ALL') {
    all = all.filter(q => q.school === state.examSchool);
  }
  const active = filterQuestionsByBatches(all);
  const pool = active.length > 0 ? active : all;
  const eb = getErrorBook();
  const ms = getMasteredIds();
  const errCount = pool.filter(q => eb.includes(q.id)).length;
  const mastered = pool.filter(q => ms.includes(q.id) && !eb.includes(q.id)).length;
  const pct = pool.length > 0 ? Math.round((mastered / pool.length) * 100) : 0;
  const hwCount = all.filter(q => q.type === 'handwriting').length;
  return { total: pool.length, errCount, mastered, pct, hwCount, rawTotal: all.length };
}

function getGlobalStats() {
  const bank = getCleanBank();
  const active = filterQuestionsByBatches(bank);
  const eb = getErrorBook();
  const ms = getMasteredIds();
  const mastered = active.filter(q => ms.includes(q.id) && !eb.includes(q.id)).length;
  const pct = active.length > 0 ? Math.round((mastered / active.length) * 100) : 0;
  return { total: active.length, mastered, pct, errors: eb.length };
}

function renderDashboardView() {
  state.view = 'dashboard';
  const g = getGlobalStats();
  const curUser = getCurrentUserObj();
  const examSchools = getExamSchoolsList();

  const iconMap = {
    '寫國字': '✍️ ',
    '寫注音': '🗣️ ',
    '原本題庫': '📖 ',
    '新題庫擴充': '🚀 ',
    '段考真題': '🏆 '
  };

  const chipsHtml = ALL_BATCH_TYPES.map(b => {
    const on = state.selectedBatches.includes(b);
    return `<button type="button" class="chip ${on ? 'on' : ''}" data-batch="${b}"><span class="dot"></span>${iconMap[b] || ''}${b}</button>`;
  }).join('');

  const unitCardsHtml = LESSONS.map(u => {
    const st = getUnitStats(u.id);
    const isLocked = st.total === 0;
    const isExamUnit = !!u.isExam;

    return `
      <article class="unit-card ${isExamUnit ? 'exam-card' : ''} ${isLocked ? 'locked' : ''}" style="--hue: ${u.hue || 250}">
        <span class="u-no">${isExamUnit ? '🏆 段考特訓' : `LESSON ${String(u.no).padStart(2, '0')}`} · ${u.pages || ''}</span>
        <h3>${isExamUnit ? u.title : u.title}</h3>
        <div class="progress" title="掌握度 ${st.pct}%"><i style="width: ${st.pct}%"></i></div>
        <div class="u-meta">
          <span class="tag ${st.pct === 100 ? 'ok' : ''}">掌握 ${st.pct}%</span>
          ${st.errCount > 0 ? `<span class="tag bad">🔥 ${st.errCount} 題待消滅</span>` : ''}
          ${isExamUnit ? `<span class="tag exam-badge">🏆 6校全真考卷</span>` : `<span class="tag lv">✍️ 手寫 ${st.hwCount} 題</span>`}
          <span class="tag">${st.total} 題</span>
        </div>

        ${isExamUnit ? `
          <div class="exam-card-quick-select" style="margin-top: 6px;">
            <select class="exam-school-select" data-exam-select="${u.id}" style="width: 100%; padding: 8px 10px; border-radius: 10px; border: 1.5px solid #fcd34d; font-size: 13px; font-weight: 700; color: #78350f; background: #fffdf5; outline: none; cursor: pointer;">
              ${examSchools.map(sch => `<option value="${sch.id}" ${state.examSchool === sch.id ? 'selected' : ''}>${sch.shortName} (${sch.count}題)</option>`).join('')}
            </select>
          </div>
        ` : ''}

        ${st.errCount > 0 ? `
          <div class="u-actions has-errors" style="margin-top: ${isExamUnit ? '10px' : 'auto'};">
            <div class="u-actions-top-row">
              <button class="btn btn-primary" data-start-unit="${u.id}" ${isLocked ? 'disabled' : ''}>
                ${isExamUnit ? '🏆 開始段考' : '開始特訓'}
              </button>
              <button class="btn btn-kill-err" data-kill-unit-errors="${u.id}">
                🔥 消滅錯題 (${st.errCount})
              </button>
            </div>
            <button class="btn btn-ghost btn-block" data-print-unit="${u.id}" ${isLocked ? 'disabled' : ''}>
              🖨️ A4 出卷
            </button>
          </div>
        ` : `
          <div class="u-actions" style="margin-top: ${isExamUnit ? '10px' : 'auto'};">
            <button class="btn btn-primary" data-start-unit="${u.id}" ${isLocked ? 'disabled' : ''}>
              ${isExamUnit ? '🏆 開始段考' : '開始特訓'}
            </button>
            <button class="btn btn-ghost" data-print-unit="${u.id}" ${isLocked ? 'disabled' : ''}>
              🖨️ A4 出卷
            </button>
          </div>
        `}
      </article>
    `;
  }).join('');

  const userSwitcherHtml = `
    <section class="user-switcher-bar glass" style="--active-user-color: ${curUser.color}; --active-user-bg: ${curUser.bg};">
      <div class="user-bar-left">
        <span class="user-bar-label">👤 目前使用人員：</span>
        <div class="user-pills-row">
          ${USERS.map(u => {
            const active = u.id === state.currentUser;
            const st = loadUserStatsSummary(u.id);
            return `
              <button type="button" class="user-pill-btn ${active ? 'active' : ''}" data-quick-user="${u.id}" style="--u-color: ${u.color}; --u-bg: ${u.bg};">
                <span>${u.icon} ${u.name}</span>
                ${st.errCount > 0 ? `<b class="u-err-dot" title="${st.errCount} 題待消滅">${st.errCount}</b>` : ''}
              </button>
            `;
          }).join('')}
        </div>
      </div>
      <div class="user-bar-right">
        ${curUser.isTest ? `
          <span class="test-mode-tag">🧪 測試隔離模式（不影響 Rex 紀錄）</span>
          <button type="button" class="btn btn-sm btn-ghost btn-clear-cur-test" id="btn-dash-reset-test">🧹 清空 ${curUser.name} 紀錄</button>
        ` : `
          <span class="rex-mode-tag">🦖 Rex 正式學習模式（進度保護中）</span>
        `}
        <button type="button" class="btn btn-sm btn-ghost" id="btn-open-user-modal">⚙️ 帳號與雲端</button>
      </div>
    </section>
  `;

  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="view dashboard">
      ${userSwitcherHtml}
      <section class="glass hero">
        <div>
          <h2>${curUser.icon} ${curUser.name} 的六上國語特訓 <span class="grad">段考滿分天梯</span></h2>
          <div class="filters" style="margin-top: 14px;">
            <span class="label">題庫範圍：</span>
            ${chipsHtml}
          </div>
        </div>
        <div class="stats">
          <div class="stat pri"><b>${g.pct}%</b><span>全冊掌握度</span></div>
          <div class="stat bad"><b>${g.errors}</b><span>待消滅錯題</span></div>
          <div class="stat ok"><b>${g.total}</b><span>上線題數</span></div>
        </div>
      </section>

      ${g.errors > 0 ? `
        <aside class="banner-error">
          <div>
            <h3>🔥 跨課錯題消滅戰</h3>
            <p>目前累積 ${g.errors} 個弱點題，答對即可徹底移出錯題本！</p>
          </div>
          <button class="btn btn-lg" id="btn-kill-errors">立即消滅錯題</button>
        </aside>
      ` : ''}

      <div class="section-title">
        <h2>📚 課次進度地圖</h2>
        <span class="muted">康軒版六上 · 全 6 課 + 六校段考全真題庫</span>
      </div>
      <section class="unit-grid">
        ${unitCardsHtml}
      </section>
    </div>
  `;

  // 綁定批次晶片篩選
  app.querySelectorAll('.chip[data-batch]').forEach(btn => {
    btn.addEventListener('click', () => {
      const b = btn.getAttribute('data-batch');
      if (state.selectedBatches.includes(b)) {
        if (state.selectedBatches.length > 1) {
          state.selectedBatches = state.selectedBatches.filter(x => x !== b);
        } else {
          showToast('至少保留一個題庫範圍喔！');
          return;
        }
      } else {
        state.selectedBatches.push(b);
      }
      renderDashboardView();
    });
  });

  // 綁定人員快速切換
  app.querySelectorAll('[data-quick-user]').forEach(btn => {
    btn.addEventListener('click', () => switchUser(btn.getAttribute('data-quick-user')));
  });
  const resetTestBtn = document.getElementById('btn-dash-reset-test');
  if (resetTestBtn) {
    resetTestBtn.addEventListener('click', () => {
      if (confirm(`確定要清空測試帳號【${curUser.name}】的所有紀錄嗎？`)) {
        resetTestUser(curUser.id);
      }
    });
  }
  const openModalBtn = document.getElementById('btn-open-user-modal');
  if (openModalBtn) openModalBtn.addEventListener('click', openUserModal);

  // 綁定段考學校下拉選單
  app.querySelectorAll('[data-exam-select]').forEach(sel => {
    sel.addEventListener('change', () => {
      state.examSchool = sel.value;
      renderDashboardView();
    });
  });

  // 綁定卡片開始測驗、錯題與列印按鈕
  app.querySelectorAll('[data-start-unit]').forEach(btn => {
    btn.addEventListener('click', () => {
      const uId = btn.getAttribute('data-start-unit');
      startQuiz('unit', uId, state.examSchool);
    });
  });
  app.querySelectorAll('[data-kill-unit-errors]').forEach(btn => {
    btn.addEventListener('click', () => {
      const uId = btn.getAttribute('data-kill-unit-errors');
      startQuiz('unit_errors', uId);
    });
  });
  app.querySelectorAll('[data-print-unit]').forEach(btn => {
    btn.addEventListener('click', () => {
      const uId = btn.getAttribute('data-print-unit');
      state.printConfig.unitIds = [uId];
      renderPrintSetupView();
    });
  });

  const killAllBtn = document.getElementById('btn-kill-errors');
  if (killAllBtn) {
    killAllBtn.addEventListener('click', () => startQuiz('error_book'));
  }
}

// ============================================================================
// 4. 作答頁 (Quiz View) — 支援三態回饋、逐字點擊批改、快速跳題、考卷原圖切換
// ============================================================================
function startQuiz(mode, unitId = null, schoolFilter = state.examSchool) {
  const bank = getCleanBank();
  const eb = getErrorBook();
  let pool = [];

  if (mode === 'error_book') {
    pool = bank.filter(q => eb.includes(q.id));
    state.quizTitle = '🔥 跨課錯題消滅戰';
  } else if (mode === 'unit_errors') {
    pool = bank.filter(q => q.lessonId === unitId && eb.includes(q.id));
    const u = LESSONS.find(x => x.id === unitId);
    state.quizTitle = `🔥 ${u ? u.title : unitId} · 錯題消滅`;
  } else {
    state.examSchool = schoolFilter || 'ALL';
    let allUnit = bank.filter(q => q.lessonId === unitId);
    if (unitId === 'EXAM_MID1' && state.examSchool !== 'ALL') {
      allUnit = allUnit.filter(q => q.school === state.examSchool);
    }
    pool = filterQuestionsByBatches(allUnit);
    if (pool.length === 0) pool = allUnit;
    const u = LESSONS.find(x => x.id === unitId);
    state.quizTitle = u ? u.title : '國語特訓';
  }

  if (pool.length === 0) {
    showToast('目前篩選範圍內沒有題目喔！');
    return;
  }

  state.quizMode = mode;
  state.currentUnitId = unitId;
  state.quizQuestions = pool;
  state.quizIndex = 0;
  state.answers = {};
  state.optionOrders = {};
  state.imgModeQuestions = {};
  state.sessionHistory = [];

  // 檢查斷點續考紀錄
  const progMap = getUnitProgressMap();
  const saved = (mode === 'unit' && unitId) ? progMap[unitId] : null;
  state.resumeTargetIdx = (saved && saved.index > 0 && saved.index < pool.length) ? saved.index : null;

  pool.forEach(q => {
    if (q.type === 'mcq' && Array.isArray(q.options)) {
      state.optionOrders[q.id] = q.lessonId === 'EXAM_MID1'
        ? [...q.options]
        : [...q.options].sort(() => Math.random() - 0.5);
    }
  });

  state.view = 'quiz';
  renderQuizQuestion();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function recordQuizAnswer(q, resultState, userText = '', chosenOpt = null, durationSec = 1) {
  let eb = getErrorBook();
  let ec = getErrorCounts();
  let cc = getCorrectCounts();
  let ms = getMasteredIds();
  let sl = getSlowIds();

  if (resultState === 'ok') {
    cc[q.id] = (cc[q.id] || 0) + 1;
    if (!ms.includes(q.id)) ms.push(q.id);
    sl = sl.filter(id => id !== q.id);
    eb = eb.filter(id => id !== q.id);
  } else if (resultState === 'slow') {
    cc[q.id] = (cc[q.id] || 0) + 1;
    if (!sl.includes(q.id)) sl.push(q.id);
    ms = ms.filter(id => id !== q.id);
    if (!eb.includes(q.id)) eb.push(q.id);
  } else if (resultState === 'bad') {
    ec[q.id] = (ec[q.id] || 0) + 1;
    if (!eb.includes(q.id)) eb.push(q.id);
    ms = ms.filter(id => id !== q.id);
  }

  saveErrorBook(eb);
  saveErrorCounts(ec);
  saveCorrectCounts(cc);
  saveMasteredIds(ms);
  saveSlowIds(sl);
  scheduleCloudPush();

  // 做法 B：自給自足日誌背景傳輸 (只寫不讀)
  pushSlimLogToCloud(q, resultState, chosenOpt, userText, durationSec);

  const correctAns = q.type === 'handwriting'
    ? q.correctAnswer
    : (q.options.find(o => o.isCorrect)?.text || '');

  const rec = {
    qId: q.id,
    unitId: q.lessonId,
    category: q.category || q.batch,
    result: resultState,
    userText: userText || (resultState === 'ok' ? '👍 全對秒殺' : resultState === 'slow' ? '⏳ 寫對但想很久' : '❌ 我有寫錯'),
    correctAns,
    time: new Date().toISOString()
  };

  const existIdx = state.sessionHistory.findIndex(x => x.qId === q.id);
  if (existIdx >= 0) state.sessionHistory[existIdx] = rec;
  else state.sessionHistory.push(rec);
}

function renderQuizQuestion() {
  const total = state.quizQuestions.length;
  const idx = state.quizIndex;
  const q = state.quizQuestions[idx];
  if (!q) return;

  if (state.quizMode === 'unit' && state.currentUnitId) {
    saveUnitProgress(state.currentUnitId, idx);
  }

  // 記錄本題開始思考時間戳
  if (!state.questionStartTimes) state.questionStartTimes = {};
  if (!state.questionStartTimes[q.id]) {
    state.questionStartTimes[q.id] = Date.now();
  }

  const cur = idx + 1;
  const pct = Math.round((cur / total) * 100);
  const ans = state.answers[q.id] || {};
  const isAnswered = !!ans.result;
  const inImgMode = !!state.imgModeQuestions[q.id];

  // Scheme C 學校切換 Tabs (當在 EXAM_MID1 時)
  let schoolTabsHtml = '';
  if (state.currentUnitId === 'EXAM_MID1') {
    const schools = getExamSchoolsList();
    schoolTabsHtml = `
      <div class="exam-school-tabs-wrap">
        <div class="exam-tabs-header">
          <span class="exam-tabs-title">🏫 切換段考學校試卷：</span>
        </div>
        <div class="exam-school-tabs">
          ${schools.map(s => `
            <button type="button" class="school-tab-btn ${state.examSchool === s.id ? 'active' : ''}" data-school-tab="${s.id}">
              <span>${s.shortName}</span>
              <span class="badge-cnt">${s.count}</span>
            </button>
          `).join('')}
        </div>
      </div>
    `;
  }

  // 斷點續考提示條
  const resumeBarHtml = (state.resumeTargetIdx && idx === 0) ? `
    <div class="resume-hint-bar">
      <span>📌 上次練習記錄進行到 <b>第 ${state.resumeTargetIdx + 1} 題</b></span>
      <button type="button" class="btn-jump-resume" id="btn-resume-jump" data-resume-idx="${state.resumeTargetIdx}">
        👉 直接跳轉至第 ${state.resumeTargetIdx + 1} 題
      </button>
    </div>
  ` : '';

  // 題號速跳抽屜盤（3 數字 ＋ 淨錯誤深淺色階，固定尺寸不變大）
  const ecMap = getErrorCounts();
  const ccMap = getCorrectCounts();

  const drawerBtnsHtml = state.quizQuestions.map((item, i) => {
    const a = state.answers[item.id];
    const curCls = i === idx ? 'current' : '';

    const errCnt = ecMap[item.id] || 0;
    const okCnt = ccMap[item.id] || 0;
    const netErr = errCnt - okCnt;

    // 計算熱力深淺色階（錯越多越紅）
    let heatCls = 'heat-none';
    if (errCnt > 0 || okCnt > 0) {
      if (netErr >= 3) heatCls = 'heat-bad-heavy';
      else if (netErr >= 2) heatCls = 'heat-bad-mid';
      else if (netErr >= 1) heatCls = 'heat-bad-light';
      else if (netErr === 0) heatCls = 'heat-tie';
      else if (netErr <= -3) heatCls = 'heat-ok-heavy';
      else if (netErr <= -1) heatCls = 'heat-ok-light';
    }

    return `
      <button type="button" class="drawer-q-btn ${heatCls} ${curCls}" data-jump-idx="${i}" title="第 ${i + 1} 題：答對 ${okCnt} 次 · 答錯 ${errCnt} 次 (淨錯 ${netErr})">
        ${okCnt > 0 ? `<span class="q-badge-ok">${okCnt}</span>` : ''}
        ${errCnt > 0 ? `<span class="q-badge-bad">${errCnt}</span>` : ''}
        <span class="q-num-center">${i + 1}</span>
      </button>
    `;
  }).join('');

  // 題目主體 (區分 Handwriting 與 MCQ)
  let questionContentHtml = '';
  if (q.type === 'handwriting') {
    let blankCounter = 0;
    const isRevealed = !!ans.revealed;
    const wrongBlanks = ans.wrongBlanks || [];

    const stemHtml = q.question.replace(/\[\[(國字|注音):(.*?):(.*?)\]\]/g, (_, mode, prompt, answer) => {
      const bIdx = blankCounter++;
      const isWrong = wrongBlanks.includes(bIdx);
      const statusIcon = isRevealed
        ? (isWrong ? '<span class="hw-blank-status" style="color:#e11d48;">❌</span>' : '<span class="hw-blank-status" style="color:#059669;">✅</span>')
        : '';
      return `
        <span class="hw-inline-blank ${isRevealed ? 'revealed' : ''} ${isWrong ? 'wrong-blank' : ''}"
              data-hw-blank="${bIdx}"
              title="${isRevealed ? '點擊可單獨標記此字寫錯或寫對' : '點擊揭曉答案'}">
          <span class="hw-tag">寫${mode}</span>
          <span class="hw-prompt">${prompt}</span>
          <span class="hw-ans font-kai">${isRevealed ? answer : '？'}</span>
          ${statusIcon}
        </span>
      `;
    });

    questionContentHtml = `
      <div class="paper-hint">
        <span>✍️</span>
        <span>請先在紙上寫出國字或注音，再點擊下方「對答案」（揭曉後點擊單一字框可標記錯字）。</span>
      </div>

      <div class="hw-stem-box font-kai">
        ${stemHtml}
      </div>

      ${!isRevealed ? `
        <div class="reveal">
          <button type="button" class="btn btn-primary btn-lg btn-block" id="btn-show-answer">
            👀 我寫好了，對答案！
          </button>
        </div>
      ` : ''}

      <div class="answer" id="answer-area" style="display: ${isRevealed ? 'grid' : 'none'};">
        <div class="box final">
          <h4>🎯 標準正解（點擊上方字框可切換 ✅/❌）</h4>
          <div class="ans font-kai">${q.correctAnswer}</div>
        </div>

        ${q.explanation ? `
          <div class="box insight">
            <h4>💡 字詞解析與記憶重點</h4>
            <div>${q.explanation}</div>
          </div>
        ` : ''}

        ${q.trap ? `
          <div class="box trap">
            <h4>⚠️ 常犯錯誤防坑診斷</h4>
            <div>${q.trap}</div>
          </div>
        ` : ''}

        <div class="feedback">
          <p>這題你的作答狀況如何？（點擊後自動記錄）</p>
          <div class="fb-row">
            <button type="button" class="fb ok ${ans.result === 'ok' ? 'picked' : isAnswered ? 'dim' : ''}" data-fb="ok">
              <span class="emo">👍</span>
              <span>全對且熟練</span>
              <small>秒殺移出錯題</small>
            </button>
            <button type="button" class="fb slow ${ans.result === 'slow' ? 'picked' : isAnswered ? 'dim' : ''}" data-fb="slow">
              <span class="emo">⏳</span>
              <span>寫對但想很久</span>
              <small>標記待複習</small>
            </button>
            <button type="button" class="fb bad ${ans.result === 'bad' ? 'picked' : isAnswered ? 'dim' : ''}" data-fb="bad">
              <span class="emo">❌</span>
              <span>我有寫錯字</span>
              <small>加入錯題本</small>
            </button>
          </div>
        </div>
      </div>
    `;
  } else {
    // 選擇題 (MCQ)
    const options = state.optionOrders[q.id] || q.options || [];
    const letters = ['A', 'B', 'C', 'D'];
    const correctOpt = options.find(o => o.isCorrect);

    const optsGridHtml = options.map((opt, oIdx) => {
      let stateCls = '';
      if (isAnswered) {
        if (opt.isCorrect) stateCls = 'opt-correct';
        else if (ans.selectedOptionText === opt.text && !opt.isCorrect) stateCls = 'opt-wrong';
        else stateCls = 'opt-dim';
      }
      const badge = opt.label || letters[oIdx] || (oIdx + 1);
      return `
        <button type="button" class="opt-btn ${stateCls}" data-opt-idx="${oIdx}" ${isAnswered ? 'disabled' : ''}>
          <span class="opt-letter">${badge}</span>
          <span class="opt-text">${opt.text}</span>
        </button>
      `;
    }).join('');

    const expSteps = options.map((opt, oIdx) => {
      if (!opt.explanation) return '';
      const mark = opt.isCorrect ? '✅' : '❌';
      const badge = opt.label || letters[oIdx] || (oIdx + 1);
      return `<li><b>(${badge}) ${opt.text}</b>：${mark} ${opt.explanation}</li>`;
    }).filter(Boolean).join('');

    questionContentHtml = `
      <div class="q-text">${String(q.question || '').replace(/\n/g, '<br>')}</div>

      <div class="options-grid ${options.length > 4 ? 'multi-opts' : ''}">
        ${optsGridHtml}
      </div>

      <div id="mental-feedback-alert" class="mental-feedback-alert ${ans.result === 'ok' ? 'ok' : 'bad'}" style="display: ${isAnswered ? 'block' : 'none'};">
        ${ans.result === 'ok'
          ? '🎯 <b>判斷精準！觀念非常清楚！</b>'
          : ans.result === 'slow'
          ? '⏳ <b>已標記為「想很久不熟」，考前會再幫你複習！</b>'
          : '💡 <b>掉進命題陷阱囉！快看下方的詳解分析：</b>'}
      </div>

      <div class="answer" id="answer-area" style="display: ${isAnswered ? 'grid' : 'none'};">
        <div class="box final" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;">
          <div>
            <h4>🎯 標準正解</h4>
            <div class="ans">${correctOpt ? correctOpt.text : ''}</div>
          </div>
          ${ans.result === 'ok' ? `
            <button type="button" class="btn btn-ghost btn-sm" id="btn-mark-slow">
              ⏳ 雖然選對但想很久（點此標記）
            </button>
          ` : ''}
        </div>

        ${expSteps ? `
          <div class="box steps">
            <h4>📖 選項逐一解析</h4>
            <ol>${expSteps}</ol>
          </div>
        ` : ''}

        ${q.trap ? `
          <div class="box trap">
            <h4>⚠️ 典型錯誤防坑診斷</h4>
            <div>${q.trap}</div>
          </div>
        ` : ''}
      </div>
    `;
  }

  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="view quiz">
      ${schoolTabsHtml}
      ${resumeBarHtml}

      <div class="quiz-head">
        <div class="quiz-nav-left">
          <button type="button" class="btn btn-ghost btn-sm" id="btn-quit-quiz">← 返回</button>
          <span class="crumb">${state.quizTitle}</span>
        </div>
        <div class="progress"><i style="width: ${pct}%"></i></div>
        <div style="display:flex;align-items:center;gap:8px;">
          <button type="button" class="btn btn-ghost btn-sm" id="btn-prev-q-top" ${idx === 0 ? 'disabled' : ''}>← 上一題</button>
          <button type="button" class="count-badge-btn" id="btn-toggle-drawer" title="展開題號速跳盤">
            🔢 第 ${cur} / ${total} 題 ▾
          </button>
          <button type="button" class="btn btn-ghost btn-sm" id="btn-next-q-top">
            ${cur === total ? '結算 🏁' : '下一題 →'}
          </button>
        </div>
      </div>

      <div id="quiz-grid-drawer" class="quiz-grid-drawer" style="display: none;">
        <div class="grid-drawer-head">
          <div class="drawer-legend-bar">
            <span class="leg-item"><b class="leg-dot ok"></b> 綠小字=答對次數</span>
            <span class="leg-item"><b class="leg-dot bad"></b> 紅小字=答錯次數</span>
            <span class="leg-item"><b class="leg-dot red-shade"></b> 底色越紅代表錯越多</span>
          </div>
          <button type="button" class="btn-close-drawer" id="btn-close-drawer">✕</button>
        </div>
        <div class="drawer-q-grid">${drawerBtnsHtml}</div>
      </div>

      <article class="glass q-card">
        <div class="q-top-action-bar">
          <div class="q-tags" style="margin-bottom:0;">
            <span class="tag">${LESSONS.find(x => x.id === q.lessonId)?.title || q.lessonId}</span>
            ${q.school ? `<span class="tag exam-badge">🏫 ${q.school}</span>` : ''}
            <span class="tag lv">${q.category || q.batch}</span>
            <span class="stars">${'★'.repeat(q.difficulty || 2)}</span>
          </div>
          ${q.examPageImage ? `
            <button type="button" class="btn-crop-toggle ${inImgMode ? 'active' : ''}" id="btn-crop-toggle">
              ${inImgMode ? '📝 返回文字題目' : '📷 查看考卷原圖'}
            </button>
          ` : ''}
        </div>

        ${q.examPageImage ? `
          <div id="crop-image-container" class="crop-image-container" style="display: ${inImgMode ? 'block' : 'none'};">
            <div class="crop-img-wrap" id="crop-img-wrap">
              <img src="${q.examPageImage}" alt="考卷原圖" class="exam-crop-img">
              <span class="crop-zoom-hint">🔍 點擊全螢幕放大</span>
            </div>
          </div>
        ` : ''}

        <div id="q-content" style="display: ${inImgMode ? 'none' : 'block'}; margin-top: 14px;">
          ${questionContentHtml}
        </div>

        <div class="quiz-bottom-nav" style="display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap;">
          <div style="display:flex;gap:8px;">
            <button type="button" class="btn btn-ghost" id="btn-prev-q" ${idx === 0 ? 'disabled' : ''}>← 上一題</button>
            <button type="button" class="btn btn-ghost" id="btn-bottom-drawer">🔢 題號盤</button>
          </div>
          <button type="button" class="btn ${isAnswered ? 'btn-primary btn-lg' : 'btn-ghost'}" id="btn-next-q">
            ${cur === total ? '完成測驗並結算 🏁' : isAnswered ? '進入下一題 →' : '跳過，看下一題 →'}
          </button>
        </div>
      </article>
    </div>
  `;

  // 綁定返回與上下題導航
  document.getElementById('btn-quit-quiz').onclick = () => renderDashboardView();
  const handlePrev = () => {
    if (state.quizIndex > 0) {
      state.quizIndex--;
      renderQuizQuestion();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  const handleNext = () => {
    if (state.quizIndex < state.quizQuestions.length - 1) {
      state.quizIndex++;
      renderQuizQuestion();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      finishQuiz();
    }
  };
  document.getElementById('btn-prev-q-top').onclick = handlePrev;
  document.getElementById('btn-prev-q').onclick = handlePrev;
  document.getElementById('btn-next-q-top').onclick = handleNext;
  document.getElementById('btn-next-q').onclick = handleNext;

  // 綁定題號抽屜
  const toggleDrawer = () => {
    const d = document.getElementById('quiz-grid-drawer');
    if (d) d.style.display = d.style.display === 'none' ? 'block' : 'none';
  };
  document.getElementById('btn-toggle-drawer').onclick = toggleDrawer;
  document.getElementById('btn-bottom-drawer').onclick = toggleDrawer;
  document.getElementById('btn-close-drawer').onclick = toggleDrawer;

  app.querySelectorAll('[data-jump-idx]').forEach(btn => {
    btn.onclick = () => {
      state.quizIndex = parseInt(btn.getAttribute('data-jump-idx'), 10);
      renderQuizQuestion();
    };
  });

  // 綁定續考跳轉
  const resumeBtn = document.getElementById('btn-resume-jump');
  if (resumeBtn) {
    resumeBtn.onclick = () => {
      const target = parseInt(resumeBtn.getAttribute('data-resume-idx'), 10);
      state.resumeTargetIdx = null;
      state.quizIndex = target;
      renderQuizQuestion();
    };
  }

  // 綁定段考學校分頁切換
  app.querySelectorAll('[data-school-tab]').forEach(btn => {
    btn.onclick = () => {
      const targetSch = btn.getAttribute('data-school-tab');
      if (state.examSchool === targetSch) return;
      startQuiz('unit', 'EXAM_MID1', targetSch);
    };
  });

  // 綁定原圖切換與放大
  const cropToggle = document.getElementById('btn-crop-toggle');
  if (cropToggle) {
    cropToggle.onclick = () => {
      state.imgModeQuestions[q.id] = !state.imgModeQuestions[q.id];
      renderQuizQuestion();
    };
  }
  const cropWrap = document.getElementById('crop-img-wrap');
  if (cropWrap) {
    cropWrap.onclick = () => openLightbox(q.examPageImage, `${q.school || '段考'} - 原始考卷檢視`);
  }

  // 綁定手寫題互動
  if (q.type === 'handwriting') {
    const showBtn = document.getElementById('btn-show-answer');
    if (showBtn) {
      showBtn.onclick = () => {
        state.answers[q.id] = { ...(state.answers[q.id] || {}), revealed: true, wrongBlanks: [] };
        renderQuizQuestion();
      };
    }

    app.querySelectorAll('[data-hw-blank]').forEach(el => {
      el.onclick = () => {
        const bIdx = parseInt(el.getAttribute('data-hw-blank'), 10);
        const curAns = state.answers[q.id] || { revealed: false, wrongBlanks: [] };
        if (!curAns.revealed) {
          curAns.revealed = true;
          state.answers[q.id] = curAns;
          renderQuizQuestion();
          return;
        }
        const arr = curAns.wrongBlanks || [];
        const p = arr.indexOf(bIdx);
        if (p >= 0) arr.splice(p, 1);
        else arr.push(bIdx);
        curAns.wrongBlanks = arr;
        state.answers[q.id] = curAns;
        renderQuizQuestion();
      };
    });

    app.querySelectorAll('[data-fb]').forEach(btn => {
      btn.onclick = () => {
        const val = btn.getAttribute('data-fb'); // 'ok' | 'slow' | 'bad'
        const curAns = state.answers[q.id] || { revealed: true, wrongBlanks: [] };
        curAns.revealed = true;
        curAns.result = val;
        state.answers[q.id] = curAns;

        const blanks = parseHandwritingBlanks(q.question);
        let desc = val === 'ok' ? '👍 全寫對秒殺' : val === 'slow' ? '⏳ 寫對但想很久' : '❌ 我有寫錯字';
        if (val === 'bad' && curAns.wrongBlanks && curAns.wrongBlanks.length > 0) {
          const missed = curAns.wrongBlanks.map(i => blanks[i] ? `${blanks[i].prompt}➔${blanks[i].answer}` : '').filter(Boolean);
          desc = `❌ 寫錯：${missed.join('、')}`;
        }
        const startTime = (state.questionStartTimes && state.questionStartTimes[q.id]) || Date.now();
        const durationSec = Math.max(1, Math.round((Date.now() - startTime) / 1000));
        recordQuizAnswer(q, val, desc, null, durationSec);
        renderQuizQuestion();
      };
    });
  } else {
    // 綁定選擇題互動
    const options = state.optionOrders[q.id] || q.options || [];
    app.querySelectorAll('.opt-btn').forEach(btn => {
      btn.onclick = () => {
        const oIdx = parseInt(btn.getAttribute('data-opt-idx'), 10);
        const chosen = options[oIdx];
        if (!chosen) return;
        const resState = chosen.isCorrect ? 'ok' : 'bad';
        state.answers[q.id] = {
          result: resState,
          selectedOptionText: chosen.text,
          chosenOpt: chosen,
          revealed: true
        };
        const startTime = (state.questionStartTimes && state.questionStartTimes[q.id]) || Date.now();
        const durationSec = Math.max(1, Math.round((Date.now() - startTime) / 1000));
        recordQuizAnswer(q, resState, chosen.text, chosen, durationSec);
        renderQuizQuestion();
      };
    });

    const slowBtn = document.getElementById('btn-mark-slow');
    if (slowBtn) {
      slowBtn.onclick = () => {
        if (!state.answers[q.id]) return;
        state.answers[q.id].result = 'slow';
        const chosen = state.answers[q.id].chosenOpt || null;
        const startTime = (state.questionStartTimes && state.questionStartTimes[q.id]) || Date.now();
        const durationSec = Math.max(1, Math.round((Date.now() - startTime) / 1000));
        recordQuizAnswer(q, 'slow', state.answers[q.id].selectedOptionText + ' (想很久)', chosen, durationSec);
        renderQuizQuestion();
      };
    }
  }
}

// ============================================================================
// 5. 場次結算 (Result View) — 百分制計分 + 答題明細回顧 + 單次報告下載
// ============================================================================
function finishQuiz() {
  const testTotal = state.quizQuestions.length;
  const answeredList = Object.values(state.answers).filter(a => a && a.result);
  const answeredTotal = answeredList.length;

  if (answeredTotal === 0) {
    showToast('本場次尚未作答任何題目，已返回首頁');
    renderDashboardView();
    return;
  }

  const okCnt = answeredList.filter(a => a.result === 'ok').length;
  const slowCnt = answeredList.filter(a => a.result === 'slow').length;
  const badCnt = answeredList.filter(a => a.result === 'bad').length;
  const skippedCnt = Math.max(0, testTotal - answeredTotal);
  const score = Math.round(((okCnt + slowCnt) / testTotal) * 100);

  const sessionSnapshot = {
    date: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }),
    title: state.quizTitle,
    mode: state.quizMode,
    unitId: state.currentUnitId,
    total: testTotal,
    answeredTotal,
    skippedCnt,
    okCnt,
    slowCnt,
    badCnt,
    score,
    questions: [...state.quizQuestions],
    answersMap: JSON.parse(JSON.stringify(state.answers))
  };
  state.lastFinishedSession = sessionSnapshot;

  const fh = getFullHistory();
  fh.unshift({
    date: sessionSnapshot.date,
    title: sessionSnapshot.title,
    score,
    total: testTotal,
    okCnt,
    slowCnt,
    badCnt,
    details: [...state.sessionHistory]
  });
  saveFullHistory(fh.slice(0, 50));
  scheduleCloudPush();

  const reviewItemsHtml = state.quizQuestions.map((q, idx) => {
    const a = state.answers[q.id];
    const u = LESSONS.find(x => x.id === q.lessonId) || { title: q.lessonId };
    const isAnswered = !!(a && a.result);
    const isOk = a && a.result === 'ok';
    const isSlow = a && a.result === 'slow';
    const correctAns = q.type === 'handwriting'
      ? q.correctAnswer
      : (q.options.find(o => o.isCorrect)?.text || '');
    const expText = q.type === 'handwriting'
      ? (q.explanation || '')
      : (q.options.find(o => o.isCorrect)?.explanation || '');

    const statusTag = !isAnswered
      ? '<span class="tag" style="background:#f1f5f9; color:#64748b; font-weight:700;">⚪ 未作答 (已跳過)</span>'
      : isOk
      ? '<span class="tag ok">✅ 答對秒殺</span>'
      : isSlow
      ? '<span class="tag" style="background:#eef2ff; color:#3730a3; font-weight:700;">⏳ 寫對想很久</span>'
      : '<span class="tag bad">❌ 答錯入庫</span>';

    let userChoiceLabel = '⚪ 本題跳過未作答';
    if (isAnswered) {
      if (q.type === 'handwriting') {
        userChoiceLabel = isOk ? '👍 全寫對且熟練' : isSlow ? '⏳ 寫對但想很久' : '❌ 我有寫錯字';
      } else {
        userChoiceLabel = a.selectedOptionText || '';
      }
    }

    return `
      <div class="review-item ${!isAnswered ? 'skipped' : a.result}">
        <div class="review-item-head">
          <div class="review-item-meta">
            <span class="review-q-num">第 ${idx + 1} 題</span>
            <span class="tag">${u.title}</span>
            <span class="tag lv">${q.category || q.batch}</span>
            ${statusTag}
          </div>
          <button type="button" class="btn btn-ghost btn-sm btn-toggle-detail" data-target="detail-${idx}">
            📖 看詳解 ▾
          </button>
        </div>

        <div class="review-q-text">${formatPlainStem(q.question).replace(/\n/g, '<br>')}</div>

        <div class="review-choice-grid">
          <div class="review-choice-pill ${!isAnswered ? 'skipped' : isOk ? 'correct' : isSlow ? 'slow' : 'wrong'}">
            <span class="label">你的作答：</span>
            <b>${userChoiceLabel}</b>
          </div>
          <div class="review-choice-pill correct">
            <span class="label">標準正解：</span>
            <b class="font-kai">${correctAns}</b>
          </div>
        </div>

        <div class="review-sol-panel" id="detail-${idx}" style="display: ${a && a.result === 'bad' ? 'grid' : 'none'};">
          ${expText ? `
            <div class="box insight">
              <h4>💡 解析說明</h4>
              <div>${expText}</div>
            </div>
          ` : ''}
          ${q.trap ? `
            <div class="box trap">
              <h4>⚠️ 常犯錯誤診斷</h4>
              <div>${q.trap}</div>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }).join('');

  const ebCount = getErrorBook().length;
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="view result">
      <div class="glass result-card wide" style="padding: 40px; margin: 0 auto;">
        <div style="font-size: 64px; line-height: 1">
          ${score >= 85 ? '🎉' : score >= 60 ? '💪' : '🌱'}
        </div>
        <div class="big" style="color: ${score >= 85 ? 'var(--ok)' : score >= 60 ? 'var(--slow)' : 'var(--bad)'}; margin: 12px 0;">
          ${score} 分
        </div>
        <p class="muted">
          ${state.quizTitle} · 已作答 ${answeredTotal} 題 ${skippedCnt > 0 ? `（另有 ${skippedCnt} 題跳過未作答）` : ''} · 總題數 ${testTotal} 題
        </p>

        <div class="result-bars">
          <div class="stat ok"><b>${okCnt}</b><span>秒殺熟練</span></div>
          <div class="stat pri"><b>${slowCnt}</b><span>想很久</span></div>
          <div class="stat bad"><b>${badCnt}</b><span>答錯進錯題</span></div>
        </div>

        <div class="result-actions">
          <button class="btn btn-primary btn-lg" id="btn-restart-unit">再練一次</button>
          ${ebCount > 0 ? `<button class="btn btn-ghost btn-lg" id="btn-goto-errors">查看錯題本 (${ebCount})</button>` : ''}
          <button class="btn btn-ghost btn-lg" id="btn-dl-session-md">📥 下載本次報告 (.md)</button>
          <button class="btn btn-ghost btn-lg" id="btn-res-home">返回首頁</button>
        </div>

        <div class="review-section">
          <div class="review-header-bar">
            <h3>📋 本次測驗答題明細回顧 (${testTotal} 題)</h3>
            <span style="font-size: 13px; color: var(--ink-2);">答錯題目已預設展開詳解</span>
          </div>
          <div class="review-list">${reviewItemsHtml}</div>
        </div>
      </div>
    </div>
  `;

  document.getElementById('btn-restart-unit').onclick = () => startQuiz(state.quizMode, state.currentUnitId, state.examSchool);
  const errBtn = document.getElementById('btn-goto-errors');
  if (errBtn) errBtn.onclick = () => renderErrorBookView();
  document.getElementById('btn-dl-session-md').onclick = () => downloadMarkdownReport(true);
  document.getElementById('btn-res-home').onclick = () => renderDashboardView();

  app.querySelectorAll('.btn-toggle-detail').forEach(btn => {
    btn.onclick = () => {
      const panel = document.getElementById(btn.getAttribute('data-target'));
      if (panel) {
        const hidden = panel.style.display === 'none';
        panel.style.display = hidden ? 'grid' : 'none';
        btn.textContent = hidden ? '收起詳解 ▴' : '📖 看詳解 ▾';
      }
    };
  });
}

// ============================================================================
// 6. 錯題本 (Error Book View)
// ============================================================================
function renderErrorBookView(filterUnit = null) {
  state.view = 'error_book';
  state.errorFilterUnit = filterUnit;
  const eb = getErrorBook();
  const ecMap = getErrorCounts();
  const bank = getCleanBank();
  const errorQuestions = bank.filter(q => eb.includes(q.id));
  const displayed = filterUnit ? errorQuestions.filter(q => q.lessonId === filterUnit) : errorQuestions;

  const unitTabsHtml = [
    `<button class="chip ${!filterUnit ? 'on' : ''}" data-filter-unit="all">全部 (${errorQuestions.length})</button>`,
    ...LESSONS.map(u => {
      const cnt = errorQuestions.filter(q => q.lessonId === u.id).length;
      if (cnt === 0) return '';
      const titleText = u.isExam ? `🏆 段考真題 (${cnt})` : `${u.title} (${cnt})`;
      return `<button class="chip ${filterUnit === u.id ? 'on' : ''}" data-filter-unit="${u.id}">${titleText}</button>`;
    })
  ].join('');

  const listHtml = displayed.length > 0 ? displayed.map(q => {
    const u = LESSONS.find(x => x.id === q.lessonId) || {};
    const ec = ecMap[q.id] || 1;
    const correctAns = q.type === 'handwriting' ? q.correctAnswer : (q.options.find(o => o.isCorrect)?.text || '');
    return `
      <div class="err-item">
        <div>
          <div class="q-mini">${formatPlainStem(q.question).replace(/\n/g, '<br>')}</div>
          <div style="margin-top:6px;font-size:14.5px;color:#047857;font-weight:800;">
            ✅ 標準答案：<span class="font-kai">${correctAns}</span>
          </div>
          <div class="meta">
            <span class="tag">${u.title || q.lessonId}</span>
            ${q.school ? `<span class="tag" style="background:#e0e7ff; color:#3730a3; font-weight:700;">🏫 ${q.school}</span>` : ''}
            <span class="tag">${q.category || q.batch}</span>
            <span class="tag bad">🔥 累計錯 ${ec} 次</span>
            ${q.trap ? `<span class="tag" style="background: #fef2f2; color: #991b1b">盲點：${q.trap}</span>` : ''}
          </div>
        </div>
        <div style="display:flex;flex-direction:column;gap:6px;">
          <button class="btn btn-primary btn-sm" data-retry-q="${q.id}">重做此題</button>
          <button class="btn btn-ghost btn-sm" data-remove-err="${q.id}">✔ 已學會</button>
        </div>
      </div>
    `;
  }).join('') : `
    <div class="empty">
      <div class="emo">🌟</div>
      <h3>太棒了！目前沒有待消滅的錯題</h3>
      <p class="muted">繼續保持，可以在首頁直接挑選課次或段考真題挑戰！</p>
    </div>
  `;

  const curUser = getCurrentUserObj();
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="view error-book">
      <div class="section-title">
        <h2>🔥 ${curUser.icon} ${curUser.name} 的終身錯題本</h2>
        <div style="display: flex; gap: 8px;">
          ${errorQuestions.length > 0 ? `<button class="btn btn-primary" id="btn-drill-all-errors">一鍵消滅全部錯題</button>` : ''}
          <button class="btn btn-ghost" id="btn-err-back">← 回首頁</button>
        </div>
      </div>

      <div class="err-tabs">${unitTabsHtml}</div>
      <div class="err-list">${listHtml}</div>
    </div>
  `;

  document.getElementById('btn-err-back').onclick = () => renderDashboardView();
  const drillBtn = document.getElementById('btn-drill-all-errors');
  if (drillBtn) drillBtn.onclick = () => startQuiz('error_book');

  app.querySelectorAll('[data-filter-unit]').forEach(btn => {
    btn.onclick = () => {
      const u = btn.getAttribute('data-filter-unit');
      renderErrorBookView(u === 'all' ? null : u);
    };
  });

  app.querySelectorAll('[data-retry-q]').forEach(btn => {
    btn.onclick = () => {
      const qId = btn.getAttribute('data-retry-q');
      const q = bank.find(x => x.id === qId);
      if (q) {
        state.quizQuestions = [q];
        state.quizIndex = 0;
        state.quizMode = 'error_book';
        state.currentUnitId = q.lessonId;
        state.quizTitle = `🎯 單題重練 · ${q.category || ''}`;
        state.answers = {};
        state.sessionHistory = [];
        if (q.type === 'mcq') state.optionOrders[q.id] = [...q.options];
        state.view = 'quiz';
        renderQuizQuestion();
      }
    };
  });

  app.querySelectorAll('[data-remove-err]').forEach(btn => {
    btn.onclick = () => {
      const qId = btn.getAttribute('data-remove-err');
      saveErrorBook(getErrorBook().filter(id => id !== qId));
      const ms = getMasteredIds();
      if (!ms.includes(qId)) saveMasteredIds([...ms, qId]);
      scheduleCloudPush();
      renderErrorBookView(filterUnit);
      showToast('✔ 已從錯題本移出並標記為精熟！');
    };
  });
}

// ============================================================================
// 7. A4 考卷排版與預覽出卷 (Print Setup View — 對齊數學網頁雙欄預覽器)
// ============================================================================
function renderPrintSetupView() {
  state.view = 'print';
  const unitChecksHtml = LESSONS.map(u => {
    const chk = state.printConfig.unitIds.includes(u.id) ? 'checked' : '';
    const labelText = u.isExam ? `🏆 ${u.title}` : u.title;
    return `
      <label>
        <input type="checkbox" value="${u.id}" ${chk} data-print-unit-toggle>
        <span>${labelText}</span>
      </label>
    `;
  }).join('');

  const pBatches = state.printConfig.batches || [...ALL_BATCH_TYPES];
  const isHwOnly = pBatches.length === 2 && pBatches.includes('寫國字') && pBatches.includes('寫注音');
  const isMcqOnly = pBatches.includes('原本題庫') && !pBatches.includes('寫國字');
  const isAll = pBatches.length === ALL_BATCH_TYPES.length;

  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="view print-setup">
      <aside class="glass setup-panel no-print">
        <h3>🖨️ A4 國語考卷設定</h3>

        <div class="field">
          <label>選擇出題課次：</label>
          <div class="check-list">${unitChecksHtml}</div>
        </div>

        <div class="field">
          <label>考卷題型分類：</label>
          <div class="seg" style="display: flex; gap: 6px; flex-wrap: wrap;">
            <button type="button" class="chip ${isAll ? 'on' : ''}" data-print-batch-mode="all">全題型綜合</button>
            <button type="button" class="chip ${isHwOnly ? 'on' : ''}" data-print-batch-mode="hw">純手寫國字注音</button>
            <button type="button" class="chip ${isMcqOnly ? 'on' : ''}" data-print-batch-mode="mcq">純選擇題卷</button>
          </div>
        </div>

        <div class="field">
          <label>題目數量：</label>
          <div class="range-row">
            <input type="range" id="print-q-count" min="4" max="16" value="${state.printConfig.count}">
            <b id="print-q-count-val">${state.printConfig.count}</b>
          </div>
        </div>

        <button class="btn btn-primary btn-lg btn-block" id="btn-do-print">
          🖨️ 立即列印此考卷 (A4)
        </button>
        <button class="btn btn-ghost btn-block" id="btn-shuffle-print" style="margin-top: 8px;">
          🎲 換一批題目
        </button>
        <button class="btn btn-ghost btn-block" id="btn-print-back" style="margin-top: 8px;">
          ← 取消回首頁
        </button>
      </aside>

      <section class="preview-wrap">
        <div id="paper-container"></div>
      </section>
    </div>
  `;

  renderPaperSheet();

  app.querySelectorAll('[data-print-unit-toggle]').forEach(chk => {
    chk.onchange = () => {
      const uId = chk.value;
      if (chk.checked) {
        if (!state.printConfig.unitIds.includes(uId)) state.printConfig.unitIds.push(uId);
      } else {
        state.printConfig.unitIds = state.printConfig.unitIds.filter(x => x !== uId);
      }
      if (state.printConfig.unitIds.length === 0) {
        chk.checked = true;
        state.printConfig.unitIds.push(uId);
        showToast('至少勾選一個課次！');
        return;
      }
      renderPaperSheet();
    };
  });

  app.querySelectorAll('[data-print-batch-mode]').forEach(btn => {
    btn.onclick = () => {
      const mode = btn.getAttribute('data-print-batch-mode');
      if (mode === 'hw') state.printConfig.batches = ['寫國字', '寫注音'];
      else if (mode === 'mcq') state.printConfig.batches = ['原本題庫', '新題庫擴充', '段考真題'];
      else state.printConfig.batches = [...ALL_BATCH_TYPES];
      app.querySelectorAll('[data-print-batch-mode]').forEach(b => b.classList.remove('on'));
      btn.classList.add('on');
      renderPaperSheet();
    };
  });

  const rangeInput = document.getElementById('print-q-count');
  const rangeVal = document.getElementById('print-q-count-val');
  rangeInput.oninput = () => {
    state.printConfig.count = parseInt(rangeInput.value, 10);
    rangeVal.textContent = state.printConfig.count;
    renderPaperSheet();
  };

  document.getElementById('btn-shuffle-print').onclick = () => {
    renderPaperSheet();
    showToast('🎲 已隨機換一批考卷題目！');
  };
  document.getElementById('btn-do-print').onclick = () => window.print();
  document.getElementById('btn-print-back').onclick = () => renderDashboardView();
}

function renderPaperSheet() {
  const container = document.getElementById('paper-container');
  if (!container) return;

  const bank = getCleanBank();
  let pool = bank.filter(q => state.printConfig.unitIds.includes(q.lessonId));
  const pBatches = state.printConfig.batches || [...ALL_BATCH_TYPES];
  if (pBatches.length === 2 && pBatches.includes('寫國字')) {
    pool = pool.filter(q => q.type === 'handwriting');
  } else if (!pBatches.includes('寫國字')) {
    pool = pool.filter(q => q.type === 'mcq');
  }
  if (pool.length === 0) {
    pool = bank.filter(q => state.printConfig.unitIds.includes(q.lessonId));
  }

  const shuffled = [...pool].sort(() => Math.random() - 0.5).slice(0, state.printConfig.count);
  const hwList = shuffled.filter(q => q.type === 'handwriting');
  const mcqList = shuffled.filter(q => q.type === 'mcq');
  const selected = [...hwList, ...mcqList];

  const curUser = getCurrentUserObj();
  const qIds = selected.map(q => q.id).join(',');
  const checkUrl = `${window.location.origin}${window.location.pathname}?user=${encodeURIComponent(state.currentUser)}&quiz_ids=${encodeURIComponent(qIds)}`;
  const qrSvg = makeQRCode(checkUrl);

  const titleUnits = state.printConfig.unitIds.map(uId => {
    const u = LESSONS.find(x => x.id === uId);
    return u ? u.title : uId;
  }).join('、');

  const questionsHtml = selected.map((q, idx) => {
    if (q.type === 'handwriting') {
      const stemWithBoxes = q.question.replace(/\[\[(國字|注音):(.*?):(.*?)\]\]/g, (_, mode, prompt) => {
        return `<span class="print-hw-blank"><span>${prompt}</span><span class="print-hw-box"></span></span>`;
      });
      return `
        <div class="pq">
          <div class="pq-title">
            <span class="pq-no">${idx + 1}.</span>
            <div class="font-kai" style="font-size:15.5pt;line-height:2.1;">
              <small style="font-family:var(--font);font-size:10pt;color:#555;">[${q.category || '國字注音'}]</small>
              ${stemWithBoxes}
            </div>
          </div>
        </div>
      `;
    } else {
      const optsHtml = (q.options || []).map((o, oi) => `<div>(${o.label || ['A','B','C','D'][oi] || (oi+1)}) ${o.text}</div>`).join('');
      return `
        <div class="pq">
          <div class="pq-title">
            <span class="pq-no">${idx + 1}.</span>
            <div style="flex:1;">
              <div><b>(　　)</b> ${String(q.question || '').replace(/\n/g, '<br>')}</div>
              <div class="print-mcq-grid" style="margin-top:6px;font-size:12.5pt;">${optsHtml}</div>
            </div>
          </div>
        </div>
      `;
    }
  }).join('');

  container.innerHTML = `
    <div class="paper">
      <div class="paper-head">
        <div>
          <h2>六上國語特訓・隨堂實戰測驗卷</h2>
          <div class="sub">範圍：${titleUnits}（共 ${selected.length} 題）</div>
          <div class="paper-fields">
            <span>姓名：<b>${curUser.name}</b></span>
            <span>日期：<i></i></span>
            <span>得分：<i></i> 分</span>
          </div>
        </div>
        <div class="paper-qr">
          ${qrSvg}
          <div>📱 掃描秒對答案</div>
        </div>
      </div>

      <div class="paper-body">
        ${questionsHtml}
      </div>

      <div class="paper-foot">
        作答完畢後，請用 iPad 或手機掃描右上角 QR Code，即可開啟本卷專屬題目對答案並自動建立錯題本。
      </div>
    </div>
  `;
}

// ============================================================================
// 8. 匯出給 AI (Export View)
// ============================================================================
function buildMarkdownReport(singleSession = false) {
  const curUser = getCurrentUserObj();
  const bank = getCleanBank();
  const eb = getErrorBook();
  const ec = getErrorCounts();
  const errQs = bank.filter(q => eb.includes(q.id));

  const lines = [
    `# 📊 六上國語特訓 學習診斷與錯題報告`,
    `- **學生**：${curUser.name} (${curUser.role})`,
    `- **匯出時間**：${new Date().toLocaleString('zh-TW')}`,
    ``
  ];

  if (singleSession && state.lastFinishedSession) {
    const s = state.lastFinishedSession;
    lines.push(`## 一、本次測驗成績摘要`);
    lines.push(`- **單元**：${s.title}`);
    lines.push(`- **百分制得分**：**${s.score} 分**（共 ${s.total} 題）`);
    lines.push(`- **三態統計**：✅ 秒殺 ${s.okCnt} 題 ｜ ⏳ 想很久 ${s.slowCnt} 題 ｜ ❌ 答錯 ${s.badCnt} 題`);
    lines.push(``);
    lines.push(`## 二、本次題目明細`);
    s.questions.forEach((q, i) => {
      const a = s.answersMap[q.id];
      const st = a && a.result ? a.result : 'skipped';
      const correctAns = q.type === 'handwriting' ? q.correctAnswer : (q.options.find(o => o.isCorrect)?.text || '');
      lines.push(`${i + 1}. **[${st.toUpperCase()}]** ${formatPlainStem(q.question)} ｜ 正解：\`${correctAns}\``);
    });
  } else {
    lines.push(`## 一、目前錯題本弱點清單（共 ${errQs.length} 題）`);
    errQs.forEach((q, i) => {
      const correctAns = q.type === 'handwriting' ? q.correctAnswer : (q.options.find(o => o.isCorrect)?.text || '');
      lines.push(`${i + 1}. **[${q.lessonId} ${q.category || ''}]** (累計錯 ${ec[q.id] || 1} 次)`);
      lines.push(`   - 題目：${formatPlainStem(q.question)}`);
      lines.push(`   - 正解：\`${correctAns}\``);
      if (q.trap) lines.push(`   - 盲點診斷：${q.trap}`);
    });
  }

  lines.push(``);
  lines.push(`---`);
  lines.push(`請 AI 家教根據以上錯題，幫學生整理形近字/多音字記憶口訣，並現場出 5 題同考點變形題進行抽考！`);
  return lines.join('\n');
}

function downloadMarkdownReport(singleSession = false) {
  const md = buildMarkdownReport(singleSession);
  const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `六上國語診斷報告_${state.currentUser}_${new Date().toISOString().slice(0,10)}.md`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function renderExportView() {
  state.view = 'export';
  const md = buildMarkdownReport(false);
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="view export">
      <div class="glass q-card">
        <div class="section-title" style="margin-top:0;">
          <h2>📤 匯出給 AI 家教進行弱點加強</h2>
          <button class="btn btn-ghost" id="btn-exp-back">← 回首頁</button>
        </div>
        <p class="muted">一鍵複製下方診斷報告貼給 ChatGPT / Claude / Gemini，即可獲得專屬字音字形口訣與 5 題變形抽考！</p>
        <div style="display:flex;gap:10px;margin:16px 0;flex-wrap:wrap;">
          <button class="btn btn-primary" id="btn-copy-ai">📋 一鍵複製 AI 診斷指令 (Markdown)</button>
          <button class="btn btn-ghost" id="btn-copy-slim-logs">🤖 複製做法 B 完整自給自足日誌 (JSON)</button>
          <button class="btn btn-ghost" id="btn-dl-ai">📥 下載 Markdown 報告 (.md)</button>
        </div>
        <textarea id="ai-prompt-box" readonly style="width:100%;min-height:360px;padding:16px;border-radius:16px;border:1.5px solid var(--line);font-family:monospace;font-size:14px;line-height:1.6;">${md}</textarea>
      </div>
    </div>
  `;

  document.getElementById('btn-exp-back').onclick = () => renderDashboardView();
  document.getElementById('btn-copy-ai').onclick = () => {
    navigator.clipboard.writeText(md).then(() => showToast('✅ 已複製到剪貼簿！可直接貼給 AI！'));
  };
  document.getElementById('btn-dl-ai').onclick = () => downloadMarkdownReport(false);
  const copySlimBtn = document.getElementById('btn-copy-slim-logs');
  if (copySlimBtn) {
    copySlimBtn.onclick = () => {
      const logs = JSON.parse(localStorage.getItem(getUserKey('recent_answer_logs')) || '[]');
      if (logs.length === 0) {
        showToast('目前尚無最新自給自足日誌，請先至測驗作答題目！');
        return;
      }
      const jsonStr = JSON.stringify(logs, null, 2);
      navigator.clipboard.writeText(jsonStr).then(() => {
        showToast(`📋 已複製 ${logs.length} 筆自給自足 AI 日誌 (JSON) 到剪貼簿！`);
      });
    };
  }
}

// ============================================================================
// 9. 初始化與 QR 深層連結解析
// ============================================================================
function checkDeepLinkOnLoad() {
  const params = new URLSearchParams(window.location.search);
  const uParam = params.get('user');
  const qIdsParam = params.get('quiz_ids');

  if (uParam && USERS.some(u => u.id === uParam)) {
    state.currentUser = uParam;
    localStorage.setItem(ACTIVE_USER_KEY, uParam);
  }

  if (qIdsParam) {
    const ids = qIdsParam.split(',').map(s => s.trim()).filter(Boolean);
    const bank = getCleanBank();
    const matched = ids.map(id => bank.find(q => q.id === id)).filter(Boolean);
    if (matched.length > 0) {
      window.history.replaceState({}, document.title, window.location.pathname);
      state.quizTitle = `🖨️ A4 考卷掃碼對答案 (${matched.length}題)`;
      state.quizMode = 'qr_sheet';
      state.currentUnitId = null;
      state.quizQuestions = matched;
      state.quizIndex = 0;
      state.answers = {};
      state.optionOrders = {};
      matched.forEach(q => {
        if (q.type === 'mcq' && Array.isArray(q.options)) state.optionOrders[q.id] = [...q.options];
      });
      state.view = 'quiz';
      renderQuizQuestion();
      showToast('📱 已載入 A4 考卷專屬題目，開始對答案！');
      return true;
    }
  }
  return false;
}

window.addEventListener('DOMContentLoaded', () => {
  migrateLegacyDataToRex();
  updateNavUserUI();
  updateNavBadge();

  document.getElementById('nav-home').onclick = () => renderDashboardView();
  document.getElementById('nav-user').onclick = () => openUserModal();
  document.getElementById('nav-errors').onclick = () => renderErrorBookView();
  document.getElementById('nav-print').onclick = () => renderPrintSetupView();
  document.getElementById('nav-export').onclick = () => renderExportView();

  if (!checkDeepLinkOnLoad()) {
    renderDashboardView();
  }
  syncFromCloud(state.currentUser, false);
});
