// ======= HOME SECTION =======
function initHome() {
  console.log('🏠 Home section loaded!');

  // ======= TYPED ROLE =======
  const roles = ['Laravel & Vue Dev_', 'Full Stack Developer_', 'UI/UX Enthusiast_', 'AI & ML Explorer_', 'Creative Coder_', 'Web Developer_'];
  let rIdx = 0, cIdx = 0, del = false;
  const typedEl = document.getElementById('typed-role');
  
  if (!typedEl) {
    console.log('⚠️ Element #typed-role tidak ditemukan!');
    return;
  }

  const typeRole = () => {
    const cur = roles[rIdx];
    if (!del) {
      typedEl.textContent = cur.slice(0, ++cIdx);
      if (cIdx === cur.length) {
        del = true;
        setTimeout(typeRole, 1800);
        return;
      }
    } else {
      typedEl.textContent = cur.slice(0, --cIdx);
      if (cIdx === 0) {
        del = false;
        rIdx = (rIdx + 1) % roles.length;
      }
    }
    setTimeout(typeRole, del ? 45 : 80);
  };
  typeRole();

  // ======= HERO ENTRANCE ANIMATION =======
  const heroElements = document.querySelectorAll('.hero-eyebrow, .hero-title, .hero-role, .hero-desc, .hero-cta, .hero-visual');
  heroElements.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.8s ease ${i * 0.12 + 0.2}s, transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 0.12 + 0.2}s`;
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 100);
  });

  // ======= MAGNETIC + TILT + FLOAT COMBO =======
  const codeWrapper = document.getElementById('codeWrapper');
  const codeInner = document.getElementById('codeInner');

  if (codeWrapper && codeInner) {
    codeWrapper.addEventListener('mousemove', (e) => {
      const rect = codeWrapper.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;
      const moveX = ((x - centerX) / centerX) * 6;
      const moveY = ((y - centerY) / centerY) * 6;
      
      codeInner.style.animation = 'none';
      codeInner.classList.add('magnetic');
      codeInner.style.transform = `
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg) 
        translateX(${moveX}px) 
        translateY(${moveY}px)
      `;
    });

    codeWrapper.addEventListener('mouseleave', () => {
      codeInner.classList.remove('magnetic');
      codeInner.style.transform = 'rotateX(0deg) rotateY(0deg) translateX(0px) translateY(0px)';
      codeInner.style.transition = 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
      setTimeout(() => {
        codeInner.style.animation = 'floatBlock 4s ease-in-out infinite';
      }, 700);
    });

    codeWrapper.addEventListener('mouseenter', () => {
      codeInner.style.transition = 'transform 0.1s ease';
      codeInner.style.animation = 'none';
    });
  }
}

// Jalankan otomatis jika DOM sudah siap
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initHome, 300);
  });
} else {
  setTimeout(initHome, 300);
}

console.log('✅ home.js loaded!');