import { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';

export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isCartOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    }
  }, [isCartOpen]);

  let cartQuantity = 0;

  cart.forEach(cartItem => {
    cartQuantity += cartItem.quantity;
  });

  const handleCartVisibility = () => {
    isCartOpen
      ? setIsCartOpen(false)
      : setIsCartOpen(true)
  }

  return (
    <>
      <HomePage
        cart={cart}
        setCart={setCart}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen} handleCartVisibility={handleCartVisibility} cartQuantity={cartQuantity} 
      />
    </>
  )
}