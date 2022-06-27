import { useState } from "react";
import { Cart } from "./components/cart/Cart";
import { Header } from "./components/layout/header/Header";
import { Products } from "./components/products/Products";
import { CartProvider } from "./store/cart/CartProvider";
import { ProductProvider } from "./store/product/ProductProvider";

const App = () => {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const showCartHandler = () => {
    setCartIsVisible(true);
  };

  const hideCartHandler = () => {
    setCartIsVisible(false);
  };
  return (
    <ProductProvider>
      <CartProvider>
        <Header onShow={showCartHandler} />
        {cartIsVisible && <Cart onClose={hideCartHandler} />}
        <main>
          <Products />
        </main>
      </CartProvider>
    </ProductProvider>
  );
};

export default App;
