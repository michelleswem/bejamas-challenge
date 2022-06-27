import { useContext } from "react";
import close from "../../assets/icons/close.svg";
import { CartContext } from "../../store/cart/cart-context";
import "./Cart.scss";
import { CartItem } from "./cartItem/CartItem";
export const Cart = (props) => {
  const cartCxt = useContext(CartContext);

  const hasItems = cartCxt.items.length > 0;

  const removeCartItemHandler = () => {
    cartCxt.clearCartItem();
  };

  return (
    <div className="cart">
      <div className="cart__action-box">
        <button onClick={props.onClose} className="cart__close-btn">
          <img src={close} alt="close" />
        </button>
      </div>
      <ul>
        {cartCxt.items.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            category={item.category}
          />
        ))}
      </ul>
      {hasItems && (
        <button className="cart__btn" onClick={removeCartItemHandler}>
          Clear
        </button>
      )}
      {!hasItems && <p className="cart__empty">Cart is Empty</p>}
    </div>
  );
};
