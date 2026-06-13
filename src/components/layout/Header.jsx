export default function Header({ cart, handleCartVisibility, query, setQuery, handleSearch }) {
  let totalQuantity = 0;

  cart.forEach(cartItem => {
    totalQuantity += cartItem.quantity;
  });

  function getSearchInputValue(e) {
    setQuery(e.currentTarget.value);
  }

  function handleKeyDown(e) {
    if(e.key === "Enter") {
      handleSearch();
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 flex flex-col gap-3.5 z-20 px-4 py-2 bg-primary border-b border-b-gray-300">
      <section className="flex justify-between items-center">
        <div className="logo-container flex items-center justify-center gap-1.25">
          <a href="homePage.html">
            <img className="w-7.5" src="images/icons/read-book-icon.svg" alt="Book Vault Logo"/>
          </a>
          <h2 className='font-bold text-[1.4rem]'>Book Vault</h2>
        </div>

        <div className="relative bg-transparent border-none cursor-pointer" onClick={handleCartVisibility}>
          <img className="h-7.5 pointer-events-none" src="images/icons/cart-icon.png" alt="cart icon image" />
          <div className={`absolute -top-0.75 -left-0.75 bg-red-600 text-white border-none rounded-2xl py-px px-1 text-[0.6rem] font-bold pointer-events-none opacity-${totalQuantity? '100': '0'}`}>{totalQuantity}</div>
        </div>
      </section>

      <section className="flex items-center justify-center w-full">
        <div className="flex relative w-full mb-2.5 max-w-150">
          <img className="h-5 cursor-pointer absolute top-[50%] left-2.5 translate-y-[-50%]" src="images/icons/search-icon.png" alt="search icon image" onClick={handleSearch}/>
          <input className="bg-white placeholder:text-[16px] w-full text-[1rem] rounded-[10px] border-gray-200 border outline-none py-2.5 px-10  focus:border-accent focus:ring-3 focus:ring-accent/20 transition-all" type="text" placeholder="search titles, authors..." onKeyDown={handleKeyDown} onChange={getSearchInputValue} value={query}/>
          <img className="h-5 cursor-pointer absolute top-[50%] right-2.5 translate-y-[-50%]" src="images/icons/voice-search-icon.svg" alt="voice search icon image"/>
        </div>
      </section>
    </header>
  );
}