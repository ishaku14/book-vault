const FooterLinks = ({ title, list } ) => {
    return (
      <div>
        <ul className="mt-2 list-none flex flex-col gap-2">
          <li className="text-white text-[0.93rem]"><a href="#">{title}</a></li>
          {list.map(list => (
            <li key={list}>
              <a className="no-underline hover:underline" href="#">{list}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }


const quickLinks = ['Home', 'Shop', 'Categories', 'About Us', 'Contact Us'];
const customerService = ['FAQ', 'Shopping & Returns', 'Privacy Policy', 'Terms of Services'];
const policies = ["Terms & Conditions", "Privacy Policy", "Related Policy"]


export default function Footer() {
  return (
    <footer className="bg-footer-bg static bottom-0 left-10 w-full box-border p-4 rounded-t-[60px] rounded-b-2xl flex flex-col items-center text text-footer-text text-[0.8rem]">
      <section className="flex flex-col gap-2 items-center text-[0.8rem] border-b w-full border-b-divider p-2">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2">
            <img className="w-7" src="images/icons/read-book-icon.svg" alt="Book Vault Logo"/>
            <span className="text-white text-2xl font-medium">Book Vault</span>
          </div>

          <p className="">Discover books that shape minds</p>
        </div>

        <div className="flex w-full items-center justify-center">
          <input className="bg-white whitespace-nowrap placeholder:text-footer-text w-full max-w-100 py-2 px-4 rounded-sm" type="text" placeholder="Join our newsletter for updates and exclusive offers" />
          <button className="bg-accent text-white py-2 px-4 rounded-sm -ml-1.5 whitespace-nowrap">Join Now</button>
        </div>

        <p>Be the firt to know about arrivals, special offers and reading tips.</p>
      </section>

      <section className="grid justify-around py-2 px-4 sm:px-10 gap-2 sm:gap-4 border-b border-b-divider w-full grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <ul className="mt-2 list-none flex flex-col gap-2">
            <li className="text-white text-[0.93rem]"><a href="#">Contact</a></li>
            <li><a className="flex items-center gap-2 hover:underline" href="#">
                <img className="w-2.5" src="images/icons/phone-call-white-icon.svg" alt="Phone Icon"/>
                <span>+234 8147610262</span></a>
            </li>

            <li><a className="flex items-center gap-2 hover:underline" href="#">
                <img className='w-2.5' src="images/icons/email-envelope-line-white-icon.svg" alt="Email Icon"/>
                <span>info@bookvault.com</span></a>
            </li>

            <li><a className="flex items-center gap-2 hover:underline" href="#">
                <img className='w-2.5' src="images/icons/location-pointer-white-icon.svg" alt="Location Icon"/>
             <span>Lagos Nigeria</span></a>
            </li>
          </ul>
          <div className="text-white font-medium text-[0.9rem]">
            Follow us
            <div className="flex gap-2 mt-1">
              <button><img className="w-7" src="images\icons\icons8-instagram-100.png" alt="instagram icon" /></button>
              <button><img className="w-7" src="images\icons\icons8-x-50.png" alt="x icon" /></button>
              <button><img  className="w-7" src="images\icons\icons8-tiktok-50.png" alt="ticktok image" /></button>
            </div>
          </div>
        </div>
        <FooterLinks title={"Quick Links"} list={quickLinks}  />
        <FooterLinks title={"Customer Service"} list={customerService} />
        <FooterLinks title={"Policies"} list={policies} />
      </section>

      <div className="text-center text-[0.8rem] mt-2">2026 Book Vault. All Rights Reserved.</div>
    </footer>
  )
}