import formatPrice from '../../utils/money';

export default function ProductDetails() {
  return (
    <div id="modal" className="bg-[rgba(0,0,0,0.5)] fixed inset-0 z-10000 flex justify-center items-center p-3 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-[0.25s] ease-in-out">
      <div class="book-details">
        <button class="close-modal"><img class="close-icon" src="images/icons/close-icon.svg" alt="" /></button>
        <div class="img-container">
          <img src={'image'} alt="a book image" />
        </div>
            
        <h1>{'title'}</h1>
        <div class="author">
          by {'author'}
        </div>
            
        <div class="ratings">
          <strong>{'(matchingProduct.rating).toFixed(2)'}</strong>
          <img class="star-rating" src="images/icons/star-rating.png" alt="" />
        </div>
            
        <div class="desc-section">
          <h3>Description</h3>
          <p class="description">
            {'matchingProduct.description'}
          </p>
        </div>
            
        <div class="bottom-bar">
          <div>
            <span class="total-price">Total Price</span>
            <strong>{formatPrice('matchingProduct.price')}</strong>
          </div>
          <button class="add-button js-add-button" data-id={'matchingProduct.productId'}>
            <img class="cart-icon" src="images/icons/icons-cart.png" alt="a cart icon image" />
                Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}