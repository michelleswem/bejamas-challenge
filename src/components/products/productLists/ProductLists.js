import { ProductItems } from "../productItems";
import "./ProductLists.scss";
import { useContext } from "react";
import ProductContext from "../../../store/product/product-context";
import { LoadingSpinner } from "../../ui/LoadingSpinner";

export const ProductLists = () => {
  const productCtx = useContext(ProductContext);
  const { products, isLoading, error } = productCtx;

  if (isLoading) {
    return (
      <div className="center">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <p className="error">{error}</p>;
  }

  if (!products || products.length === 0) {
    return <p className="emptystate">Found No Products</p>;
  }
  return (
    <div className="product-box">
      <ul className="product-list">
        {products.map((product) => (
          <ProductItems
            key={product.id}
            id={product.id}
            category={product.category}
            name={product.name}
            price={product.price}
            image={product.image}
            bestseller={product.bestseller}
          />
        ))}
      </ul>
    </div>
  );
};
