// ===== MARQUEE =====
function initMarquee() {
  console.log('🔄 Marquee initialized!');
  
  const marquee = document.querySelector('.marquee-track');
  if (marquee) {
    // Pause animation on hover (already in CSS)
    // Optional: tambah efek smooth
    console.log('✅ Marquee ready!');
  }
}

// Jalankan saat DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMarquee);
} else {
  initMarquee();
}