import { useContext } from "react";
import ProductContext from "../../../store/product/product-context";
import { Button } from "../../ui/Button";
import "./FeaturedProduct.scss";
import dog from "../../../assets/img/dog.png";
import bestseller from "../../../assets/img/bestseller-1.png";

export const FeaturedProduct = () => {
  const productCtx = useContext(ProductContext);
  const { products } = productCtx;

  const item = products.find((item) => item.featured === true);

  return (
    <section className="featured-section">
      <div className="featured-section__title-box">
        <h1 className="heading-primary">{item?.name}</h1>
        <Button />
      </div>
      <div className="featured-section__imgbox">
        <img src={dog} alt="dog" className="featured-section__image" />
        <span>Photo of the day</span>
      </div>

      <div className="box">
        <div className="details">
          <h2 className="heading-secondary">{`About the ${item?.name}`}</h2>
          <h2 className="heading-secondary heading-secondary__grey">Pets</h2>
          <p>{item?.description}</p>
        </div>

        <div className="bestseller">
          <h2 className="heading-secondary">People also buy</h2>
          <div className="bestseller__images">
            <img src={bestseller} alt="beseller" />
            <img src={bestseller} alt="beseller" />
            <img src={bestseller} alt="beseller" />
          </div>
          <h2 className="heading-secondary">Details</h2>
          <span>Size: 1020 x 1020 pixel</span>
          <span>Size: 15 mb</span>
        </div>
      </div>
    </section>
  );
};
