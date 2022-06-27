import upArrow from "../../../assets/icons/up-arrow.svg";
import downArrow from "../../../assets/icons/down-arrow.svg";
import "./AvailableProducts.scss";
import { ProductLists } from "../productLists";
import { ProductCategory } from "../productCategory";

export const AvailableProducts = () => {
  return (
    <section className="section-products">
      <div className="section-products__box">
        <h3 className="heading">
          <span className="heading__dark">Photography /</span>
          <span className="heading__light">Premium Photos</span>
        </h3>

        <div className="sort-control">
          <button className="sort-control__btn">
            <img src={upArrow} alt="sort-up" />
          </button>
          <button className="sort-control__btn">
            <img src={downArrow} alt="sort-down" />
          </button>

          <div className="filter-control">
            <label className="filter-control__label">Sort By</label>
            <select className="filter-control__select">
              <option value="price">price</option>
              <option value="alha">alhabetically</option>
            </select>
          </div>
        </div>
      </div>
      <div className="products-box">
        <ProductCategory />
        <ProductLists />
      </div>
    </section>
  );
};
