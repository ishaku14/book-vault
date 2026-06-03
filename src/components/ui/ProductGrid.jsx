import ProductCard from "./ProductCard";

export default function ProductGrid({ products, cart, setCart }) {
  return (
    <section className="product-card-container js-product-container px-5 w-full bg-transparent grid gap-x-5 gap-y-10 items-stretch mb-10 grid-cols-2 max-sm:grid-cols-2 min-[501px]:max-[800px]:grid-cols-3 min-[801px]:max-[1024px]:grid-cols-4 min-[1025px]:grid-cols-5">
      {products.map((product) => 
        (
          <ProductCard
            key={product.productId}
            product={product}
            cart={cart}
            setCart={setCart}
            products={products}
          />
        )
      )}
    </section>
  );
}