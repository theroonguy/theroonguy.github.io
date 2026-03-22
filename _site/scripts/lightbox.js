(function() {
  const modal = document.getElementById('lightbox');
  const modalImg = document.getElementById('lightboxImg');
  if (!modal || !modalImg) return;

  const closeBtn = modal.querySelector('.lightbox__close');

  function openLightbox(fullSrc, altText) {
    modalImg.src = fullSrc;
    modalImg.alt = altText || '';
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    modalImg.src = '';
    document.body.style.overflow = '';
  }

  document.addEventListener('click', (e) => {
    const img = e.target.closest('img.lightboxable');
    if (!img) return;
    const full = img.src;
    openLightbox(full, img.alt);
  });

  closeBtn?.addEventListener('click', closeLightbox);

  // click outside the image closes
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeLightbox();
  });

  // Esc closes
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) closeLightbox();
  });
})();
