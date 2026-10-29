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
