import { useCartContext } from "../context/CartContext";

type ProductItemProps = {
  id: number;
  title: string;
  price: number;
  imgUrl: string;
};

const ProductItem = ({ id, title, price, imgUrl }: ProductItemProps) => {
  // Enter the actions to be taken on each product
  const { addItem, decreaseItem, removeItem, cartItemQty } = useCartContext();
  // Get quantity product
  const qty = cartItemQty(id);

  return (
    <div className="w-[80vw] sm:w-auto flex flex-col items-center justify-center border-2 rounded-lg overflow-hidden dark:border-slate-700">
      <div className="product-image w-full h-56 overflow-hidden border-b dark:border-b-0">
        <img className="w-full h-full object-cover" src={imgUrl} />
      </div>
      <div className="w-full flex items-center justify-between p-3">
        <span className="title font-semibold text-lg dark:text-slate-200">
          {title}
        </span>
        <span className="price text-slate-700 font-semibold dark:text-slate-400">
          {price} $
        </span>
      </div>
      <div className="controls w-full flex flex-col items-center justify-center p-3 gap-6">
        {qty === 0 ? (
          <button
            onClick={() => addItem(id)}
            className="w-full bg-blue-500 text-white text-sm font-bold py-3 px-5 rounded-lg"
          >
            Add To Cart
          </button>
        ) : (
          <>
            <div className="w-8/12 flex items-center justify-evenly">
              <button
                onClick={() => decreaseItem(id)}
                className="text-red-600 text-lg font-bold rounded-lg py-2 px-4 outline-none"
              >
                -
              </button>
              <span className="border-b-2 text-xl dark:text-slate-200">
                {qty}
              </span>
              <button
                onClick={() => addItem(id)}
                className="text-green-600 text-xl font-bold rounded-lg py-2 px-4 outline-none"
              >
                +
              </button>
            </div>
            <button
              onClick={() => removeItem(id)}
              className="w-full border border-red-500 text-red-500 text-sm font-bold py-3 px-5 transition-all rounded-lg hover:bg-red-500 hover:text-white"
            >
              Remove
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
