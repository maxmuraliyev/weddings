/* =============================================
   WEDDING INVITATION — script.js
   Asrorbek & Sayyoraxon · 29.07.2026
   ============================================= */

// ─── WEDDING DATE ────────────────────────────
const WEDDING_DATE = new Date('2026-07-29T17:00:00');

// ─── TRANSLATIONS ────────────────────────────
const T = {
  uz: {
    'hero.tag':            "Nikoh Taklifnomasi",
    'hero.month':          "Iyul",
    'hero.year':           "2026 · Chorshanba",
    'hero.scroll':         "Pastga",

    'invite.tag':          "Aziz mehmonimiz",
    'invite.title':        "Siz bizning baxtimizni ulashishingizni so'raymiz",
    'invite.text':         "Qalbimiz to'la quvonch va minnatdorlik bilan, sizni muhabbatimiz bayramiga taklif etamiz. Bu baxtli kunda siz bilan birga bo'lish bizga katta sharaf.",
    'invite.sign':         "— Asrorbek va Sayyoraxon oilalari",

    'details.tag':         "Kecha tafsilotlari",
    'details.title':       "Nikoh Marosimi",
    'details.date.label':  "Sana",
    'details.date.val':    "29 Iyul<br/>2026",
    'details.time.label':  "Soat",
    'details.venue.label': "Manzil",
    'details.venue.val':   '"Afsona"<br/>To\'yxonasi',

    'cd.label':  "To'yga qolgan vaqt",
    'cd.days':   "Kun",
    'cd.hours':  "Soat",
    'cd.mins':   "Daqiqa",
    'cd.secs':   "Soniya",

    'story.tag':   "Sevgi Tariximiz",
    'story.title': "Birga bosib o'tgan yo'llar",
    'story.1':     "Birinchi uchrashuv — birinchi qarash, birinchi tabassum. Qalblarimiz bir-birini tanidi.",
    'story.2':     "U tiz cho'kdi va hayotining eng muhim savolini berdi. Javob — «Ha!»",
    'story.3':     "Bugun — eng baxtli kun. Ikkimiz bitta hayotni boshlaymiz.",

    'map.tag':   "Manzil",
    'map.title': '"Afsona" To\'yxonasi',
    'map.addr':  "Angren shahri, Toshkent viloyati",
    'map.name':  '"Afsona" To\'yxonasi',
    'map.city':  "Angren, Toshkent",
    'map.btn':   "Xaritada ko'rish →",

    'rsvp.sub':       "Javobingiz bizga muhim",
    'rsvp.deadline':  "Iltimos, 15 Iyul 2026 gacha javob bering",
    'rsvp.name.ph':   "Ismingiz va familiyangiz",
    'rsvp.phone.ph':  "Telefon raqamingiz",
    'rsvp.guests':    "Mehmonlar soni",
    'rsvp.attend.q':  "Tashrif buyurasizmi?",
    'rsvp.yes':       "Ha, albatta kelaman",
    'rsvp.no':        "Kela olmayman",
    'rsvp.msg.ph':    "Tabrik xabaringizni qoldiring...",
    'rsvp.btn':       "Yuborish",

    'rsvp.ok.yes':    "Rahmat, {name}! Javobingiz qabul qilindi. Sizni ko'rishdan xursand bo'lamiz!",
    'rsvp.ok.no':     "Rahmat, {name}! Javobingiz qabul qilindi. Sog'-salomat bo'ling!",
    'rsvp.err.name':  "✦ Iltimos, ismingizni kiriting.",
    'rsvp.err.phone': "✦ Iltimos, telefon raqamingizni kiriting.",
    'rsvp.loading':   "✦ Yuborilmoqda...",

    'wishes.tag':   "Tabriklar",
    'wishes.title': "Mehmonlarning tilaklari",

    'info.dress.title': "Kiyinish tartibi",
    'info.dress.desc':  "Rasmiy kiyim<br/><em style=\"font-size:13px;color:var(--rose)\">Oq, zangori, pushti</em>",
    'info.gift.title':  "To'yona",
    'info.gift.desc':   "Eng yaxshi sovg'a — sizning tashrif buyurishingiz. Pullik sovg'a ham qabul qilinadi.",
    'info.park.title':  "To'xtash joyi",
    'info.park.desc':   "To'yxona oldida bepul avtoturargoh mavjud. Valet xizmati ko'rsatiladi.",

    'photo.tag':       "Xotiralar",
    'photo.title':     "Rasmlaringizni ulashing",
    'photo.desc':      "Har bir go'zal lahzani birga abadiylashtiring. Rasmlaringizni Telegram bot orqali yuboring — barchasini saqlaymiz.",
    'photo.bot.title': "Telegram orqali rasm yuboring",
    'photo.bot.desc':  "Quyidagi tugmani bosib, botimizga o'ting va rasmlaringizni yuboring.",
    'photo.btn':       "Botga o'tish",

    'footer.quote': "«Va U ular orasiga mehr va rahm qo'ydi.» — Quron 30:21",
  },

  ru: {
    'hero.tag':            "Свадебное Приглашение",
    'hero.month':          "Июль",
    'hero.year':           "2026 · Среда",
    'hero.scroll':         "Листать",

    'invite.tag':          "Дорогой гость",
    'invite.title':        "Мы приглашаем вас разделить наше счастье",
    'invite.text':         "С радостью и благодарностью в сердце приглашаем вас на торжество нашей любви. Ваше присутствие сделает этот день по-настоящему незабываемым.",
    'invite.sign':         "— Семьи Асрорбека и Саёрахон",

    'details.tag':         "Детали торжества",
    'details.title':       "Свадебное торжество",
    'details.date.label':  "Дата",
    'details.date.val':    "29 Июля<br/>2026",
    'details.time.label':  "Время",
    'details.venue.label': "Место",
    'details.venue.val':   '"Afsona"<br/>Банкетный зал',

    'cd.label':  "До свадьбы осталось",
    'cd.days':   "Дней",
    'cd.hours':  "Часов",
    'cd.mins':   "Минут",
    'cd.secs':   "Секунд",

    'story.tag':   "История нашей любви",
    'story.title': "Путь, пройденный вместе",
    'story.1':     "Первая встреча — первый взгляд, первая улыбка. Наши сердца узнали друг друга.",
    'story.2':     "Он встал на колено и задал самый важный вопрос в своей жизни. Ответ — «Да!»",
    'story.3':     "Сегодня — самый счастливый день. Мы начинаем одну жизнь на двоих.",

    'map.tag':   "Место проведения",
    'map.title': 'Банкетный зал "Afsona"',
    'map.addr':  "г. Ангрен, Ташкентская область",
    'map.name':  'Банкетный зал "Afsona"',
    'map.city':  "Ангрен, Ташкент",
    'map.btn':   "Показать на карте →",

    'rsvp.sub':       "Ваш ответ важен для нас",
    'rsvp.deadline':  "Пожалуйста, ответьте до 15 Июля 2026",
    'rsvp.name.ph':   "Ваше имя и фамилия",
    'rsvp.phone.ph':  "Ваш номер телефона",
    'rsvp.guests':    "Количество гостей",
    'rsvp.attend.q':  "Вы придёте?",
    'rsvp.yes':       "Да, с радостью приду",
    'rsvp.no':        "К сожалению, не смогу",
    'rsvp.msg.ph':    "Оставьте пожелание молодым...",
    'rsvp.btn':       "Отправить",

    'rsvp.ok.yes':    "Спасибо, {name}! Ответ получен. Будем рады вас видеть!",
    'rsvp.ok.no':     "Спасибо, {name}! Ответ получен. Будьте здоровы!",
    'rsvp.err.name':  "✦ Пожалуйста, введите ваше имя.",
    'rsvp.err.phone': "✦ Пожалуйста, введите номер телефона.",
    'rsvp.loading':   "✦ Отправляется...",

    'wishes.tag':   "Поздравления",
    'wishes.title': "Пожелания гостей",

    'info.dress.title': "Дресс-код",
    'info.dress.desc':  "Официальный наряд<br/><em style=\"font-size:13px;color:var(--rose)\">Белый, синий, розовый</em>",
    'info.gift.title':  "To'yona",
    'info.gift.desc':   "Лучший подарок — ваше присутствие. Денежный подарок также приветствуется.",
    'info.park.title':  "Парковка",
    'info.park.desc':   "Бесплатная парковка у банкетного зала. Предусмотрен услуга парковщика.",

    'photo.tag':       "Воспоминания",
    'photo.title':     "Поделитесь фото",
    'photo.desc':      "Запечатлеем каждый прекрасный момент вместе. Отправляйте фото через Telegram-бот — сохраним их все.",
    'photo.bot.title': "Отправьте фото через Telegram",
    'photo.bot.desc':  "Нажмите кнопку ниже, перейдите в бот и отправьте ваши фотографии.",
    'photo.btn':       "Перейти в бот",

    'footer.quote': "«И Он установил между вами любовь и милосердие.» — Коран 30:21",
  },
};

