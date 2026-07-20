// ===== CERTIFICATES =====
function initCertificates() {
  console.log('🔄 Certificates initialized!');
  
  // Tambahan efek hover atau animasi kalo perlu
  const cards = document.querySelectorAll('.timeline-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transition = 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
    });
  });
}

// Jalankan saat DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCertificates);
} else {
  initCertificates();
}