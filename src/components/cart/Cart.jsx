import CartItems from "./CartItems";

export default function Cart({ products, cart, cartQuantity, setCart, isCartOpen, handleCartVisibility }) {
  let productPrice = 0;
  let deliveryFee = 0;

  cart.forEach(cartItem => {
    const productId = cartItem.productId;
    
    const product = products.find(product => product.productId === productId);

    productPrice += product.price * cartItem.quantity;
    deliveryFee += product.deliveryFee;
  });

  const totalPrice = productPrice + deliveryFee;

  return (
    <>
      <div className={`fixed inset-0 backdrop-blur z-50 bg-black/50 opacity-${isCartOpen? '100': '0'} pointer-events-${isCartOpen? 'auto' : 'none'}`}>
        <div className={`bg-cart fixed top-0 right-0 h-full w-full max-w-112.5 z-50 flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.25, 1, 0.5, 1)] translate-x-${isCartOpen? '0' : '[110%]'}`}>
          <div className="bg-white flex justify-between p-4 border-b border-b-gray-200 shrink-0">
            <h3>My Cart (<span className="text-[1.1rem]">{cartQuantity}</span>)</h3>
            <button className="js-cart-back bg-white border-none cursor-pointer px-4 py-2" onClick={handleCartVisibility}><img className="w-3.5" src="images/icons/close-icon.svg" alt=""/></button>
          </div>

          <CartItems products={products} cart={cart} setCart={setCart} />

          <div className="shrink-0 bg-white p-4 border-t border-t-gray-300">
            <div className="cart-summary">
              <div className="flex justify-between mb-1.5">
                <span className="text-[1.1rem]">Delivery Fee:</span>
                <span className="summary-value delivery-fee">{deliveryFee}</span>
              </div>
              <div className="flex justify-between mb-1.5 border-b border-b-black pb-1">
                <span className="text-[1.1rem]">Subtotal:</span>
                <span className="text-[1rem] font-medium text-black">{productPrice}</span>
              </div>
              <div className="flex justify-between mb-5">
                <span className="text-[1.1rem] font-bold">Total:</span>
                <span className="text-[1rem] font-bold">{totalPrice}</span>
              </div>
            </div>
            
            <div>
              <a href="#">
                <button className="bg-accent border-none text-white w-full p-4 rounded-xl cursor-pointer shadow-lg shadow-black/20">Proceed to Checkout</button>
              </a>
            </div>
          </div>
        </div> 
      </div>
    </>
  );
}