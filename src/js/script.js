document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.querySelector('.menu');

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      menu.classList.toggle('open');
      menuToggle.classList.toggle('active');
    });
  }

  const galleryImages = document.querySelectorAll('.card-galeria img');
  galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => {
      openLightbox(index);
    });
  });

  function openLightbox(index) {
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    lightbox.innerHTML = `
      <div class="lightbox-content">
        <span class="close-lightbox">&times;</span>
        <img src="${galleryImages[index].src}" alt="${galleryImages[index].alt}" />
        <button class="prev">❮</button>
        <button class="next">❯</button>
      </div>
    `;
    document.body.appendChild(lightbox);

    const closeBtn = lightbox.querySelector('.close-lightbox');
    const imgTag = lightbox.querySelector('img');
    const prev = lightbox.querySelector('.prev');
    const next = lightbox.querySelector('.next');

    closeBtn.addEventListener('click', () => lightbox.remove());
    prev.addEventListener('click', (e) => {
      e.stopPropagation();
      index = (index - 1 + galleryImages.length) % galleryImages.length;
      imgTag.src = galleryImages[index].src;
      imgTag.alt = galleryImages[index].alt;
    });
    next.addEventListener('click', (e) => {
      e.stopPropagation();
      index = (index + 1) % galleryImages.length;
      imgTag.src = galleryImages[index].src;
      imgTag.alt = galleryImages[index].alt;
    });

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) lightbox.remove();
    });
  }

  const form = document.getElementById('whatsapp-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const nome = document.getElementById('nome').value;
      const email = document.getElementById('email').value;
      const mensagem = document.getElementById('mensagem').value;

      const texto = `Olá! Meu nome é ${nome}%0AEmail: ${email}%0AMensagem: ${mensagem}`;
      const url = `https://wa.me/5514981216234?text=${texto}`;
      window.location.href = url;
    });
  }
});