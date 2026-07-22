// ======= ABOUT SECTION =======
function initAbout() {
  console.log('📖 About section loaded!');

  // ======= AOS INIT =======
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'cubic-bezier(0.77, 0, 0.175, 1)',
      once: true,
      offset: 60
    });
  }

  // ======= TYPING EFFECT BADGE =======
  const badgeText = document.getElementById('badgeText');
  
  if (!badgeText) {
    console.log('⚠️ Element #badgeText tidak ditemukan!');
    return;
  }

  // Set teks awal
  badgeText.textContent = 'available for internship';

  const words = ['available for internship', 'ready to collaborate', 'open to opportunities'];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let isWaiting = false;

  function typeBadge() {
    if (isWaiting) return;

    const currentWord = words[wordIndex];

    if (!isDeleting) {
      // TYPING
      charIndex++;
      badgeText.textContent = currentWord.substring(0, charIndex);
      
      if (charIndex === currentWord.length) {
        isWaiting = true;
        setTimeout(() => {
          isWaiting = false;
          isDeleting = true;
          typeBadge();
        }, 2000);
        return;
      }
    } else {
      // DELETING
      charIndex--;
      badgeText.textContent = currentWord.substring(0, charIndex);
      
      if (charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        isWaiting = true;
        setTimeout(() => {
          isWaiting = false;
          typeBadge();
        }, 500);
        return;
      }
    }

    const speed = isDeleting ? 50 : 100;
    setTimeout(typeBadge, speed);
  }

  // Mulai setelah 1 detik
  setTimeout(typeBadge, 1000);
}

// Jalankan otomatis jika DOM sudah siap
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initAbout, 300);
  });
} else {
  setTimeout(initAbout, 300);
}

console.log('✅ about.js loaded!');