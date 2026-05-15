// =============================================
// TIENDA 3D - Scripts
// =============================================

document.addEventListener('DOMContentLoaded', () => {

  // ── Navbar scroll effect ──
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.padding = '0.6rem 0';
    } else {
      navbar.style.padding = '1rem 0';
    }
  });

  // ── Animación fade-up con IntersectionObserver ──
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // ── Delay escalonado para tarjetas de productos ──
  document.querySelectorAll('.product-card-wrapper').forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.1}s`;
  });

  // ── Formulario de contacto ──
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      btn.textContent = '✓ Mensaje enviado';
      btn.style.background = '#1db954';
      btn.style.boxShadow = '0 0 20px rgba(29, 185, 84, 0.3)';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = 'Enviar Mensaje';
        btn.style.background = '';
        btn.style.boxShadow = '';
        btn.disabled = false;
        contactForm.reset();
      }, 3000);
    });
  }

  // ── Botones "Cotizar" ──
  document.querySelectorAll('.btn-cotizar').forEach(btn => {
    btn.addEventListener('click', () => {
      const productName = btn.closest('.product-card').querySelector('.product-name').textContent;
      const contactSection = document.getElementById('contacto');
      const messageField = document.getElementById('mensaje');
      if (contactSection && messageField) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          messageField.value = `Hola, me interesa cotizar el producto: ${productName}`;
          messageField.focus();
        }, 600);
      }
    });
  });

  // ── Smooth scroll para links del navbar ──
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        // Cerrar menú móvil si está abierto
        const navCollapse = document.querySelector('.navbar-collapse');
        if (navCollapse && navCollapse.classList.contains('show')) {
          navCollapse.classList.remove('show');
        }
      }
    });
  });

});
