import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <section className="contact-section">
        <div className="logo-section">
          <img src="images/icons/read-book-icon.svg" alt="Book Vault Logo"/>
          <h3>Book Vault</h3>
        </div>

        <div className="contacts">
          <div>
            <img src="images/icons/phone-call-white-icon.svg" alt="Phone Icon"/>
            <span>+234 8147610262</span>
          </div>
          <div>
            <img src="images/icons/email-envelope-line-white-icon.svg" alt="Email Icon"/>
            <span>info@bookvault.com</span>
          </div>
          <div>
            <img src="images/icons/location-pointer-white-icon.svg" alt="Location Icon"/>
            <span>Ikoyi, Lagos, Nigeria</span>
          </div>
        </div>
      </section>

      <section className="footer-links">
        <div className="first">
          <h3>Quick Links</h3>
          <ul className="quick-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>

        <div>
          <h3>Customer Service</h3>
          <ul className="quick-links">
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Shopping & Returns</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
      </section>

      <div className="inc-date">2026 Book Vault. All Rights Reserved.</div>
    </footer>
  )
}