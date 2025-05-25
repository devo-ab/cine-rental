import logo from "../assets/logo.svg";
import ring from "../assets/ring.svg";
import moon from "../assets/icons/moon.svg";
import sun from "../assets/icons/sun.svg";
import cart from "../assets/shopping-cart.svg";
import { useContext, useState } from "react";
import CartDetails from "../cine/CartDetails";
import { MovieContext, ThemeContext } from "../context";

export default function Header() {
  const [showCart, setShowCart] = useState(false);
  const { state } = useContext(MovieContext);
  const { darkMood, setDarkMood } = useContext(ThemeContext);

  const handleShowCart = () => {
    setShowCart(true);
  };

  return (
    <div>
      <header>
        {showCart && <CartDetails onClose={() => setShowCart(false)}></CartDetails>}
        <nav className="flex items-center justify-between space-x-10 py-6">
          <a href="index.html">
            <img src={logo} width="139" height="26" alt="" />
          </a>

          <ul className="flex items-center gap-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={ring} width="24" height="24" alt="" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
                onClick={() => setDarkMood((darkMood) => !darkMood)}
              >
                {darkMood ? (
                  <img src={sun} width="24" height="24" alt="" />
                ) : (
                  <img src={moon} width="24" height="24" alt="" />
                )}
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
                onClick={handleShowCart}
              >
                <img src={cart} width="24" height="24" alt="" />
                {state.cartData.length > 0 && (
                  <span className="rounded-full absolute top-[-14px] right-[-23px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px] mx-auto">
                    {state.cartData.length}
                  </span>
                )}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
