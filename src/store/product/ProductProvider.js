import { useEffect, useState } from "react";
import ProductContext from "./product-context";

const FIREBASE_DOMAIN = "https://e-commerce-eab44-default-rtdb.firebaseio.com";

export const ProductProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAllProducts = async () => {
      setIsLoading(true);
      const response = await fetch(`${FIREBASE_DOMAIN}/Products.json`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Could not fetch products.");
      }

      const transformedProducts = [];

      for (const key in data) {
        const productObj = {
          id: key,
          ...data[key],
        };

        transformedProducts.push(productObj);
      }

      setProducts(transformedProducts);
      setIsLoading(false);
    };

    getAllProducts().catch((error) => {
      setIsLoading(false);
      setError(error.message);
    });
  }, []);

  const productContext = {
    products: products,
    isLoading: isLoading,
    error: error,
  };

  return (
    <ProductContext.Provider value={productContext}>
      {props.children}
    </ProductContext.Provider>
  );
};
