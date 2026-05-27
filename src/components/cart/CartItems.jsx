import formatPrice from '../../utils/money';

export default function CartItems({ products, cart, setCart }) {
  function increaseQuantity(e) {
    const productId = e.target.dataset.productId;

    setCart(prevCart => prevCart.map(cartItem => 
      cartItem.productId === productId
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    ));

  }

  function decreaseQuantity(e) {
    const productId = e.target.dataset.productId;

    setCart(prevCart => prevCart.map(cartItem => 
      cartItem.productId === productId
        ? { ...cartItem, quantity: cartItem.quantity > 1 ? cartItem.quantity - 1: cartItem.quantity }
        : cartItem
    ));
  }

  function deleteCartItem(e) {
    const productId = e.target.dataset.productId;

    setCart(prevCart => prevCart.filter(cartItem => cartItem.productId !== productId));
  }

  return (
    <div className="p-4 flex-1 overflow-y-auto scrollbar-none">
      { cart.map(cartItem => {
          const productId = cartItem.productId;

          const matchingProduct = products.find(product => product.productId === productId);

          return (
            <div key={matchingProduct.productId} className="flex bg-white gap-4 p-3 rounded-lg shadow-lg shadow-black/10 mb-5">
              <img className="w-20" src={matchingProduct.image} />
              <div className="flex flex-col gap-2.5 bg-transparent w-full">
                <div className="flex justify-between">
                  <span className="font-bold">{matchingProduct.title}</span>
                  <button className="bg-transparent border-none cursor-pointer" data-product-id={matchingProduct.productId} onClick={deleteCartItem}>
                    <img className="h-4 pointer-events-none" src="images/icons/delete-icon.svg" alt="delete button" />
                  </button>
                </div>
                <div className="text-gray-500 text-[0.9rem]">{matchingProduct.author} . <span>Hardcover</span></div>
      
                <div className="flex justify-between items-center">
                  <div className="text-accent font-bold">{formatPrice(matchingProduct.price)}</div>
                  <div className="bg-gray-200 p-1 rounded-md">
                    <button className="border-none rounded-sm bg-white text-[1.2rem] px-2.5 py-1 cursor-pointer" data-product-id={matchingProduct.productId} onClick={decreaseQuantity}>-</button>
                    <span className="font-bold mr-2 ml-2">{cartItem.quantity}</span>
                    <button className="border-none rounded-sm bg-white text-[1.2rem] px-2.5 py-1 cursor-pointer" data-product-id={matchingProduct.productId} onClick={increaseQuantity}>+</button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
    </div>
  )
}