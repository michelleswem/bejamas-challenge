import { useContext } from "react";
import { Button } from "../../ui/Button";
import { CartContext } from "../../../store/cart/cart-context";
import image from "../../../assets/img/balon.png";
import "./ProductItems.scss";

export const ProductItems = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addCartItemHandler = () => {
    cartCtx.addCartItem({
      id: props.id,
      name: props.name,
      price: props.price,
      category: props.category,
    });
  };
  return (
    <li className="product-item">
      {props.bestseller && (
        <span className="product-item__bestseller">Bestseller</span>
      )}
      <img src={image} alt={props.name} />
      <Button className="product-item__btn" onClick={addCartItemHandler} />
      <div className="product-item__category">{props.category}</div>
      <h3 className="product-item__name">{props.name}</h3>
      <div className="product-item__price">{price}</div>
    </li>
  );
};
