// ===== BADGE TYPING EFFECT =====
function initAbout() {
  const badgeText = document.getElementById('badgeText');
  if (!badgeText) return;

  const words = ['available for internship', 'available for internship', 'available for internship'];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeBadge() {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
      badgeText.textContent = currentWord.slice(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeBadge, 2000);
        return;
      }
    } else {
      badgeText.textContent = currentWord.slice(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeBadge, 500);
        return;
      }
    }

    setTimeout(typeBadge, isDeleting ? 60 : 100);
  }

  setTimeout(typeBadge, 1000);
}

// ===== AOS INIT =====
function initAOS() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'cubic-bezier(0.77, 0, 0.175, 1)',
      once: true,
      offset: 60
    });
  }
}

// Jalankan saat DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initAbout();
    initAOS();
  });
} else {
  initAbout();
  initAOS();
}