// ─── CURRENT LANGUAGE ────────────────────────
let currentLang = 'uz';

function setLang(lang) {
  if (!T[lang]) return;
  currentLang = lang;

  // Update <html lang>
  document.documentElement.lang = lang;

  // Update active button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update all [data-i18n] elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = T[lang][key];
    if (val !== undefined) el.innerHTML = val;
  });

  // Update all [data-i18n-placeholder] inputs/textareas
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    const val = T[lang][key];
    if (val !== undefined) el.placeholder = val;
  });
}

// ─── COUNTDOWN ───────────────────────────────
function updateCountdown() {
  const diff = WEDDING_DATE - new Date();
  if (diff <= 0) {
    ['cd-days','cd-hours','cd-mins','cd-secs'].forEach(id =>
      document.getElementById(id).textContent = '00'
    );
    return;
  }
  const days  = Math.floor(diff / 864e5);
  const hours = Math.floor((diff % 864e5) / 36e5);
  const mins  = Math.floor((diff % 36e5)  / 6e4);
  const secs  = Math.floor((diff % 6e4)   / 1e3);
  document.getElementById('cd-days').textContent  = String(days).padStart(2,'0');
  document.getElementById('cd-hours').textContent = String(hours).padStart(2,'0');
  document.getElementById('cd-mins').textContent  = String(mins).padStart(2,'0');
  document.getElementById('cd-secs').textContent  = String(secs).padStart(2,'0');
}
setInterval(updateCountdown, 1000);
updateCountdown();

