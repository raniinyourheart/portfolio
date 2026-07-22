// ======= INTRO CARD / STATS BAND =======
function initIntroCard() {
  console.log('📊 Intro Card loaded!');

  // ======= COUNTER ANIMATION =======
  function animateCounter(el, target) {
    let current = 0;
    const step = target / 40;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = Math.floor(current);
      if (current >= target) {
        clearInterval(timer);
        el.textContent = target; // Pastikan angka akhir pas
      }
    }, 35);
  }

  // ======= INTERSECTION OBSERVER =======
  const statsBand = document.getElementById('statsBand');
  
  if (!statsBand) {
    console.log('⚠️ Element #statsBand tidak ditemukan!');
    return;
  }

  const statsObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log('📊 Stats band visible, starting counter!');
        const allNumbers = document.querySelectorAll('.stat-num');
        allNumbers.forEach(num => {
          const target = parseInt(num.dataset.target);
          if (!isNaN(target) && target > 0) {
            animateCounter(num, target);
          }
        });
        statsObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  // Mulai observe
  statsObs.observe(statsBand);
}

// Jalankan otomatis jika DOM sudah siap
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initIntroCard, 300);
  });
} else {
  setTimeout(initIntroCard, 300);
}

console.log('✅ intro-card.js loaded!');