import productItems from "../data/Products.json";
import { useCartContext } from "../context/CartContext";

const PayInformation = () => {
  // Enter the list cart products
  const { cartItems } = useCartContext();

  // Sum up the total price based on the number of products
  const totalPrice = cartItems.reduce((value, currItem) => {
    const product = productItems.find((item) => item.id === currItem.id);

    return value + (product?.price || 0) * currItem.qty;
  }, 0);

  return (
    <div className="border rounded-xl p-3 flex flex-col items-center justify-center gap-4 overflow-hidden dark:border-slate-600 mt-5 md:mt-0">
      <h1 className="font-semibold tracking-[1px] border-blue-500 text-blue-500 px-3 py-2 border-b dark:text-blue-400">
        Payment Information
      </h1>
      <div className="w-full py-4">
        <div className="w-full flex items-center gap-3 border-b py-3 dark:border-slate-600">
          <input
            type="text"
            placeholder="Code Discount...."
            className="w-8/12 lg:w-9/12 px-2 py-3 outline-none border rounded-xl text-sm dark:bg-slate-700 dark:border-0 dark:text-white"
          />
          <button
            disabled={!cartItems.length && true}
            className="w-4/12 lg:w-3/12 bg-blue-500 text-white text-sm font-bold py-3 px-4 rounded-lg disabled:opacity-60"
          >
            Apply
          </button>
        </div>

        <div className="w-full flex flex-col items-center gap-3 py-3 border-b dark:border-slate-600">
          <div className="w-full flex items-center justify-between my-3">
            <span className="text-slate-700 font-bold dark:text-slate-300">
              Total :
            </span>
            <span className="text-slate-800 dark:text-slate-400">
              {totalPrice} $
            </span>
          </div>
          <div className="w-full flex items-center justify-between my-3">
            <span className="text-slate-700 font-bold dark:text-slate-300">
              Discount :
            </span>
            <span className="text-red-400">0 $</span>
          </div>
        </div>

        <div className="w-full flex flex-col gap-3">
          <div className="w-full flex items-center justify-between my-3">
            <span className="text-slate-700 font-bold dark:text-slate-300">
              Total payment :
            </span>
            <span className="text-slate-800 dark:text-slate-400">
              {totalPrice} $
            </span>
          </div>
          <button
            disabled={!cartItems.length && true}
            className="w-full bg-blue-500 text-white text-sm font-bold py-3 px-5 rounded-lg disabled:opacity-60"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default PayInformation;
