// ===== PROJECTS TOGGLE =====
function initProjects() {
  console.log('🔄 initProjects dipanggil!');
  
  const showMoreBtn = document.getElementById('showMoreBtn');
  const btnText = document.getElementById('btnText');
  const btnIcon = document.getElementById('btnIcon');
  
  if (!showMoreBtn) {
    console.log('❌ Tombol tidak ditemukan!');
    return;
  }

  console.log('✅ Tombol ditemukan!');

  // Ambil SEMUA project
  const allProjects = document.querySelectorAll('.project-item');
  console.log(`📦 Total project: ${allProjects.length}`);

  // Default: semua visible
  let isExpanded = true;

  showMoreBtn.addEventListener('click', function(e) {
    e.preventDefault();
    isExpanded = !isExpanded;
    console.log(`🔄 Toggle: ${isExpanded ? 'Tampilkan semua' : 'Sembunyikan sebagian'}`);

    // Project 2-6 (index 1-5) di-toggle
    allProjects.forEach((project, index) => {
      if (index === 0) return; // Skip project 1
      
      if (isExpanded) {
        project.style.display = 'grid';
        project.style.opacity = '0';
        project.style.animation = 'none';
        // Force reflow
        void project.offsetHeight;
        project.style.animation = `fadeUp 0.8s ease ${(index - 1) * 0.15}s forwards`;
      } else {
        project.style.display = 'none';
        project.style.animation = 'none';
      }
    });

    if (isExpanded) {
      btnText.textContent = 'Sembunyikan Project';
      btnIcon.className = 'fas fa-chevron-up';
    } else {
      btnText.textContent = 'Lihat 5 Project Lainnya';
      btnIcon.className = 'fas fa-chevron-down';
    }
  });

  console.log('✅ Projects initialized!');
}

// Jalankan
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initProjects, 300);
  });
} else {
  setTimeout(initProjects, 300);
}