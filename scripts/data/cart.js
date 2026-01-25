import { products } from "./products.js";
import { formatPrice } from "../utils/money.js";

export const cart = JSON.parse(localStorage.getItem('cart')) || [];

renderCart();

//save cart items to localstorage
function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

//Adds item to the cart
export function addToCart(productId) {
  const matchingItem = cart.find(cartItem => (productId === cartItem.productId));

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({ productId, quantity: 1 })
  }
  
  saveToStorage();
}

//Removes items from the cart
export function removeFromCart(productId) {
  const itemIndex = cart.findIndex(cartItem => cartItem.productId === productId);
  cart.splice(itemIndex, 1);
  saveToStorage();
  renderCart();
}


//Updates the cart quantity displayed on the cart icon
export function updateCartQuantity() {
  let totalQuantity = 0;
  cart.forEach(cartItem => {
    totalQuantity += cartItem.quantity;
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
updateCartQuantity();

//increases item quantity in the cart
function icreaseItemQuantity(productId) {
  const matchingProduct = cart.find(cartItem => cartItem.productId === productId);

  matchingProduct.quantity +=1;
  saveToStorage();
  renderCart();
}

//decreases item quantity in the cart
function decreaseItemQuantity(productId) {
  const matchingProduct = cart.find(cartItem => cartItem.productId === productId);

  if(matchingProduct.quantity === 1) {
    return;
  }

  matchingProduct.quantity -=1;
  saveToStorage();
  renderCart();
}

//Displays cart items in the cart sidebar
export function renderCart() {
  let cartHtml = '';

  cart.forEach(cartItem => {
    const productId = cartItem.productId;

    const matchingProduct = products.find(product => product.productId === productId);

    if(!matchingProduct) {
      removeFromCart(productId);
      return;
    }

    cartHtml += `
      <div class="cart-item">
        <img class="cart-item-image" src=${matchingProduct.image}>
        <div class="item-details">
          <div class="title-container">
            <span>${matchingProduct.title}</span>
            <button class="delete-button js-delete-button" data-product-id="${matchingProduct.productId}">
              <img class="delete-icon" src="images/icons/delete-icon.svg" alt="a delete button">
            </button>
          </div>
          <div class="author">${matchingProduct.author} . <span>Hardcover</span></div>

          <div class="price-section">
            <div class="price">${formatPrice(matchingProduct.price)}</div>
            <div class="quantity-section">
              <button class="js-minus-button" data-id=${matchingProduct.productId}>-</button>
              <span class="quantity">${cartItem.quantity}</span>
              <button class="js-plus-button" data-id=${matchingProduct.productId}>+</button>
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
      renderCartFooter();
    })
  });

  document.querySelectorAll('.js-plus-button').forEach(button => {
    button.addEventListener('click', () => {
      const productId = button.dataset.id;
      icreaseItemQuantity(productId);
      updateCartQuantity();
      renderCartFooter();
    });
  });

  document.querySelectorAll('.js-minus-button').forEach(button => {
    button.addEventListener('click', () => {
      const productId = button.dataset.id;
      decreaseItemQuantity(productId);
      updateCartQuantity();
      renderCartFooter();
    });
  });

}

export function renderCartFooter() {
  let productsPrice = 0;
  let deliveryFee = 0;

  cart.forEach(cartItem => {
    const product = products.find(product => cartItem.productId === product.productId);

    productsPrice += product.price * cartItem.quantity;
    deliveryFee += product.deliveryFee;
  });

  const totalPrice = productsPrice + deliveryFee;

  const footerHtml = `
    <div class="cart-summary">
      <div class="summary-item">
        <span class="summary-label">Delivery Fee:</span>
        <span class="summary-value delivery-fee">${formatPrice(deliveryFee)}</span>
      </div>
      <div class="summary-item subtotal">
        <span class="summary-label">Subtotal:</span>
        <span class="summary-value sub-total">${formatPrice(productsPrice)}</span>
      </div>
      <div class="summary-item total">
        <span class="summary-label">Total:</span>
        <span class="summary-value">${formatPrice(totalPrice)}</span>
      </div>
    </div>

    <div class="cart-actions">
      <a href="#">
        <button class="btn btn-primary">Proceed to Checkout</button>
      </a>
    </div>
  `;

  document.querySelector('.js-cart-footer').innerHTML = footerHtml;
}

renderCartFooter();