import { useContext } from "react";
import { CartContext } from "../../../store/cart/cart-context";
import cart from "../../../assets/icons/cart.svg";
import "./HeaderCartButton.scss";

export const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const numberofCartItems = items.length;
  return (
    <button className="cart-btn" onClick={props.onShow}>
      <img src={cart} alt="cart" />
      <span className="cart-btn__badge">{numberofCartItems}</span>
    </button>
  );
};
