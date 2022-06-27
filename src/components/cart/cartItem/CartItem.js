import "./CartItem.scss";
import product from "../../../assets/img/dog.png";
export const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className="single-cart-item">
      <div className="single-cart-item__content">
        <div className="single-cart-item__box">
          <h2 className="single-cart-item__name">{props.name}</h2>
          <p className="single-cart-item__price">{price}</p>
        </div>
        <div className="single-cart-item__imgbox">
          <img src={product} alt="product" />
        </div>
      </div>
    </li>
  );
};
