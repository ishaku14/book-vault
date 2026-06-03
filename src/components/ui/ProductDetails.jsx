import formatPrice from '../../utils/money';

export default function ProductDetails({ product, addToCart, renderProductDetails, detailsOpen }) {
  return (
    <div className={`bg-[rgba(0,0,0,0.5)] fixed inset-0 z-10000 flex justify-center items-center p-3 backdrop-blur-sm ${detailsOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} transition-opacity duration-[0.25s] ease-in-out`}>
      <div className="bg-white rounded-[10px] w-[95%] max-w-170 p-4 flex flex-col h-auto overflow-visible transition-max-height duration-[0.25s] ease-in-out">
        <button className="bg-white border-none px-1.5 py-3 self-end text-[1.3rem] cursor-pointer" onClick={renderProductDetails}><img className="h-3.5 pointer-events-none" src="images/icons/close-icon.svg" alt="" /></button>
        <div className="m-auto w-30">
          <img className="w-full h-full" src={product.image} alt="a book image" />
        </div>
            
        <h1 className="text-center">{product.title}</h1>
        <div className="text-center text-accent font-bold text-[0.9rem] mb-2">
          by {product.author}
        </div>
            
        <div className="text-center mb-2.5 flex items-center justify-center gap-1">
          <strong>{(product.rating).toFixed(2)}</strong>
          <img className="h-3.5" src="images/icons/star-rating.png" alt="" />
        </div>
            
        <div>
          <h3 className="mb-2.5">Description</h3>
          <p className="text-gray-500 mb-5">
            {product.description}
          </p>
        </div>
            
        <div className="flex items-center justify-between gap-2.5">
          <div className="flex flex-col justify-center items-center">
            <span className="text-[0.8rem] text-gray-500">Total Price</span>
            <strong className="text-[1.2rem]">{formatPrice(product.price)}</strong>
          </div>
          <button className="flex items-center justify-between gap-2.5 bg-accent px-2.5 py-2.5 border-none rounded-[10px] text-white font-bold text-[1rem] cursor-pointer active:opacity-80" data-product-id={product.productId} onClick={addToCart}>
            <img className="h-4 pointer-events-none" src="images/icons/icons-cart.png" alt="a cart icon image" />
                Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}