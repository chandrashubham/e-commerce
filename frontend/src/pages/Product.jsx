import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  // ✅ Fetch product details based on productId
  const fetchProductData = async () => {
    const selectedProduct = products.find((item) => item._id === productId);
    if (selectedProduct) {
      setProductData(selectedProduct);
      setImage(selectedProduct.images?.[0] || selectedProduct.image?.[0]);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [products, productId]);

  // ✅ Handle Buy Now: add to cart first, then navigate
  const handleBuyNow = () => {
    if (!productData) return;

    // If the product has sizes, ensure one is selected
    if (productData.sizes?.length > 0 && !size) {
      alert("Please select a size before proceeding.");
      return;
    }

    // 1️⃣ Add to cart first
    addToCart(productData._id, size);

    // 2️⃣ Redirect to place-order page
    navigate("/place-order");
  };

  if (!productData) {
    return <div className="text-center py-10 text-gray-600">Loading...</div>;
  }

  return (
    <>
      <div className="pt-10 flex flex-col sm:flex-row gap-8 sm:gap-12 px-4 sm:px-10">
        {/* LEFT SIDE: images */}
        <div className="flex flex-col-reverse sm:flex-row gap-4 sm:gap-6 w-full sm:w-1/2">
          <div className="flex sm:flex-col gap-2 sm:gap-4 w-1/5 sm:w-1/6">
            {(productData.images || productData.image || []).map((item, index) => (
              <img
                key={index}
                src={item}
                alt="thumbnail"
                onClick={() => setImage(item)}
                className={`cursor-pointer border rounded-md object-cover transition-all duration-200 ${
                  image === item ? "border-indigo-500 scale-105" : "border-gray-200"
                }`}
              />
            ))}
          </div>

          {/* Main image */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src={image}
              alt={productData.name}
              className="w-[90%] h-auto rounded-lg shadow-md object-cover"
            />
          </div>
        </div>

        {/* RIGHT SIDE: product details */}
        <div className="w-full sm:w-1/2 flex flex-col gap-4">
          <h1 className="text-2xl sm:text-3xl font-semibold">{productData.name}</h1>

          {/* Ratings */}
          <div className="flex items-center gap-2">
            {[...Array(4)].map((_, i) => (
              <img key={i} src={assets.star_icon} alt="star" className="w-4" />
            ))}
            <img src={assets.star_dull_icon} alt="star" className="w-4" />
          </div>

          {/* Price */}
          <p className="text-xl text-indigo-600 font-bold">
            {currency}
            {productData.price}
          </p>

          {/* Description */}
          <p className="text-gray-600 text-sm sm:text-base">
            {productData.description}
          </p>

          {/* Size selection */}
          {productData?.sizes && productData.sizes.length > 0 && (
            <div className="mt-2">
              <p className="font-semibold mb-2">Select Size:</p>
              <div className="flex gap-2">
                {productData.sizes.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSize(item)}
                    className={`cursor-pointer px-3 py-1 border rounded-md transition-all ${
                      item === size
                        ? "border-indigo-600 bg-indigo-50"
                        : "border-gray-300 hover:border-indigo-400"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={() => addToCart(productData._id, size)}
              className="bg-indigo-600 cursor-pointer text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition"
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="border cursor-pointer border-indigo-600 text-indigo-600 px-6 py-2 rounded-md hover:bg-indigo-50 transition"
            >
              Buy Now
            </button>
          </div>

          <hr className="w-4/5 my-4" />

          {/* Highlights */}
          <div className="flex flex-col text-sm gap-1.5 text-gray-700">
            <p>✅ 100% Original Products</p>
            <p>💵 Cash on Delivery Available</p>
            <p>🔄 Easy Return & Exchange Policy</p>
          </div>
        </div>
      </div>

      {/* ************ Description & Related Products ********************** */}
      <div className="mt-20 px-4">
        <div className="flex gap-1.5">
          <b className="border text-sm px-4 py-2">Description</b>
          <p className="border text-sm px-4 py-2">Reviews (200)</p>
        </div>
        <div className="text-gray-700 text-sm sm:text-base w-[90%] sm:w-[70%] mt-2">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis beatae
            veniam animi velit nostrum repellat eius blanditiis quidem rerum. Odio
            quaerat quibusdam distinctio, quas sapiente hic voluptatum saepe fugiat.
          </p>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-10">
        <RelatedProducts
          category={productData.category}
          subcategory={productData.subcategory}
        />
      </div>
    </>
  );
};

export default Product;
