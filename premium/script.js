/* =============================================
   WEDDING INVITATION — script.js
   Sanjar & Marjona · 16.10.2026 & 18.10.2026
   ============================================= */

// ─── WEDDING DATES ───────────────────────────
const DATES = {
  qiz:   new Date('2026-10-16T17:00:00'),
  nikoh: new Date('2026-10-18T17:00:00'),
};

// Target date for countdown (default: upcoming event)
let currentCdTarget = (new Date() < DATES.qiz) ? 'qiz' : 'nikoh';

// ─── TRANSLATIONS ────────────────────────────
const T = {
  uz: {
    'hero.tag':            "Nikoh Taklifnomasi",
    'hero.month':          "Oktyabr",
    'hero.year':           "2026 · Qiz Bazmi & Nikoh Bazmi",
    'hero.scroll':         "Pastga",

    'invite.tag':          "HURMATLI AZIZ MEHMONIMIZ!",
    'invite.title':        "Sizni hayotimizdagi eng baxtiyor kun nikoh to'yimizga taklif etamiz",
    'invite.text':         "Qalbimiz to'la quvonch va minnatdorlik bilan, sizni muhabbatimiz bayramiga taklif etamiz. Ushbu kechamizda sizni ko'rishdan mamnun bo'lamiz!",
    'invite.sign':         "— Sanjar va Marjona oilalari",

    'details.tag':         "Kecha tafsilotlari",
    'details.title':       "To'y Marosimlari",
    'details.date.label':  "Sana",
    'details.time.label':  "Soat",
    'details.venue.label': "Manzil",

    'event1.badge':        "QIZ BAZMI",
    'event1.title':        "«OQ SAROY» To'yxonasi",
    'event1.date':         "16 Oktyabr, 2026 (Juma)",
    'event1.time':         "17:00",
    'event1.venue':        "«OQ SAROY» To'yxonasi",
    'event1.note':         "«Ushbu kechamizda sizni ko'rishdan mamnun bo'lamiz!»",

    'event2.badge':        "NIKOH BAZMI",
    'event2.title':        "«ANGREN LAND» To'yxonasi",
    'event2.date':         "18 Oktyabr, 2026 (Yakshanba)",
    'event2.time':         "17:00",
    'event2.venue':        "«ANGREN LAND» To'yxonasi",
    'event2.note':         "«Sizni baxt oqshomimizda kutib qolamiz!»",

    'cd.label':            "To'yga qolgan vaqt",
    'cd.label.qiz':        "Qiz bazmiga qolgan vaqt (16-Okt)",
    'cd.label.nikoh':      "Nikoh bazmiga qolgan vaqt (18-Okt)",
    'cd.tab.qiz':          "Qiz Bazmi (16-Okt)",
    'cd.tab.nikoh':        "Nikoh Bazmi (18-Okt)",
    'cd.days':             "Kun",
    'cd.hours':            "Soat",
    'cd.mins':             "Daqiqa",
    'cd.secs':             "Soniya",

    'story.tag':           "Sevgi Tariximiz",
    'story.title':         "Birga bosib o'tgan yo'llar",
    'story.1':             "Birinchi uchrashuv — birinchi qarash, birinchi tabassum. Qalblarimiz bir-birini tanidi.",
    'story.2':             "U tiz cho'kdi va hayotining eng muhim savolini berdi. Javob — «Ha!»",
    'story.3':             "Bugun — eng baxtli kun. Sanjar va Marjona bitta yangi hayotni boshlaydi.",

    'map.tag':             "To'yxonalar manzili",
    'map.title':           "To'yxonalarimiz Joylashuvi",
    'map.desc':            "Qiz bazmi va Nikoh to'yimiz o'tkaziladigan to'yxonalar",
    'map.btn':             "Xaritada ko'rish →",
    'map.venue1.name':     "«OQ SAROY» To'yxonasi",
    'map.venue1.sub':      "Angren shahri · 16 Oktyabr · 17:00",
    'map.venue2.name':     "«ANGREN LAND» To'yxonasi",
    'map.venue2.sub':      "Angren shahri · 18 Oktyabr · 17:00",

    'rsvp.sub':            "Javobingiz bizga muhim",
    'rsvp.deadline':       "Iltimos, 10 Oktyabr 2026 gacha javob bering",
    'rsvp.name.ph':        "Ismingiz va familiyangiz",
    'rsvp.phone.ph':       "Telefon raqamingiz",
    'rsvp.guests':         "Mehmonlar soni",
    'rsvp.attend.q':       "Qaysi marosimga tashrif buyurasiz?",
    'rsvp.both':           "Har ikkalasiga (16 & 18 Okt)",
    'rsvp.nikoh':          "Nikoh bazmi (18-Okt)",
    'rsvp.qiz':            "Qiz bazmi (16-Okt)",
    'rsvp.no':             "Kela olmayman",
    'rsvp.msg.ph':         "Tabrik xabaringizni qoldiring...",
    'rsvp.btn':            "Yuborish",

    'intro.text':          "Taklifnomani ochish uchun bosing",
    'intro.btn':           "Ochish",

    'rsvp.ok.yes':         "Rahmat, {name}! Javobingiz qabul qilindi. Sizni ko'rishdan xursand bo'lamiz!",
    'rsvp.ok.no':          "Rahmat, {name}! Javobingiz qabul qilindi. Sog'-salomat bo'ling!",
    'rsvp.err.name':       "✦ Iltimos, ismingizni kiriting.",
    'rsvp.err.phone':      "✦ Iltimos, telefon raqamingizni kiriting.",
    'rsvp.loading':        "✦ Yuborilmoqda...",

    'wishes.tag':          "Tabriklar",
    'wishes.title':        "Mehmonlarning tilaklari",

    'info.dress.title':    "Kiyinish tartibi",
    'info.dress.desc':     "Rasmiy kiyim<br/><em style=\"font-size:13px;color:var(--rose)\">Oq, zangori, pushti</em>",
    'info.gift.title':     "To'yona",
    'info.gift.desc':      "Eng yaxshi sovg'a — sizning tashrif buyurishingiz. Pullik sovg'a ham qabul qilinadi.",
    'info.park.title':     "To'xtash joyi",
    'info.park.desc':      "To'yxona oldida bepul avtoturargoh mavjud. Valet xizmati ko'rsatiladi.",

        'gallery.tag':         "Fotogalereya",
    'gallery.title':       "Bizning Baxtli Lahzalarimiz",
    'gallery.desc':        "Birga yozilayotgan go'zal muhabbat qissasi",
    'gallery.cap1':        "Cheksiz Muhabbat",
    'gallery.cap2':        "Baxt Oqshomi",
    'gallery.cap3':        "Bir Umr Birga",
    'gallery.cap4':        "Nikoh Muborak",
    'gallery.hint':        "Kattalashtirish uchun bosing",

    'footer.quote':        "«Va U ular orasiga mehr va rahm qo'ydi.» — Quron 30:21",
  },

  ru: {
    'intro.text':          "Нажмите, чтобы открыть приглашение",
    'intro.btn':           "Открыть",

    'hero.tag':            "Свадебное Приглашение",
    'hero.month':          "Октябрь",
    'hero.year':           "2026 · Кыз Базми & Никох",
    'hero.scroll':         "Листать",

    'invite.tag':          "ДОРОГОЙ НАШ ГОСТЬ!",
    'invite.title':        "Приглашаем вас на самый счастливый день в нашей жизни — день нашей свадьбы",
    'invite.text':         "С радостью и благодарностью в сердце приглашаем вас на наше свадебное торжество. Будем искренне рады видеть вас на нашем празднике!",
    'invite.sign':         "— Семьи Санжара и Маржоны",

    'details.tag':         "Детали торжества",
    'details.title':       "Свадебные Торжества",
    'details.date.label':  "Дата",
    'details.time.label':  "Время",
    'details.venue.label': "Место",

    'event1.badge':        "КЫЗ БАЗМИ",
    'event1.title':        "Банкетный зал «OQ SAROY»",
    'event1.date':         "16 Октября 2026 · Пятница",
    'event1.time':         "17:00",
    'event1.venue':        "Банкетный зал «OQ SAROY»",
    'event1.note':         "«Будем искренне рады видеть вас на этом вечере!»",

    'event2.badge':        "НИКОХ БАЗМИ",
    'event2.title':        "Банкетный зал «ANGREN LAND»",
    'event2.date':         "18 Октября 2026 · Воскресенье",
    'event2.time':         "17:00",
    'event2.venue':        "Банкетный зал «ANGREN LAND»",
    'event2.note':         "«С нетерпением ждем вас на нашем торжестве!»",

    'cd.label':            "До свадьбы осталось",
    'cd.label.qiz':        "До Кыз базми осталось (16 Окт)",
    'cd.label.nikoh':      "До Никох базми осталось (18 Окт)",
    'cd.tab.qiz':          "Кыз Базми (16 Окт)",
    'cd.tab.nikoh':        "Никох Базми (18 Окт)",
    'cd.days':             "Дней",
    'cd.hours':            "Часов",
    'cd.mins':             "Минут",
    'cd.secs':             "Секунд",

    'story.tag':           "История нашей любви",
    'story.title':         "Путь, пройденный вместе",
    'story.1':             "Первая встреча — первый взгляд, первая улыбка. Наши сердца узнали друг друга.",
    'story.2':             "Он встал на колено и задал самый важный вопрос в своей жизни. Ответ — «Да!»",
    'story.3':             "Сегодня — самый счастливый день. Санжар и Маржона начинают одну общую жизнь.",

    'map.tag':             "Места проведения",
    'map.title':           "Адреса Банкетных Залов",
    'map.desc':            "Банкетные залы для Кыз базми и Свадебного вечера",
    'map.btn':             "Показать на карте →",
    'map.venue1.name':     "Банкетный зал «OQ SAROY»",
    'map.venue1.sub':      "г. Ангрен · 16 Октября · 17:00",
    'map.venue2.name':     "Банкетный зал «ANGREN LAND»",
    'map.venue2.sub':      "г. Ангрен · 18 Октября · 17:00",

    'rsvp.sub':            "Ваш ответ важен для нас",
    'rsvp.deadline':       "Пожалуйста, ответьте до 10 Октября 2026",
    'rsvp.name.ph':        "Ваше имя и фамилия",
    'rsvp.phone.ph':       "Ваш номер телефона",
    'rsvp.guests':         "Количество гостей",
    'rsvp.attend.q':       "Какое торжество вы посетите?",
    'rsvp.both':           "Оба торжества (16 и 18 Окт)",
    'rsvp.nikoh':          "Никох базми (18 Окт)",
    'rsvp.qiz':            "Кыз базми (16 Окт)",
    'rsvp.no':             "К сожалению, не смогу",
    'rsvp.msg.ph':         "Оставьте пожелание молодым...",
    'rsvp.btn':            "Отправить",

    'rsvp.ok.yes':         "Спасибо, {name}! Ответ получен. Будем рады вас видеть!",
    'rsvp.ok.no':          "Спасибо, {name}! Ответ получен. Будьте здоровы!",
    'rsvp.err.name':       "✦ Пожалуйста, введите ваше имя.",
    'rsvp.err.phone':      "✦ Пожалуйста, введите номер телефона.",
    'rsvp.loading':        "✦ Отправляется...",

    'wishes.tag':          "Поздравления",
    'wishes.title':        "Пожелания гостей",

    'info.dress.title':    "Дресс-код",
    'info.dress.desc':     "Официальный наряд<br/><em style=\"font-size:13px;color:var(--rose)\">Белый, синий, розовый</em>",
    'info.gift.title':     "To'yona",
    'info.gift.desc':      "Лучший подарок — ваше присутствие. Денежный подарок также приветствуется.",
    'info.park.title':     "Парковка",
    'info.park.desc':      "Бесплатная парковка у банкетного зала. Предусмотрен услуга парковщика.",

        'gallery.tag':         "Фотогалерея",
    'gallery.title':       "Наши Счастливые Мгновения",
    'gallery.desc':        "Прекрасная история любви, которую мы пишем вместе",
    'gallery.cap1':        "Бесконечная Любовь",
    'gallery.cap2':        "Праздничный Вечер",
    'gallery.cap3':        "Вместе Навсегда",
    'gallery.cap4':        "С Днём Свадьбы",
    'gallery.hint':        "Нажмите для увеличения",

    'footer.quote':        "«И Он установил между вами любовь и милосердие.» — Коран 30:21",
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

  // Update active countdown title
  const cdTitleEl = document.getElementById('cd-title');
  if (cdTitleEl) {
    const labelKey = currentCdTarget === 'qiz' ? 'cd.label.qiz' : 'cd.label.nikoh';
    cdTitleEl.textContent = T[lang][labelKey] || T[lang]['cd.label'];
  }
}

// ─── COUNTDOWN TARGET SWITCH ─────────────────
function setCountdownTarget(target) {
  currentCdTarget = target;
  document.querySelectorAll('.cd-tab').forEach(tab => {
    tab.classList.toggle('active', tab.id === 'tab-' + target);
  });
  const labelKey = target === 'qiz' ? 'cd.label.qiz' : 'cd.label.nikoh';
  const labelEl = document.getElementById('cd-title');
  if (labelEl && T[currentLang] && T[currentLang][labelKey]) {
    labelEl.textContent = T[currentLang][labelKey];
  }
  updateCountdown();
}

// ─── COUNTDOWN ───────────────────────────────
function updateCountdown() {
  const targetDate = DATES[currentCdTarget] || DATES.nikoh;
  const diff = targetDate - new Date();
  if (diff <= 0) {
    ['cd-days','cd-hours','cd-mins','cd-secs'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = '00';
    });
    return;
  }
  const days  = Math.floor(diff / 864e5);
  const hours = Math.floor((diff % 864e5) / 36e5);
  const mins  = Math.floor((diff % 36e5)  / 6e4);
  const secs  = Math.floor((diff % 6e4)   / 1e3);
  const elD = document.getElementById('cd-days');
  const elH = document.getElementById('cd-hours');
  const elM = document.getElementById('cd-mins');
  const elS = document.getElementById('cd-secs');
  if (elD) elD.textContent = String(days).padStart(2,'0');
  if (elH) elH.textContent = String(hours).padStart(2,'0');
  if (elM) elM.textContent = String(mins).padStart(2,'0');
  if (elS) elS.textContent = String(secs).padStart(2,'0');
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

  const attend = checked ? checked.value : 'both';

  setTimeout(() => {
    const tmpl = attend !== 'no' ? T[lang]['rsvp.ok.yes'] : T[lang]['rsvp.ok.no'];
    showStatus(statusEl, 'success', tmpl.replace('{name}', name));

    if (attend !== 'no' && msg) addWishCard(name, `«${msg}»`);

    document.getElementById('rsvp-name').value  = '';
    document.getElementById('rsvp-phone').value = '';
    document.getElementById('rsvp-msg').value   = '';
    guestCount = 1;
    document.getElementById('guest-count').textContent = '1';
    const bothRadio = document.querySelector('input[name="attendance"][value="both"]');
    if (bothRadio) bothRadio.checked = true;
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

// ─── LIGHTBOX MODAL ─────────────────────────
function openLightbox(src) {
  const modal = document.getElementById('lightbox-modal');
  const img   = document.getElementById('lightbox-img');
  if (modal && img) {
    img.src = src;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeLightbox() {
  const modal = document.getElementById('lightbox-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// ─── INIT & AUTOPLAY ─────────────────────────
// Set default language on load (UZ)
setLang('uz');

// Start the invitation when user clicks "Open"
function openInvitation() {
  const overlay = document.getElementById('intro-overlay');
  overlay.classList.add('hidden');
  document.body.style.overflow = ''; // Restore scrolling
  
  // Now we have explicit user interaction, so audio will play 100% of the time
  if (!musicPlaying) {
    toggleMusic();
  }
}

// Still attempt to autoplay immediately for browsers that allow it
function tryAutoplay() {
  if (!bgMusic || musicPlaying) return;
  bgMusic.play().then(() => {
    musicPlaying = true;
    document.getElementById('musicBtn').classList.add('playing');
    document.getElementById('music-icon-play').style.display = 'none';
    document.getElementById('music-icon-pause').style.display = '';
  }).catch((e) => {
    console.log("Browser blocked immediate autoplay.");
  });
}
tryAutoplay();
