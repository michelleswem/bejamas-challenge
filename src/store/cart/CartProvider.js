import { CartContext } from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const existingItem = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingItem];
    let updatedItems;
    if (existingCartItem) {
      updatedItems = [...state.items];
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
    };
  }

  if (action.type === "CLEAR") {
    return defaultCartState;
  }
  return defaultCartState;
};

export const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addCartItemHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const clearCartItemHandler = () => {
    dispatchCartAction({ type: "CLEAR" });
  };

  const cartContext = {
    items: cartState.items,
    addCartItem: addCartItemHandler,
    clearCartItem: clearCartItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
