import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      setLatestProducts(products.slice(0, 10));
    }
  }, [products]);

  return (
    <>
      <div className="text-center">
        <Title text1="LATEST" text2="COLLECTION" />
        <p className="text-sm text-gray-600 sm:text-[1rem]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
          dolor unde, consequatur nostrum.
        </p>
      </div>

      {/* latest products */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-6 mt-10 px-4">
        {latestProducts.map((product) => (
          <ProductItem
            key={product._id}
            id={product._id}
            name={product.name}
            images={product.images}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
};

export default LatestCollection;
