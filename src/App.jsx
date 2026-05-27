import { useState } from 'react';
import HomePage from './pages/HomePage';

export default function App() {
  const [cart, setCart] = useState([
    // { productId: "bk-12wdjeujdkw-143yeheh", quantity: 2 },
    // { productId: "bk-12wdjeujdkw-83yeheh", quantity: 1 },
    // { productId: "bk-123dddkdkdd-374ruej", quantity:3 },
    // { productId: "bk-12wdjeujdkw-123yeheh", quantity:1 }
]);
  const [isCartOpen, setIsCartOpen] = useState(false);

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
      <HomePage cart={cart} setCart={setCart} isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} handleCartVisibility={handleCartVisibility} cartQuantity={cartQuantity} />
    </>
  )
}