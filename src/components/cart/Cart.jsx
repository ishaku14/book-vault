export default function Cart() {
  return (
    <>
      <div className="cart-backdrop js-cart-backdrop fixed inset-0 backdrop-blur-2xl z-2000 opacity-0 pointer-events-none "></div>
      <div className="js-cart-container bg-cart fixed top-0 right-0 h-full w-full max-w-112.5 z-3000 translate-x-[110%] pointer-events-none flex flex-col ">
        <div className="bg-white flex justify-between p-4 border-b border-b-gray-200 shrink-0">
          <h3>My Cart (<span className="js-cart-quantity"></span>)</h3>
          <button className="js-cart-back bg-white border-none cursor-pointer px-4 py-2"><img className="w-3.5" src="images/icons/close-icon.svg" alt=""/></button>
        </div>

        <div className="js-cart-item-container p-4 flex-1 overflow-y-auto">
        </div>

        <div className="cart-footer js-cart-footer">
        </div>
      </div>
    </>
  );
}