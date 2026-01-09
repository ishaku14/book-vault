const cartContainerElm = document.querySelector('.js-cart-container');
const cartButtonElm = document.querySelector('.js-cart-button');
const cartBackElm = document.querySelector('.js-cart-back');

let scrollY = 0;

function lockBodyScroll() {
  scrollY = window.scrollY;

  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollY}px`;
  document.body.style.width = '100%';
}

function unlockBodyScroll() {
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';

  window.scrollTo(0, scrollY);
}

function openCart() {
  lockBodyScroll();
  cartContainerElm.classList.toggle('open');
  document.body.classList.add('cart-container-open');
}

function closeCart() {
  unlockBodyScroll();
  cartContainerElm.classList.remove('open');
  document.body.classList.remove('cart-container-open');
}

cartButtonElm.addEventListener('click', openCart);
cartBackElm.addEventListener('click', closeCart);