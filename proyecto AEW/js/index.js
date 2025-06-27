
  // Observa SOLO el logo principal grande
  const mainLogo = document.querySelector('.hover-img');
  const navbar = document.querySelector('.navbar');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Logo grande visible: oculta logo barra
        navbar.classList.remove('scrolled');
      } else {
        // Logo grande NO visible: muestra logo barra
        navbar.classList.add('scrolled');
      }
    });
  }, {
    threshold: 0  // Detecta apenas entra o sale
  });

  observer.observe(mainLogo);

  const images = [
    'img/bg1.jpg',
    'img/bg2.jpg',
    'img/bg3.jpg'
  ];

  let current = 0;

  setInterval(() => {
    current = (current + 1) % images.length;
    document.body.style.backgroundImage = `url('${images[current]}')`;
  }, 8000);


