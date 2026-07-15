/**
 * O'zbek Milliy To'y Taklifnomasi - JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {

  // --- Elements ---
  const openInviteBtn = document.getElementById('openInviteBtn');
  const mandalaSeal = document.getElementById('mandalaSeal');
  const mandalaSealContainer = document.querySelector('.mandala-seal-container');
  const introSection = document.getElementById('introSection');
  const invitation = document.getElementById('invitation');
  
  const bgMusic = document.getElementById('bgMusic');
  const musicBtn = document.getElementById('musicBtn');
  
  const langBtns = document.querySelectorAll('.lang-btn');
  const translatableElements = document.querySelectorAll('[data-uz][data-ru]');
  
  let isPlaying = false;
  let hasOpened = false;

  // --- Translations ---
  function setLanguage(lang) {
    langBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    translatableElements.forEach(el => {
      if (el.dataset[lang]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = el.dataset[lang];
        } else {
          el.innerHTML = el.dataset[lang];
        }
      }
    });
    document.documentElement.lang = lang;
  }

  langBtns.forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  // --- Music Toggle ---
  function toggleMusic() {
    if (isPlaying) {
      bgMusic.pause();
      musicBtn.classList.remove('playing');
    } else {
      bgMusic.play().then(() => {
        musicBtn.classList.add('playing');
      }).catch(e => console.log('Autoplay prevented:', e));
    }
    isPlaying = !isPlaying;
  }

  musicBtn.addEventListener('click', toggleMusic);

  // --- Taklifnoma Opening Animation ---
  openInviteBtn.addEventListener('click', () => {
    if (hasOpened) return;
    hasOpened = true;
    
    // Hide button
    openInviteBtn.classList.add('hidden');
    
    // Play music (User Interaction allows autoplay)
    if (!isPlaying) {
      bgMusic.play().then(() => {
        isPlaying = true;
        musicBtn.classList.add('playing');
      }).catch(e => console.log(e));
    }

    // Trigger mandala open animation
    mandalaSeal.classList.add('opened');
    mandalaSealContainer.classList.add('opened');
    
    // Wait for animation to finish, then fade out intro
    setTimeout(() => {
      introSection.style.opacity = '0';
      
      // Show main invitation
      setTimeout(() => {
        introSection.style.visibility = 'hidden';
        introSection.style.display = 'none';
        
        invitation.style.display = 'block';
        initScrollReveal();
        initParallax();
        initKelinSalomPetals();
      }, 1500);
      
    }, 2000);
  });

  // --- Scroll Reveal ---
  function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
    
    function checkReveal() {
      reveals.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
          el.classList.add('active');
        }
      });
    }
    
    window.addEventListener('scroll', checkReveal);
    checkReveal(); // Trigger on load
  }

  // --- Parallax Effect ---
  function initParallax() {
    const atlasBg = document.querySelector('.atlas-bg');
    window.addEventListener('scroll', () => {
      if (atlasBg) {
        let scroll = window.scrollY;
        atlasBg.style.transform = `translateY(${scroll * 0.4}px)`;
      }
    });
  }

  // --- Kelin Salom Petals Animation ---
  function initKelinSalomPetals() {
    const container = document.getElementById('petalsContainer');
    if (!container) return;
    
    const petalCount = 15;
    for (let i = 0; i < petalCount; i++) {
      let petal = document.createElement('img');
      petal.src = 'assets/petal.png';
      petal.classList.add('petal');
      
      // Randomize position, size, and animation duration
      petal.style.left = Math.random() * 100 + '%';
      petal.style.width = (15 + Math.random() * 20) + 'px';
      petal.style.animationDuration = (3 + Math.random() * 4) + 's';
      petal.style.animationDelay = (Math.random() * 5) + 's';
      
      container.appendChild(petal);
    }
  }

  // --- Countdown Timer ---
  const nikohDate = new Date("2026-08-25T18:00:00").getTime();
  
  function updateCountdown() {
    const now = new Date().getTime();
    const distance = nikohDate - now;
    
    if (distance < 0) {
      document.querySelector('.timer').innerHTML = '<h3 style="font-family: var(--font-title); font-size: 2rem; color: var(--atlas-gold);">To\'y boshlandi! / Свадьба началась!</h3>';
      return;
    }
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("days").innerText = days.toString().padStart(2, '0');
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("mins").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("secs").innerText = seconds.toString().padStart(2, '0');
  }
  
  setInterval(updateCountdown, 1000);
  updateCountdown();

  // ---------------------------------------------------------
  // 6. COPY TO'YONA CARD NUMBER
  // ---------------------------------------------------------
  const copyBtn = document.getElementById('copyBtn');
  const cardNumber = document.getElementById('cardNumber');

  if (copyBtn && cardNumber) {
    copyBtn.addEventListener('click', () => {
      // Remove spaces for copying
      const numToCopy = cardNumber.innerText.replace(/\s+/g, '');
      
      navigator.clipboard.writeText(numToCopy).then(() => {
        const originalHtml = copyBtn.innerHTML;
        copyBtn.innerHTML = `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="copy-icon"><polyline points="20 6 9 17 4 12"></polyline></svg> <span data-uz="Nusxa olindi!" data-ru="Скопировано!">Nusxa olindi!</span>`;
        
        setTimeout(() => {
          copyBtn.innerHTML = originalHtml;
          updateLanguage(); // re-apply language if needed, but originalHtml is fine
        }, 2000);
      }).catch(err => {
        console.error('Failed to copy text: ', err);
      });
    });
  }

});
