import { useState, useEffect } from 'react';
import formatPrice from "../../utils/money";
import ProductDetails from "./ProductDetails";

export default function ProductCard({ product, setCart }) {
  const [detailsOpen, setDetailsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = detailsOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    }
  }, [detailsOpen]);

  function addToCart(event) {
    event.stopPropagation();
    const productId = event.currentTarget.dataset.productId;
    
    setCart(prevCart => {
      const matchingItem = prevCart.find(item => item.productId === productId);

      if(matchingItem) {
        return prevCart.map(cartItem => cartItem.productId === productId
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
        )
      }

      return [...prevCart, { productId, quantity: 1 }];
    });
  }

  function renderProductDetails() {
    setDetailsOpen(prev => !prev);
  }

  return (
    <>
      {detailsOpen && (
        <ProductDetails
          product={product}
          renderProductDetails={renderProductDetails}
          detailsOpen={detailsOpen}
          addToCart={addToCart} 
        />
      )}

      <div className="flex flex-col rounded-xl">
        <div className="bg-white w-full rounded-xl aspect-3/4 overflow-hidden mb-2.5 flex cursor-pointer " data-product-id={product.productId} onClick={renderProductDetails}>
          <img className="w-full h-full object-cover bg-white pointer-events-none" src={product.image} alt="" />
        </div>

        <div className="flex flex-col flex-1">
          <h3 className="mb-2">{product.title}</h3>
          <p className="text-gray-500 text-[0.9rem] mb-2">{product.author}</p>

          <div className="flex justify-between mb-2">
            <span className="text-accent font-bold">{formatPrice(product.price)}</span>
            <span className="flex items-center justify-between gap-1">
              <img className="h-3.5" src="/images/icons/star-rating.png" alt="star rating image" />
              <span>{(product.rating).toFixed(1)}</span>
              </span>
          </div>

          <button className="bg-accent border-none text-white font-bold text-[0.8rem] w-full rounded-[5px] flex items-center justify-center px-2.5 py-1.5 gap-1 cursor-pointer mt-auto active:opacity-[0.9]" data-product-id={product.productId} onClick={addToCart}>
            <img className="h-4" src="images/icons/icons-cart.png" alt="Cart icon image" />
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
}