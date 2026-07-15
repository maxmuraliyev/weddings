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

    'toyona.desc': "Agar istasangiz, to'yonani kuyov kartasiga yuborishingiz mumkin.",
    'toyona.card.label': "KARTA RAQAMI",
    'toyona.receiver.label': "QABUL QILUVCHI",
    'toyona.receiver.name': "Azizbek",
    'toyona.copy': "Raqamni nusxalash",

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

    'toyona.desc': "Если желаете, можете отправить подарок (туёна) на карту жениха.",
    'toyona.card.label': "НОМЕР КАРТЫ",
    'toyona.receiver.label': "ПОЛУЧАТЕЛЬ",
    'toyona.receiver.name': "Азизбек",
    'toyona.copy': "Скопировать номер",

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

// ─── MUSIC ENGINE (HTML5 Audio) ──────────────
const bgMusic = document.getElementById('bg-music');
let musicPlaying = false;

function toggleMusic() {
  const btn       = document.getElementById('musicBtn');
  const iconPlay  = document.getElementById('music-icon-play');
  const iconPause = document.getElementById('music-icon-pause');

  if (!bgMusic) return;

  if (musicPlaying) {
    bgMusic.pause();
    btn.classList.remove('playing');
    iconPlay.style.display  = '';
    iconPause.style.display = 'none';
    musicPlaying = false;
  } else {
    bgMusic.play().then(() => {
      btn.classList.add('playing');
      iconPlay.style.display  = 'none';
      iconPause.style.display = '';
      musicPlaying = true;
    }).catch(err => console.log("Autoplay blocked:", err));
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

// ─── TO'YONA CARD ACTIONS ────────────────────
function copyCardNumber() {
  const numberText = document.getElementById('cc-number').textContent.replace(/\s+/g, '');
  navigator.clipboard.writeText(numberText).then(() => {
    const btnText = document.getElementById('copy-btn-text');
    const originalText = btnText.textContent;
    btnText.textContent = currentLang === 'uz' ? "Nusxalandi!" : "Скопировано!";
    setTimeout(() => {
      btnText.textContent = originalText;
    }, 2000);
  });
}

// ─── INIT & AUTOPLAY ─────────────────────────
// Set default language on load (UZ)
setLang('uz');

// Attempt to autoplay immediately
function tryAutoplay() {
  if (!bgMusic || musicPlaying) return;
  bgMusic.play().then(() => {
    musicPlaying = true;
    document.getElementById('musicBtn').classList.add('playing');
    document.getElementById('music-icon-play').style.display = 'none';
    document.getElementById('music-icon-pause').style.display = '';
  }).catch((e) => {
    console.log("Browser blocked immediate autoplay. Waiting for user interaction...");
    // Fallback: wait for the first click/scroll/touch
    const startMusic = () => {
      if (!musicPlaying) toggleMusic();
      document.removeEventListener('click', startMusic);
      document.removeEventListener('scroll', startMusic);
      document.removeEventListener('touchstart', startMusic);
    };
    document.addEventListener('click', startMusic);
    document.addEventListener('scroll', startMusic, { passive: true });
    document.addEventListener('touchstart', startMusic, { passive: true });
  });
}

// Try autoplay as soon as possible
tryAutoplay();
