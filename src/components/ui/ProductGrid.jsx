import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  return (
    <section className="product-card-container js-product-container px-5">
      {products.map((product) => 
        (
          <ProductCard key={product.productId} product={product} />
        )
      )}
    </section>
  );
}