import { useState } from "react";
import { products } from "../../scripts/data/products";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import CategoryFilter from "../components/ui/CategoryFilter";
import ProductGrid from "../components/ui/ProductGrid";
import Cart from "../components/cart/Cart";

export default function HomePage({ cart, setCart, isCartOpen, setIsCartOpen, handleCartVisibility, cartQuantity }) {
  const [category, setCategory] = useState('all');

  return (
    <div className="mt-36">
      <Header cart={cart} cartQuantity={cartQuantity} isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} handleCartVisibility={handleCartVisibility} />

      <Cart cart={cart} cartQuantity={cartQuantity} setCart={setCart} products={products} isCartOpen={isCartOpen} handleCartVisibility={handleCartVisibility} />

      <CategoryFilter category={category} setCategory={setCategory} />

      <main className="content">
        <ProductGrid products={products} cart={cart} setCart={setCart} category={category} />
      </main>

      <Footer />
    </div>
  );
}
