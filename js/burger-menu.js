const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnClose = document.querySelector('.menu-btn-close');
const menuLinks = document.querySelectorAll('.link');
const body = document.querySelector('body');

menuBtnOpen.addEventListener('click', (e) => {
    e.preventDefault()
  mobileMenu.classList.toggle('is-open');
  body.classList.toggle('noscroll');
});

menuBtnClose.addEventListener('click', (e) => {
    e.preventDefault()
  mobileMenu.classList.remove('is-open');
  body.classList.remove('noscroll');
});



menuLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    mobileMenu.classList.remove('is-open');
    body.classList.remove('noscroll');
  });
});