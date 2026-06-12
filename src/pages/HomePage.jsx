import { useState } from "react";
import { products } from "../data/products";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import CategoryFilter from "../components/ui/CategoryFilter";
import ProductGrid from "../components/ui/ProductGrid";
import Cart from "../components/cart/Cart";

export default function HomePage({ cart, setCart, isCartOpen, setIsCartOpen, handleCartVisibility, cartQuantity }) {
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");

  function handleSearch() {
    setSubmittedQuery(query.trim());
  }

  const filteredProducts = products
    .filter(product => category === "all" || product.category === category)
    .filter(product => {
      const q = submittedQuery.toLocaleLowerCase().trim();
      if(!q) return true;
      return (
        product.title.toLowerCase().includes(q) ||
        product.author.toLowerCase().includes(q) ||
        product.keywords.some(keyword => keyword.includes(q))
      );
    });

  return (
    <div className="mt-36">
      <Header query={query} setQuery={setQuery} cart={cart} cartQuantity={cartQuantity} isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} handleCartVisibility={handleCartVisibility} setSubmittedQuery={setSubmittedQuery} handleSearch={handleSearch}/>

      <Cart cart={cart} cartQuantity={cartQuantity} setCart={setCart} products={products} isCartOpen={isCartOpen} handleCartVisibility={handleCartVisibility} />

      <CategoryFilter category={category} setCategory={setCategory} />

      <main className="content">
        <ProductGrid products={filteredProducts} cart={cart} setCart={setCart} category={category} />
      </main>

      <Footer />
    </div>
  );
}