// ─── SCROLL REVEAL ───────────────────────────
const revealObserver = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0.10 }
);
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ─── MUSIC ENGINE ────────────────────────────
// Romantic waltz piano melody using Web Audio API
// Inspired by classic Central Asian wedding songs — no copyrighted material

let audioCtx    = null;
let masterGain  = null;
let musicPlaying = false;
let melodyTimeout = null;

// Note frequencies (Hz)
const NOTE = {
  C4:261.63, D4:293.66, E4:329.63, F4:349.23, G4:392.00, A4:440.00, B4:493.88,
  C5:523.25, D5:587.33, E5:659.25, F5:698.46, G5:783.99, A5:880.00, B5:987.77,
  C6:1046.50,
};

// Waltz melody in C major — 3/4 time, 80 BPM → beat = 0.75s
// [frequency | null=rest, duration_in_beats]
const MELODY = [
  // Phrase A
  [NOTE.E5, 1.0], [NOTE.G5, 0.5], [NOTE.A5, 0.5],
  [NOTE.G5, 0.5], [NOTE.E5, 0.5], [NOTE.C5, 1.0],
  [NOTE.D5, 0.5], [NOTE.F5, 0.5], [NOTE.A5, 1.0],
  [NOTE.G5, 1.5], [null,    1.5],

  // Phrase B
  [NOTE.C5, 1.0], [NOTE.E5, 0.5], [NOTE.G5, 0.5],
  [NOTE.F5, 0.5], [NOTE.D5, 0.5], [NOTE.B4, 1.0],
  [NOTE.C5, 0.5], [NOTE.E5, 0.5], [NOTE.G5, 1.0],
  [NOTE.C5, 1.5], [null,    1.5],

  // Phrase C (lifting)
  [NOTE.A5, 1.0], [NOTE.G5, 0.5], [NOTE.F5, 0.5],
  [NOTE.E5, 1.0], [NOTE.D5, 1.0],
  [NOTE.C5, 0.5], [NOTE.E5, 0.5], [NOTE.G5, 0.5], [NOTE.C6, 0.5],
  [NOTE.B5, 1.5], [null,    0.5],

  // Phrase D (resolve)
  [NOTE.G5, 1.0], [NOTE.E5, 0.5], [NOTE.D5, 0.5],
  [NOTE.C5, 1.0], [NOTE.E5, 0.5], [NOTE.G5, 0.5],
  [NOTE.A5, 0.5], [NOTE.G5, 0.5], [NOTE.F5, 0.5], [NOTE.E5, 0.5],
  [NOTE.C5, 1.5], [null,    1.5],
];

const BEAT = 0.75; // seconds per beat at 80 BPM

