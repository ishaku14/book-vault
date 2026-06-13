import { useState } from "react";

function useAddToCart(addToCart) {
  const [added, setAdded] = useState(false);

  function handleAddToCart(event) {
    addToCart(event);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }
 
  return { added, handleAddToCart }
}

export default useAddToCart;