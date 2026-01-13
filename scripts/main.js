import { products } from "./data/products.js";
import { cart, addToCart, removeFromCart, renderCart, updateCartQuantity, renderCartFooter } from "./data/cart.js";
import { formatPrice } from './utils/money.js';

const cartContainerElm = document.querySelector('.js-cart-container');
const cartButtonElm = document.querySelector('.js-cart-button');
const cartBackElm = document.querySelector('.js-cart-back');

let scrollY = 0;

const state = {
  category: 'all'
}

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

const categoryRadioElms = document.querySelectorAll('input[name="category"]');

categoryRadioElms.forEach(radio => {
  radio.addEventListener('change', () => {
    if(radio.checked) {
      state.category = radio.value;
      console.log(state.category);
      renderProducts();
    }
  })
});

function renderProducts() {
  let productsHtml = '';

  let filteredProducts = products;
  if(state.category !== 'all') {
    filteredProducts = products.filter(product => {
      return product.category === state.category;
    });
  }
  console.log(filteredProducts);

  filteredProducts.forEach(product => {
    productsHtml += `
      <div class="product-card">
        <div class="product-image-container">
          <img class="product-image" src="${product.image}" alt="">
        </div>

        <div class="product-details">
          <h3 class="title">${product.title}</h3>
          <p class="author">${product.author}</p>

          <div class="price-container">
            <span class="price">${formatPrice(product.price)}</span>
            <span><img class="star-rating" src="images/icons/star-rating.png" alt="star rating image">
              ${(product.rating).toFixed(1)}</span>
          </div>

          <button class="add-to-cart-button js-add-button" data-product-id="${product.productId}">
            <img src="images/icons/cart-icon.png" alt="Cart icon image">
            Add to cart
          </button>
        </div>
      </div>
    `
  });

  document.querySelector('.js-product-container').innerHTML = productsHtml;

  document.querySelectorAll('.js-add-button').forEach(button => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;
      addToCart(productId);
      updateCartQuantity();
      renderCart();
      renderCartFooter();
    });
  });
}
renderProducts();
