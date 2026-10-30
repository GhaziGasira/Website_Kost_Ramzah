/**
 * ============================================================================
 * JAVASCRIPT WEBSITE KOST RAMZAH
 * Logika Ringan, Vanilla Murni, Bebas Ketergantungan Eksternal
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inisialisasi Hamburger Menu Navigasi di Mobile / Layar HP
  initMobileNav();

  // 2. Inisialisasi Scroll Halus untuk Tautan Navigasi
  initSmoothScroll();

  // 3. Inisialisasi Filter Kategori Galeri & Muat Bertahap
  initGalleryFilter();

  // 4. Inisialisasi Modal Lightbox Foto Layar Penuh
  initLightbox();
});

/**
 * Mengelola pembukaan dan penutupan menu navigasi di smartphone
 */
function initMobileNav() {
  const toggleBtn = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (!toggleBtn || !navMenu) return;

  // Event klik tombol hamburger
  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', String(!isExpanded));
    navMenu.setAttribute('data-open', String(!isExpanded));
  });

  // Otomatis menutup menu saat salah satu link navigasi diklik
  const navLinks = navMenu.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleBtn.setAttribute('aria-expanded', 'false');
      navMenu.setAttribute('data-open', 'false');
    });
  });

  // Menutup menu jika pengguna mengklik area luar menu di HP
  document.addEventListener('click', (event) => {
    if (!toggleBtn.contains(event.target) && !navMenu.contains(event.target)) {
      toggleBtn.setAttribute('aria-expanded', 'false');
      navMenu.setAttribute('data-open', 'false');
    }
  });
}

/**
 * Memastikan scroll navigasi halus dan presisi memperhitungkan tinggi header sticky
 */
function initSmoothScroll() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  const header = document.querySelector('.site-header');
  const headerHeight = header ? header.offsetHeight : 68;

  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight - 16; // Margin tambahan 16px

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * Mengelola filter kategori galeri foto dan tombol muat bertahap
 */
function initGalleryFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.galeri-item');
  const loadMoreBtn = document.getElementById('loadMoreGallery');
  let currentFilter = 'all';
  let isExpanded = false;
  const initialLimit = 6;

  function updateGalleryDisplay() {
    let visibleCount = 0;
    galleryItems.forEach(item => {
      const category = item.getAttribute('data-category');
      const matches = (currentFilter === 'all' || category === currentFilter);

      if (matches) {
        visibleCount++;
        if (!isExpanded && visibleCount > initialLimit) {
          item.setAttribute('data-hidden', 'true');
        } else {
          item.removeAttribute('data-hidden');
        }
      } else {
        item.setAttribute('data-hidden', 'true');
      }
    });

    // Sembunyikan tombol muat lebih banyak jika semua item yang cocok sudah tampil
    if (loadMoreBtn) {
      if (visibleCount <= initialLimit || isExpanded) {
        loadMoreBtn.style.display = 'none';
      } else {
        loadMoreBtn.style.display = 'inline-flex';
      }
    }
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter') || 'all';
      isExpanded = false; // Reset pagination saat ganti filter
      updateGalleryDisplay();
    });
  });

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      isExpanded = true;
      updateGalleryDisplay();
    });
  }

  // Tampilan awal
  updateGalleryDisplay();
}

/**
 * Mengelola Lightbox (perbesaran foto layar penuh saat diklik)
 */
function initLightbox() {
  const modal = document.getElementById('lightboxModal');
  const modalImg = document.getElementById('lightboxImg');
  const modalTitle = document.getElementById('lightboxTitle');
  const closeBtn = document.getElementById('lightboxClose');
  const galleryItems = document.querySelectorAll('.galeri-item');

  if (!modal || !modalImg || !closeBtn) return;

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const captionEl = item.querySelector('.galeri-caption-overlay span');
      const captionText = captionEl ? captionEl.textContent : item.getAttribute('data-title');

      if (img) {
        modalImg.src = img.src;
        modalImg.alt = img.alt || 'Foto Galeri Kost Ramzah';
        if (modalTitle) {
          modalTitle.textContent = captionText || '';
        }
        modal.setAttribute('data-open', 'true');
        document.body.style.overflow = 'hidden'; // Kunci scroll layar saat modal aktif
      }
    });
  });

  function closeModal() {
    modal.removeAttribute('data-open');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.getAttribute('data-open') === 'true') {
      closeModal();
    }
  });
}

