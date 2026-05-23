import { products } from "../../scripts/data/products";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import CategoryFilter from "../components/ui/CategoryFilter";
import ProductGrid from "../components/ui/ProductGrid";

export default function HomePage() {
  return (
    <div className="mt-36">
      <Header />

      <CategoryFilter />

      <main className="content">
        <ProductGrid products={products} />

        <div id="modal" className="product-details-modal-overlay js-product-details-container bg-[rgba(0,0,0,0.5)] fixed inset-0 z-10000 flex justify-center items-center p-3 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-[0.25s] ease-in-out">
        </div>
      </main>

      <Footer />
    </div>
  );
}
