export default function CategoryFilter() {
  const categories = [
    { id: 'all', value: 'all', label: 'All Categories' },
    { id: 'finance', value: 'finance', label: 'Finance' },
    { id: 'sci-fi', value: 'sci-fi', label: 'Sci-FI' },
    { id: 'religion', value: 'religion', label: 'Religion & Spirituality' },
    { id: 'self-help', value: 'self-help', label: 'Self-help' },
    { id: 'history', value: 'history', label: 'History' },
    { id: 'romance', value: 'romance', label: 'Romance' },
    { id: 'biography', value: 'biography', label: 'Biography' }
  ]

  return (
    <section className="px-2 flex overflow-auto gap-2.5 mb-5 scrollbar-none">
      { categories.map(category => (
        <div key={category.id} className="p-2">
          <input className="peer hidden"
            type="radio"
            value={category.value}
            name="category"
            id={category.id}
          />

          <label className="px-4 py-2.5 w-full rounded-[999px] cursor-pointer text-[14px] text-gray-900 whitespace-nowrap text-center transition-all duration-150 ease-in-out peer-checked:bg-accent peer-checked:text-white peer-checked:font-medium peer-checked:shadow-[0_2px_6px_rgba(0, 0, 0, 0.15)]" htmlFor={category.id}>{ category.label }</label>
        </div>
      )) }
    </section>
  );
}