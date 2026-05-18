import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <section className="top-section">
        <div className="logo-container">
          <a href="homePage.html">
            <img className="page-logo" src="images/icons/read-book-icon.svg" alt="Book Vault Logo"/>
          </a>
          <h2 className='font-bold text-[1.4rem]'>Book Vault</h2>
        </div>

        <div className="cart-icon-container js-cart-button">
          <img className="cart-icon" src="images/icons/cart-icon.png" alt="cart icon image"/>
          <div className="cart-quantity js-cart-quantity"></div>
        </div>
      </section>

      <section className="bottom-section">
        <div className="search-container">
          <img className="search-icon" src="images/icons/search-icon.png" alt="search icon image"/>
          <input className="search-box bg-white placeholder:text-[16px]" type="text" placeholder="search titles, authors..."/>
          <img className="voice-search-icon" src="images/icons/voice-search-icon.svg" alt="voice search icon image"/>
        </div>
      </section>
    </header>
  );
}