import React from "react";

export const CartContext = React.createContext({
  items: [],
  addCartItem: (item) => {},
  clearCartItem: () => {},
});
