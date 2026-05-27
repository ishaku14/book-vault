import { products } from "../../scripts/data/products";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import CategoryFilter from "../components/ui/CategoryFilter";
import ProductGrid from "../components/ui/ProductGrid";
import ProductDetails from "../components/ui/ProductDetails";
import Cart from "../components/cart/Cart";

export default function HomePage({ cart, setCart, isCartOpen, setIsCartOpen, handleCartVisibility, cartQuantity }) {
  return (
    <div className="mt-36">
      <Header cart={cart} cartQuantity={cartQuantity} isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} handleCartVisibility={handleCartVisibility} />

      <Cart cart={cart} cartQuantity={cartQuantity} setCart={setCart} products={products} isCartOpen={isCartOpen} handleCartVisibility={handleCartVisibility} />

      <CategoryFilter />

      <main className="content">
        <ProductGrid products={products} cart={cart} setCart={setCart} />

        <ProductDetails />
      </main>

      <Footer />
    </div>
  );
}
