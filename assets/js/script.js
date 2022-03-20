window.sr = ScrollReveal({reset: true});
sr.reveal('.inicio', { delay: 200, distance: '50px' });
sr.reveal('.header-hero-img', { delay: 300, distance: '50px' });
sr.reveal('.btn-saibamais', { delay: 500, scale: 0.85 });
sr.reveal('.Header-Produtos', { delay: 500, scale: 0.85 });
sr.reveal('.produtos', { delay: 1000, distance: '50px' });
sr.reveal('.selo', { delay: 1500, scale: 0.85 });
sr.reveal('.perguntas', { delay: 1000, distance: '50px' });


const accordion = document.getElementsByClassName('container-acc');
for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}