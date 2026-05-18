import { products } from "../scripts/data/products";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./Homepage.css";

export default function HomePage() {
  return (
    <div className="mt-36">
      <Header />

      <section className="category-toggle px-5">
        <input type="radio" name="category" id="all-category" value="all" checked />
        <label htmlFor="all-category">All Categories</label>

        <input type="radio" name="category" id="finance" value="finance" />
        <label htmlFor="finance">Finance</label>

        <input type="radio" name="category" id="sci-fi" value="sci-fi"/>
        <label htmlFor="sci-fi">Sci-FI</label>

        <input type="radio" name="category" id="religion" value="religion"/>
        <label htmlFor="religion">Religion & Spirituality</label>

        <input type="radio" name="category" id="self-help" value="self-help"/>
        <label htmlFor="self-help">Self-help</label>

        <input type="radio" name="category" id="history" value="history"/>
        <label htmlFor="history">History</label>

        <input type="radio" name="category" id="romance" value="romance"/>
        <label htmlFor="romance">Romance</label>

        <input type="radio" name="category" id="biography" value="biography"/>
        <label htmlFor="biography">Biography</label>
      </section>

      <main className="content">
        <section className="product-card-container js-product-container px-5">
          {products.map((product) => 
            (
              <div key={product.productId} className="product-card">
                <div className="product-image-container js-image-container" data-id={product.productId}>
                  <img className="product-image" src={product.image} alt="" />
                </div>
        
                <div className="product-details">
                  <h3 className="title">{product.title}</h3>
                  <p className="author">{product.author}</p>
        
                  <div className="price-container">
                    <span className="price">{product.price}</span>
                    <span className="flex items-center justify-between gap-1">
                      <img className="star-rating" src="/images/icons/star-rating.png" alt="star rating image" />
                      <span>{(product.rating).toFixed(1)}</span>
                      </span>
                  </div>
        
                  <button className="add-to-cart-button js-add-button" data-product-id={product.productId}>
                    <img className="cart-icon" src="images/icons/icons-cart.png" alt="Cart icon image" />
                    Add to cart
                  </button>
                </div>
              </div>
            )
          )}
        </section>

        <div id="modal" className="product-details-modal-overlay js-product-details-container">
        </div>
      </main>

      <Footer />
    </div>
  );
}
