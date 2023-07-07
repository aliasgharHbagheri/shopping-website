import { useState } from "react";
import { CiShoppingCart, CiDark, CiSun, CiMenuFries } from "react-icons/ci";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const Navbar = () => {
  const { cartQty } = useCartContext();

  // Menu open and close in mobile
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <header className="h-[10vh] ">
      <nav className="w-full flex items-center justify-between py-4 px-8 shadow-sm dark:shadow-slate-700">
        {/* Menu for desktop */}
        <div className="hidden w-full md:flex items-center justify-between">
          <h1 className="text-2xl text-blue-600 dark:text-blue-500 font-bold">
            Shopping
          </h1>

          <ul className="flex items-center justify-center gap-7">
            <Link to="/">
              <li className="text-slate-600 p-2 rounded-xl hover:bg-slate-50 transition-all dark:hover:bg-slate-700 dark:text-slate-400">
                Home
              </li>
            </Link>
            <Link to="/shop">
              <li className="text-slate-600 p-2 rounded-xl hover:bg-slate-50 transition-all  dark:hover:bg-slate-700 dark:text-slate-400">
                Shop
              </li>
            </Link>
            <Link to="/about">
              <li className="text-slate-600 p-2 rounded-xl hover:bg-slate-50 transition-all  dark:hover:bg-slate-700 dark:text-slate-400">
                About
              </li>
            </Link>
          </ul>
          <div className="flex items-center justify-center gap-5">
            <Link
              to="/cart"
              className="relative rounded-full p-2 text-2xl font-bold hover:bg-slate-50 transition-all  dark:hover:bg-slate-700 dark:text-slate-300"
            >
              <CiShoppingCart />
              <div className="absolute -top-2 -right-3 text-sm rounded-full bg-blue-500 text-white text-center px-2 py-1">
                {cartQty}
              </div>
            </Link>
          </div>
        </div>

        {/* Menu for mobile */}
        <div className="flex w-full md:hidden items-center justify-between">
          <h1 className="text-2xl text-blue-600 dark:text-blue-500 font-bold">
            Shopping
          </h1>

          <div className="flex items-center justify-center gap-2 sm:gap-6">
            <Link
              to="/cart"
              className="relative rounded-full p-2 text-2xl font-bold hover:bg-slate-50 transition-all  dark:hover:bg-slate-700 dark:text-slate-300"
            >
              <CiShoppingCart />
              <div className="absolute hidden sm:flex -top-2 -right-3 text-sm rounded-full bg-blue-500 text-white text-center px-2 py-1">
                {cartQty}
              </div>
            </Link>
            <button
              onClick={() => setMenuIsOpen(true)}
              className="text-xl bg-slate-200 p-3 rounded-xl text-slate-700 dark:bg-slate-700 dark:text-slate-400"
            >
              <CiMenuFries />
            </button>
          </div>
          {menuIsOpen && (
            <div className="fixed right-0 top-0 bg-[rgba(255,255,255,0.9)] w-full h-screen flex flex-col items-end py-4 px-8 z-30 dark:bg-[rgba(30,41,59,0.9)]">
              <button
                onClick={() => setMenuIsOpen(false)}
                className="text-slate-700 text-xl bg-slate-200 p-3 rounded-xl dark:bg-transparent dark:text-slate-400"
              >
                <CgClose />
              </button>
              <ul className="w-full h-2/3 flex flex-col items-center justify-center gap-7 mt-10">
                <Link to="/">
                  <li className="text-xl text-slate-600 p-2 rounded-xl hover:bg-slate-50 transition-all dark:hover:bg-slate-700 dark:text-slate-400">
                    Home
                  </li>
                </Link>
                <Link to="/shop">
                  <li className="text-xl text-slate-600 p-2 rounded-xl hover:bg-slate-50 transition-all  dark:hover:bg-slate-700 dark:text-slate-400">
                    Shop
                  </li>
                </Link>
                <Link to="/about">
                  <li className="text-xl text-slate-600 p-2 rounded-xl hover:bg-slate-50 transition-all  dark:hover:bg-slate-700 dark:text-slate-400">
                    About
                  </li>
                </Link>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
