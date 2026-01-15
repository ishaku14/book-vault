import { products } from "./data/products.js";
import { cart, addToCart, removeFromCart, renderCart, updateCartQuantity, renderCartFooter } from "./data/cart.js";
import { formatPrice } from './utils/money.js';

const cartContainerElm = document.querySelector('.js-cart-container');
const cartButtonElm = document.querySelector('.js-cart-button');
const cartBackElm = document.querySelector('.js-cart-back');
const detailsElm = document.getElementById('modal');
const backDropElm = document.querySelector('.js-cart-backdrop');

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
  backDropElm.classList.toggle('open')
  document.body.classList.add('cart-container-open');
}

function closeCart() {
  unlockBodyScroll();
  cartContainerElm.classList.remove('open');
  backDropElm.classList.remove('open');
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

  filteredProducts.forEach(product => {
    productsHtml += `
      <div class="product-card">
        <div class="product-image-container js-image-container" data-id=${product.productId}>
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
  
  document.querySelectorAll('.js-image-container').forEach(element => {
    element.addEventListener('click', () => {
      const productId = element.dataset.id;
      renderProductDetails(productId);
      showDetails();
      lockBodyScroll();
    });
  });
  
}
renderProducts();

function showDetails() {
  detailsElm.classList.toggle('open');
}

function closeDetails() {
  detailsElm.classList.remove('open');
}

function renderProductDetails(productId) {
  const matchingProduct = products.find(product => product.productId === productId);
  
  let detailsHtml = `
    <div class="book-details">
      <button class="close-modal"><img class="close-icon" src="images/icons/close-icon.svg" alt=""></button>
      <div class="img-container">
        <img src=${matchingProduct.image} alt="a book image">
      </div>
          
      <h1>${matchingProduct.title}</h1>
      <div class="author">
        by ${matchingProduct.author}
      </div>
          
      <div class="ratings">
        <strong>${(matchingProduct.rating).toFixed(2)}</strong>
        <img class="star-rating" src="images/icons/star-rating.png" alt="">
      </div>
          
      <div class="desc-section">
        <h3>Description</h3>
        <p class="description">
          ${matchingProduct.description}
        </p>
      </div>
          
      <div class="bottom-bar">
        <div>
          Total Price
          <strong>${formatPrice(matchingProduct.price)}</strong>
        </div>
        <button class="add-button">
          <img class="cart-icon" src="images/icons/icons-cart.png" alt="a cart icon image">
              Add to Cart
        </button>
      </div>
    </div>
  `;
  
  document.querySelector('.js-product-details-container').innerHTML = detailsHtml;
  
  document.querySelector('.close-modal').addEventListener('click', () => {
    closeDetails();
    unlockBodyScroll();
  })
}
