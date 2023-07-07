import { AiOutlineDelete } from "react-icons/ai";
import productItems from "../data/Products.json";
import { useCartContext } from "../context/CartContext";

// Types
type cartItemProps = {
  id: number;
  qty: number;
};

const CartItem = ({ id, qty }: cartItemProps) => {
  // Enter the actions to be taken on each product
  const { addItem, decreaseItem, removeItem } = useCartContext();

  const product = productItems.find((item) => item.id === id);

  return (
    <div className="w-full h-44 flex md:flex-row items-start justify-start border rounded-xl p-3 dark:border-slate-700 dark:bg-slate-700">
      <div className="product-image w-4/12 md:w-3/12 h-full flex items-center justify-start">
        <img
          src={product?.imgUrl}
          className="object-cover w-full h-full rounded-xl"
        />
      </div>

      <div className="w-8/12 md:w-9/12 h-full flex flex-col items-center justify-center md:p-4">
        <div className="w-full h-full flex items-center justify-between px-3">
          <h3 className="title text-sm md:text-xl text-slate-800 dark:text-slate-200">
            {product?.title}
          </h3>
          <span className="price text-slate-600 dark:text-slate-300">
            {product?.price} $
          </span>
        </div>

        <div className="controls w-full h-full flex flex-col md:flex-row items-center md:justify-between md:gap-10">
          <div className="w-full flex items-center justify-center md:justify-normal py-4 gap-3">
            <button
              onClick={() => decreaseItem(id)}
              className="text-red-600 text-2xl font-bold rounded-lg w-10 h-10 "
            >
              -
            </button>
            <span className="border-b-2 md:text-lg dark:text-slate-200 ">
              {qty}
            </span>
            <button
              onClick={() => addItem(id)}
              className="text-green-600 text-2xl font-bold rounded-lg w-10 h-10 "
            >
              +
            </button>
          </div>
          <button
            onClick={() => removeItem(id)}
            className=" bg-red-100 p-3 text-lg rounded-full text-slate-700 transition-all md:mr-3 hover:bg-red-500 hover:text-white dark:bg-red-500 dark:text-white"
          >
            <AiOutlineDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
