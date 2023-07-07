import CartItem from "../components/CartItem";
import PayInformation from "../components/PayInformation";
import { useCartContext } from "../context/CartContext";

const Cart = () => {
  // Enter the list cart products
  const { cartItems } = useCartContext();

  return (
    <div className="w-11/12 lg:w-10/12 min-h-[90vh] h-auto mx-auto flex flex-col items-center justify-start gap-4">
      <h1 className="text-2xl text-slate-500 border-b-2 border-blue-500 py-3 mt-3">
        Cart
      </h1>
      <div className="w-full flex flex-col sm:flex-col md:flex-row items-start justify-between gap-3">
        {/* Cart Item */}
        <div className="w-full md:w-8/12 flex flex-row flex-wrap md:flex-col items-start justify-start gap-3">
          {cartItems.length ? (
            cartItems.map((item) => <CartItem key={item.id} {...item} />)
          ) : (
            <h2 className="dark:text-slate-500 mx-auto py-10 text-lg">
              No product added...😢
            </h2>
          )}
        </div>

        {/* Payment Information */}
        <div className="w-full md:w-4/12">
          <PayInformation />
        </div>
      </div>
    </div>
  );
};

export default Cart;
