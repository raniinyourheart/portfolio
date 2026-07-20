// ===== COUNTER ANIMATION =====
function animateCounter(el, target) {
  let current = 0;
  const step = target / 40;
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = Math.floor(current);
    if (current >= target) {
      clearInterval(timer);
      el.textContent = target;
    }
  }, 35);
}

function initIntroCard() {
  const statsBand = document.getElementById('statsBand');
  if (!statsBand) return;

  const statsObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.stat-num').forEach(num => {
          const target = parseInt(num.dataset.target);
          animateCounter(num, target);
        });
        statsObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  statsObs.observe(statsBand);
}

// Jalankan saat DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initIntroCard);
} else {
  initIntroCard();
}