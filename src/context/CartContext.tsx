import { createContext, useContext, ReactNode } from "react";
import { useLocalStorageCart } from "../hooks/useLocalStorageCart";

// Types
type CartProvider = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  qty: number;
};

type CartContext = {
  addItem: (id: number) => void;
  decreaseItem: (id: number) => void;
  removeItem: (id: number) => void;
  cartItemQty: (id: number) => number;
  cartItems: CartItem[];
  cartQty: number;
};

const CartContext = createContext({} as CartContext);

// A hook to use the context in the parts of the application
export const useCartContext = () => {
  return useContext(CartContext);
};

// The main provider of shopping cart actions
export const CartProvider = ({ children }: CartProvider) => {
  // List of shopping carts used by the useLocalStorage hook to store in local storage
  const [cartItems, setCartItems] = useLocalStorageCart<CartItem[]>(
    "cartItems",
    []
  );

  // Get quantity Cart
  const cartQty = cartItems.reduce((value, item) => value + item.qty, 0);

  const cartItemQty = (id: number) => {
    return cartItems.find((item) => item.id === id)?.qty || 0;
  };

  // Add product to cart
  const addItem = (id: number) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, qty: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, qty: item.qty + 1 };
          }
          return item;
        });
      }
    });
  };

  // Decrease product from cart
  const decreaseItem = (id: number) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.qty === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, qty: item.qty - 1 };
          }
          return item;
        });
      }
    });
  };

  // Remove product from cart
  const removeItem = (id: number) => {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  };

  return (
    <CartContext.Provider
      value={{
        addItem,
        decreaseItem,
        removeItem,
        cartItems,
        cartItemQty,
        cartQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
