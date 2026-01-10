import { products } from "./products.js";

export const cart = [];

export function addToCart(productId) {
  const matchingItem = cart.find(cartItem => (productId === cartItem.productId));

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({ productId, quantity: 1 })
  }

}

export function removeFromCart(productId) {
  const itemIndex = cart.findIndex(cartItem => cartItem.productId === productId);
  cart.splice(itemIndex, 1);
  renderCart();
}

export function updateCartQuantity() {
  let totalQuantity = 0;
  cart.forEach(cartItem => {
    totalQuantity += 1
  });

  document.querySelectorAll('.js-cart-quantity').forEach(element => {
    if(totalQuantity) {
      element.style.display = 'inline'
      element.textContent = totalQuantity;
    } else {
      element.style.display = 'none';
    }
    
  });
}

export function renderCart() {
  let cartHtml = '';

  cart.forEach(cartItem => {
    const productId = cartItem.productId;

    const matchingProduct = products.find(product => product.productId === productId);

    cartHtml += `
      <div class="cart-item">
        <img class="cart-item-image" src="${matchingProduct.image}" alt="">
        <div class="item-details">
          <div class="title-container">
            <span>${matchingProduct.title}</span>
            <button class="delete-button js-delete-button" data-product-id="${matchingProduct.productId}">
              <img class="delete-icon" src="images/icons/delete-icon.svg" alt="a delete button">
            </button>
          </div>
          <div class="author">${matchingProduct.author} . <span>Hardcover</span></div>

          <div class="price-section">
            <div class="price">$${(matchingProduct.price).toFixed(2)}</div>
            <div class="quantity-section">
              <button>-</button>
              <span class="quantity">${cartItem.quantity}</span>
              <button>+</button>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  document.querySelector('.js-cart-item-container').innerHTML = cartHtml;

  document.querySelectorAll('.js-delete-button').forEach(button => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;
      removeFromCart(productId);
      updateCartQuantity();
    })
  });
}