// Play a single piano-like note
function playNote(ctx, dest, freq, startTime, durBeats, vol) {
  if (!freq) return; // rest

  const dur = durBeats * BEAT;

  // Piano timbre: fundamental + harmonics
  const envGain = ctx.createGain();
  envGain.connect(dest);

  const harmonics = [
    { freq: freq,      gain: 1.00 },
    { freq: freq * 2,  gain: 0.28 },
    { freq: freq * 3,  gain: 0.10 },
    { freq: freq * 4,  gain: 0.04 },
  ];

  harmonics.forEach(({ freq: f, gain: g }) => {
    const osc  = ctx.createOscillator();
    const gn   = ctx.createGain();
    osc.type   = 'sine';
    osc.frequency.value = f;
    gn.gain.value = g * vol;
    osc.connect(gn);
    gn.connect(envGain);
    osc.start(startTime);
    osc.stop(startTime + dur + 0.08);
  });

  // ADSR envelope
  const peakVol = vol * 0.9;
  envGain.gain.setValueAtTime(0,        startTime);
  envGain.gain.linearRampToValueAtTime(peakVol, startTime + 0.012);        // attack
  envGain.gain.exponentialRampToValueAtTime(peakVol * 0.65, startTime + dur * 0.25); // decay
  envGain.gain.setValueAtTime(peakVol * 0.65, startTime + dur * 0.8);     // sustain
  envGain.gain.exponentialRampToValueAtTime(0.0001, startTime + dur + 0.06); // release
}

// Play accompaniment chord (bass + mid)
function playChord(ctx, dest, rootFreq, startTime, durBeats) {
  const dur     = durBeats * BEAT;
  const chordGain = ctx.createGain();
  chordGain.gain.value = 0.018;
  chordGain.connect(dest);

  [rootFreq / 2, rootFreq, rootFreq * 1.5].forEach(f => {
    const osc = ctx.createOscillator();
    osc.type  = 'sine';
    osc.frequency.value = f;
    osc.connect(chordGain);
    osc.start(startTime);
    osc.stop(startTime + dur);
  });
}

// Schedule the full melody and loop it
function scheduleMelody(ctx, dest) {
  let t = ctx.currentTime + 0.1;

  MELODY.forEach(([freq, beats]) => {
    playNote(ctx, dest, freq, t, beats, 0.07);
    // Simple bass on beat 1 of each bar
    if (freq && beats >= 1.0) playChord(ctx, dest, NOTE.C4, t, beats * 0.5);
    t += beats * BEAT;
  });

  // Loop: schedule next round ~0.3s before this one ends
  const totalDur = MELODY.reduce((s, [, b]) => s + b * BEAT, 0);
  melodyTimeout = setTimeout(() => {
    if (musicPlaying) scheduleMelody(ctx, dest);
  }, (totalDur - 0.3) * 1000);
}

function toggleMusic() {
  const btn       = document.getElementById('musicBtn');
  const iconPlay  = document.getElementById('music-icon-play');
  const iconPause = document.getElementById('music-icon-pause');

  // First click: create AudioContext inside user gesture
  if (!audioCtx) {
    audioCtx   = new (window.AudioContext || window.webkitAudioContext)();
    masterGain = audioCtx.createGain();
    masterGain.gain.value = 1;

    // Soft reverb via delay + feedback
    const delay     = audioCtx.createDelay(0.5);
    const feedback  = audioCtx.createGain();
    const wetGain   = audioCtx.createGain();
    delay.delayTime.value   = 0.28;
    feedback.gain.value     = 0.25;
    wetGain.gain.value      = 0.35;
    masterGain.connect(delay);
    delay.connect(feedback);
    feedback.connect(delay);
    delay.connect(wetGain);
    wetGain.connect(audioCtx.destination);
    masterGain.connect(audioCtx.destination);

    scheduleMelody(audioCtx, masterGain);
    musicPlaying = true;
    btn.classList.add('playing');
    iconPlay.style.display  = 'none';
    iconPause.style.display = '';
    return;
  }

  if (musicPlaying) {
    audioCtx.suspend();
    clearTimeout(melodyTimeout);
    btn.classList.remove('playing');
    iconPlay.style.display  = '';
    iconPause.style.display = 'none';
    musicPlaying = false;
  } else {
    audioCtx.resume().then(() => scheduleMelody(audioCtx, masterGain));
    btn.classList.add('playing');
    iconPlay.style.display  = 'none';
    iconPause.style.display = '';
    musicPlaying = true;
  }
}

