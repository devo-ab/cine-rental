import { useContext } from "react";
import { MovieContext } from "../context";
import deleteIcon from "../assets/delete.svg";
import checkOutIcon from "../assets/icons/checkout.svg";
import { getImgUrl } from "../utils/cine-utility";

export default function CartDetails({ onClose }) {
  const { cartData, setCartData } = useContext(MovieContext);

  const handleDeleteCart = (event, id) => {
    event.preventDefault();
    const afterDelete = cartData.filter((item) => item.id !== id);
    setCartData(afterDelete);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[790px] p-4 max-h-[90vh] overflow-auto">
        <div className="bg-white shadow-md dark:bg-[#12141D] rounded-2xl overflow-hidden p-5 md:p-9">
          <h2 className="text-2xl lg:text-[30px] mb-10 font-bold">Your Carts</h2>
          <div className="space-y-8 lg:space-y-12 max-h-[450px] overflow-auto mb-10 lg:mb-14">
            {cartData.length === 0 ? (
              <p className="text-2xl">Your Cart Is Empty,Please Add A Movie</p>
            ) : (
              cartData.map((cart) => (
                <div key={cart.id} className="grid grid-cols-[1fr_auto] gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      className="rounded overflow-hidden"
                      src={getImgUrl(cart.cover)}
                      width={"50px"}
                      height={"50px"}
                      alt=""
                    />
                    <div>
                      <h3 className="text-base md:text-xl font-bold">{cart.title}</h3>
                      <p className="max-md:text-xs text-[#575A6E]">{cart.genre}</p>
                      <span className="max-md:text-xs">${cart.price}</span>
                    </div>
                  </div>
                  <div className="flex justify-between gap-4 items-center">
                    <button
                      onClick={(event) => handleDeleteCart(event, cart.id)}
                      className="bg-[#D42967] rounded-md p-2 md:px-4 inline-flex items-center space-x-2 text-white"
                    >
                      <img className="w-5 h-5" src={deleteIcon} alt="" />
                      <span className="max-md:hidden">Remove</span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="flex items-center justify-end gap-2">
            <a
              className="rounded-md p-2 md:px-4 inline-flex items-center space-x-2 bg-primary text-[#171923] text-sm"
              href="#"
            >
              <img src={checkOutIcon} width="24" height="24" alt="" />
              <span>Checkout</span>
            </a>
            <a
              className="border border-[#74766F] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#6F6F6F] dark:text-gray-200 font-semibold text-sm"
              href="#"
              onClick={onClose}
            >
              Cancel
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
