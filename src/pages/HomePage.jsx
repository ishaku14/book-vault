import { products } from "../../scripts/data/products";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import CategoryFilter from "../components/ui/CategoryFilter";
import ProductGrid from "../components/ui/ProductGrid";
import "./Homepage.css";

export default function HomePage() {
  return (
    <div className="mt-36">
      <Header />

      <CategoryFilter />

      <main className="content">

        <ProductGrid products={products} />

        <div id="modal" className="product-details-modal-overlay js-product-details-container">
        </div>
      </main>

      <Footer />
    </div>
  );
}