// ─── GUEST COUNTER ───────────────────────────
let guestCount = 1;
function changeGuest(delta) {
  guestCount = Math.max(1, Math.min(20, guestCount + delta));
  document.getElementById('guest-count').textContent = guestCount;
}

// ─── RSVP SUBMIT ─────────────────────────────
function submitRSVP() {
  const name     = document.getElementById('rsvp-name').value.trim();
  const phone    = document.getElementById('rsvp-phone').value.trim();
  const msg      = document.getElementById('rsvp-msg').value.trim();
  const checked  = document.querySelector('input[name="attendance"]:checked');
  const statusEl = document.getElementById('rsvp-status');
  const lang     = currentLang;

  if (!name)  { showStatus(statusEl, 'error', T[lang]['rsvp.err.name']);  return; }
  if (!phone) { showStatus(statusEl, 'error', T[lang]['rsvp.err.phone']); return; }

  showStatus(statusEl, 'loading', T[lang]['rsvp.loading']);

  const attend = checked ? checked.value : 'yes';

  setTimeout(() => {
    const tmpl = attend === 'yes' ? T[lang]['rsvp.ok.yes'] : T[lang]['rsvp.ok.no'];
    showStatus(statusEl, 'success', tmpl.replace('{name}', name));

    if (attend === 'yes' && msg) addWishCard(name, `«${msg}»`);

    document.getElementById('rsvp-name').value  = '';
    document.getElementById('rsvp-phone').value = '';
    document.getElementById('rsvp-msg').value   = '';
    guestCount = 1;
    document.getElementById('guest-count').textContent = '1';
    const yesRadio = document.querySelector('input[name="attendance"][value="yes"]');
    if (yesRadio) yesRadio.checked = true;
  }, 1500);
}

function showStatus(el, type, msg) {
  el.className   = 'status-box ' + type;
  el.textContent = msg;
}

// ─── WISHES WALL ─────────────────────────────
function addWishCard(name, message) {
  const list = document.getElementById('wishes-list');
  if (!list) return;

  const card = document.createElement('div');
  card.className = 'wish-card reveal';

  const nameEl = document.createElement('div');
  nameEl.className   = 'wish-name';
  nameEl.textContent = name;

  const msgEl = document.createElement('div');
  msgEl.className   = 'wish-msg';
  msgEl.textContent = message;

  card.appendChild(nameEl);
  card.appendChild(msgEl);
  list.insertBefore(card, list.firstChild);

  requestAnimationFrame(() => requestAnimationFrame(() => {
    card.classList.add('visible');
    revealObserver.observe(card);
  }));
}

// ─── FLOATING PETALS ─────────────────────────
const PETAL_COLORS = [
  '#c87e6a55', '#e0a89866', '#f2d5cc44', '#c9a96e33', '#ffffff1a',
];

function createPetal() {
  const container = document.getElementById('petals-container');
  if (!container) return;

  const p    = document.createElement('div');
  p.className = 'petal';

  const size  = Math.random() * 10 + 5;
  const x     = Math.random() * 100;
  const dur   = Math.random() * 9 + 8;
  const del   = Math.random() * 6;
  const color = PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)];
  const br    = Math.random() > 0.5 ? '50% 0 50% 0' : '0 50% 0 50%';

  p.style.cssText = `
    width:${size}px; height:${size*.72}px;
    left:${x}%; top:-20px;
    background:${color};
    animation-duration:${dur}s;
    animation-delay:-${del}s;
    border-radius:${br};
  `;

  container.appendChild(p);
  setTimeout(() => { if (p.parentNode) p.parentNode.removeChild(p); }, (dur + del) * 1000 + 500);
}

(function spawnLoop() {
  createPetal();
  setTimeout(spawnLoop, Math.random() * 600 + 250);
})();

// ─── HERO BG PARALLAX ────────────────────────
const heroBg = document.querySelector('.hero-bg');
window.addEventListener('scroll', () => {
  const sy = window.scrollY;
  if (heroBg && sy < window.innerHeight)
    heroBg.style.transform = `translateY(${sy * 0.4}px)`;
}, { passive: true });

// ─── SMOOTH SCROLL ANCHORS ───────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const t = document.querySelector(a.getAttribute('href'));
    if (t) t.scrollIntoView({ behavior: 'smooth' });
  });
});

// ─── INIT ────────────────────────────────────
// Set default language on load (UZ)
setLang('uz');
