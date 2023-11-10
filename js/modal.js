const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');


const togleModal = () => modal.classList.toggle('is-hidden');

modalBtnOpen.addEventListener('click', togleModal);
modalBtnClose.addEventListener('click', togleModal);


const togleBody = () => body.classList.toggle('noscroll');

modalBtnOpen.addEventListener('click', togleBody);
modalBtnClose.addEventListener('click', togleBody);
