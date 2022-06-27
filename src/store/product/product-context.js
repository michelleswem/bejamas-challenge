import React from "react";
const ProductContext = React.createContext({
  products: [],
  isLoading: false,
  error: null,
});

export default ProductContext;
