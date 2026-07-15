document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Language Toggle Logic
    const langUzBtn = document.getElementById('lang-uz');
    const langRuBtn = document.getElementById('lang-ru');
    
    // Check local storage for preferred language, default to UZ
    let currentLang = localStorage.getItem('language') || 'uz';
    setLanguage(currentLang);

    langUzBtn.addEventListener('click', () => setLanguage('uz'));
    langRuBtn.addEventListener('click', () => setLanguage('ru'));

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('language', lang);
        
        // Update document language
        document.documentElement.lang = lang;

        // Update active class on buttons
        if (lang === 'uz') {
            langUzBtn.classList.add('active');
            langRuBtn.classList.remove('active');
        } else {
            langRuBtn.classList.add('active');
            langUzBtn.classList.remove('active');
        }

        // Update all text elements
        const elements = document.querySelectorAll('[data-uz][data-ru]');
        elements.forEach(el => {
            el.textContent = el.getAttribute(`data-${lang}`);
        });
        
        // Update document title
        const titleEl = document.querySelector('title');
        if (titleEl) {
            titleEl.textContent = titleEl.getAttribute(`data-${lang}`);
        }
    }
});
