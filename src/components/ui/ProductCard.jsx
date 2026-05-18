export default function ProductCard({ product}) {
  return (
    <div className="product-card">
      <div className="product-image-container js-image-container" data-id={product.productId}>
        <img className="product-image" src={product.image} alt="" />
      </div>

      <div className="product-details">
        <h3 className="title">{product.title}</h3>
        <p className="author">{product.author}</p>

        <div className="price-container">
          <span className="price">{product.price}</span>
          <span className="flex items-center justify-between gap-1">
            <img className="star-rating" src="/images/icons/star-rating.png" alt="star rating image" />
            <span>{(product.rating).toFixed(1)}</span>
            </span>
        </div>

        <button className="add-to-cart-button js-add-button" data-product-id={product.productId}>
          <img className="cart-icon" src="images/icons/icons-cart.png" alt="Cart icon image" />
          Add to cart
        </button>
      </div>
    </div>
  );
}