import "./CategoryFilter.css";

export default function CategoryFilter() {
  return (
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
  );
}