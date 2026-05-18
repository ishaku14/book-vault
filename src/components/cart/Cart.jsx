export default function Cart() {
  return (
    <>
      <div className="cart-backdrop js-cart-backdrop"></div>
      <div className="cart-container js-cart-container">
        <div className="cart-header">
          <h3>My Cart (<span className="js-cart-quantity"></span>)</h3>
          <button className="cart-back js-cart-back"><img src="images/icons/close-icon.svg" alt=""/></button>
        </div>

        <div className="cart-item-container js-cart-item-container">
        </div>

        <div className="cart-footer js-cart-footer">
        </div>
      </div>
    </>
  );
}