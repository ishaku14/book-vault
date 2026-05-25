import { useState } from 'react';
import HomePage from './pages/HomePage';

export default function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <HomePage cart={cart} setCart={setCart} />
    </>
  )
}