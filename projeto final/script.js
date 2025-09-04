  const carrosselSlide = document.getElementById('carrosselSlide');
  const totalSlides = 5;
  let slideAtual = 0;

  function mudarSlide(direcao) {
    slideAtual += direcao;
    if (slideAtual < 0) slideAtual = totalSlides - 1;
    if (slideAtual >= totalSlides) slideAtual = 0;
    carrosselSlide.style.transform = `translateX(-${slideAtual * 20}%)`;
  }
