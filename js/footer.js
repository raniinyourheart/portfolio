// ===== FOOTER =====
function initFooter() {
  console.log('🔄 Footer initialized!');
  
  // Update tahun otomatis
  const yearSpan = document.getElementById('footerYear');
  if (yearSpan) {
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = `© ${currentYear} Lintang Maharani`;
  }

  // Tambahan efek hover pada footer
  const footer = document.querySelector('footer');
  if (footer) {
    footer.addEventListener('mouseenter', function() {
      this.style.transition = 'border-color 0.3s ease';
      this.style.borderTopColor = 'rgba(0, 255, 235, 0.15)';
    });
    
    footer.addEventListener('mouseleave', function() {
      this.style.borderTopColor = 'rgba(0, 255, 235, 0.06)';
    });
  }

  console.log('✅ Footer ready!');
}

// Jalankan saat DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initFooter);
} else {
  initFooter();
}