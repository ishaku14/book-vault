const FooterLinks = ({ title, list } ) => {
    return (
      <div>
        <h3>{title}</h3>
        <ul className="mt-2 list-none flex flex-col gap-2">
          {list.map(list => (
            <li key={list}>
              <a className="text-black no-underline hover:underline" href="#">{list}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

const quickLinks = ['Home', 'Shop', 'Categories', 'About Us', 'Contact Us'];
const customerService = ['FAQ', 'Shopping & Returns', 'Privacy Policy', 'Terms of Services'];

export default function Footer() {

  return (
    <footer className="bg-footer p-8 static bottom-0 -left-5 right-5 w-full box-border">
      <section className="contact-section">
        <div className="flex gap-1 border-b border-b-black px-4 py-4">
          <img className="w-7" src="images/icons/read-book-icon.svg" alt="Book Vault Logo"/>
          <h3>Book Vault</h3>
        </div>

        <div className="px-4 border-b border-b-black">
          <div className='flex gap-2.5 mb-2.5'>
            <img className="w-2.5" src="images/icons/phone-call-white-icon.svg" alt="Phone Icon"/>
            <span>+234 8147610262</span>
          </div>
          <div className='flex gap-2.5 mb-2.5'>
            <img className='w-2.5' src="images/icons/email-envelope-line-white-icon.svg" alt="Email Icon"/>
            <span>info@bookvault.com</span>
          </div>
          <div className='flex gap-2.5 mb-2.5'>
            <img className='w-2.5' src="images/icons/location-pointer-white-icon.svg" alt="Location Icon"/>
            <span>Ikoyi, Lagos, Nigeria</span>
          </div>
        </div>
      </section>

      <section className='flex gap-8 pt-4'>
        <FooterLinks title={'Quick Links'} list={quickLinks} />
        <FooterLinks title={'Customer Service'} list={customerService} />
      </section>

      <div className="text-center text-[0.8rem] mt-5 text-gray-700">2026 Book Vault. All Rights Reserved.</div>
    </footer>
  )
}