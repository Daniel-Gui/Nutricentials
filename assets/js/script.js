ScrollReveal().reveal('.inicio', { delay: 200, distance: '50px' });
ScrollReveal().reveal('.header-hero-img', { delay: 300, distance: '50px' });
ScrollReveal().reveal('.btn-saibamais', { delay: 500, scale: 0.85 });
ScrollReveal().reveal('.Header-Produtos', { delay: 500, scale: 0.85 });
ScrollReveal().reveal('.produtos', { delay: 1000, distance: '50px' });
ScrollReveal().reveal('.selo', { delay: 1500, scale: 0.85 });

const accordion = document.getElementsByClassName('container-acc');
for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}