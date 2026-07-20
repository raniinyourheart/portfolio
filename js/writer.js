// ===== WRITER SECTION =====
function initWriter() {
  console.log('🔄 Writer initialized!');
  
  let financeExpanded = false;

  // ===== ACTIVATE CATEGORY =====
  function activateCategory(categoryId) {
    console.log('📂 Activating category:', categoryId);
    
    // Update active class pada timeline
    const items = document.querySelectorAll('.tl-item');
    items.forEach(item => {
      item.classList.remove('active');
    });

    const selectedItem = document.querySelector(`.tl-item[data-category="${categoryId}"]`);
    if (selectedItem) {
      selectedItem.classList.add('active');
    }

    // Tampilkan card sesuai kategori
    const allCards = document.querySelectorAll('.content-card');
    const showMoreWrap = document.getElementById('financeShowMoreWrap');

    allCards.forEach(card => {
      const cardCat = card.dataset.category;
      const isExtra = card.classList.contains('extra-card');

      if (cardCat === categoryId) {
        if (isExtra) {
          // Extra cards: tampilkan hanya jika financeExpanded true
          if (financeExpanded && categoryId === 'finance') {
            card.classList.add('visible');
            card.style.display = 'block';
          } else {
            card.classList.remove('visible');
            card.style.display = 'none';
          }
        } else {
          card.classList.add('active');
          card.style.display = 'block';
          card.style.animation = 'none';
          card.offsetHeight;
          card.style.animation = 'fadeUp 0.6s ease forwards';
        }
      } else {
        card.classList.remove('active');
        card.classList.remove('visible');
        card.style.display = 'none';
      }
    });

    // Show/hide tombol "Lihat 2 Artikel Lainnya" hanya untuk Finance
    if (categoryId === 'finance') {
      if (showMoreWrap) showMoreWrap.style.display = 'flex';
    } else {
      if (showMoreWrap) showMoreWrap.style.display = 'none';
      // Reset expanded state ketika pindah kategori
      if (financeExpanded) {
        financeExpanded = false;
        const btnText = document.getElementById('financeBtnText');
        const btn = document.getElementById('financeShowMore');
        if (btnText) btnText.textContent = 'Lihat 2 Artikel Lainnya';
        if (btn) btn.classList.remove('expanded');
        document.querySelectorAll('.content-card.extra-card').forEach(card => {
          card.classList.remove('visible');
          card.style.display = 'none';
        });
      }
    }
  }

  // ===== EVENT LISTENER UNTUK TIMELINE =====
  const tlItems = document.querySelectorAll('.tl-item');
  console.log('📦 Timeline items found:', tlItems.length);
  
  tlItems.forEach((item, index) => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const category = this.dataset.category;
      console.log('🖱️ Clicked category:', category);
      activateCategory(category);
    });
  });

  // ===== SHOW MORE FINANCE =====
  const showMoreBtn = document.getElementById('financeShowMore');
  if (showMoreBtn) {
    console.log('✅ Show More button found');
    showMoreBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      financeExpanded = !financeExpanded;
      console.log('🔄 Show more toggled:', financeExpanded);
      
      const extraCards = document.querySelectorAll('.content-card.extra-card');
      const btnText = document.getElementById('financeBtnText');

      extraCards.forEach((card, i) => {
        if (financeExpanded) {
          card.classList.add('visible');
          card.style.display = 'block';
          card.style.animation = 'none';
          card.offsetHeight;
          card.style.animation = `fadeUp 0.6s ease ${i * 0.15}s forwards`;
        } else {
          card.classList.remove('visible');
          card.style.display = 'none';
        }
      });

      btnText.textContent = financeExpanded ? 'Sembunyikan Artikel' : 'Lihat 2 Artikel Lainnya';
      this.classList.toggle('expanded', financeExpanded);
    });
  } else {
    console.log('❌ Show More button NOT found');
  }

  // ===== INIT =====
  // Aktifkan Finance secara default
  console.log('🚀 Activating default category: finance');
  activateCategory('finance');
}

// Jalankan saat DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 DOM ready, initializing writer...');
    setTimeout(initWriter, 200);
  });
} else {
  console.log('📄 DOM already ready, initializing writer...');
  setTimeout(initWriter, 200);
}