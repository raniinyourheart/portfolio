// ===== CONTACT SECTION =====
function initContact() {
  console.log('🔄 Contact initialized!');
  
  const emailLink = document.querySelector('.email-link');
  if (emailLink) {
    emailLink.addEventListener('click', function(e) {
      console.log('📧 Email link clicked!');
    });
  }

  const socialLinks = document.querySelectorAll('.social-link');
  socialLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
      const icon = this.querySelector('i');
      const text = this.querySelector('span');
      if (icon) {
        icon.style.transition = 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
      }
      if (text) {
        text.style.transition = 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
      }
    });
  });

  console.log('✅ Contact ready!');
}

// Jalankan saat DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initContact);
} else {
  initContact();
}