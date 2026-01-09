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

export function renderCart() {
  let cartHtml = '';

  cart.forEach(cartItem => {
    const productId = cartItem.productId;

    const matchingProduct = products.find(product => product.productId === productId);

    console.log(productId, matchingProduct)

    cartHtml += `
      <div class="cart-item">
        <img class="cart-item-image" src="${matchingProduct.image}" alt="">
        <div class="item-details">
          <div class="title-container">
            <span>${matchingProduct.title}</span>
            <button class="delete-button"><img class="delete-icon" src="assets/icons/delete-icon.svg" alt="a delete button"></button>
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

  return cartHtml;
}