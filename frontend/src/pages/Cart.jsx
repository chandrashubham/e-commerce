import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import Title from "../components/Title";

const Cart = () => {
  const {
    products,
    currency,
    cartItems,
    addToCart,
    reduceQuantity,
    removeCartItem,
    deliveryFee,
  } = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  // ✅ simplified: no size logic
  const cartItemsData = () => {
    const tempData = [];
    for (const productId in cartItems) {
      if (cartItems[productId] > 0) {
        tempData.push({
          _id: productId,
          quantity: cartItems[productId],
        });
      }
    }
    setCartData(tempData);
  };

  useEffect(() => {
    cartItemsData();
  }, [cartItems]);

  const totalPrice = cartData.reduce((acc, item) => {
    const product = products.find((p) => p._id === item._id);
    if (!product) return acc;
    return acc + product.price * item.quantity;
  }, 0);

  return (
    <div className="max-w-6xl mx-auto px-2 sm:px-4 py-6 sm:py-8">
      <div className="mb-4 sm:mb-6">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>

      {cartData.length === 0 ? (
        <>
          <div className="flex items-center justify-end w-full">
            <div className="text-right mt-4 sm:mt-6 gap-3.5 w-full sm:w-fit">
              <p className="flex justify-between text-base sm:text-xl font-semibold">
                Sub-Total:
                <span className="text-green-600">
                  {currency}
                  {totalPrice}.00
                </span>
              </p>
              <hr className="mb-2 sm:mb-4" />
              <p className="flex justify-between text-base sm:text-xl font-semibold">
                Delivery-Fee:
                <span className="text-green-600">
                  {currency}
                  {deliveryFee}.00
                </span>
              </p>
              <hr className="mb-2 sm:mb-4" />
              <p className="flex justify-between text-base sm:text-xl font-semibold">
                Total:
                <span className="text-green-600">
                  {currency}
                  {0}.00
                </span>
              </p>
              <hr className="mb-2 sm:mb-4" />
            </div>
          </div>
          <div className="text-center">
            <p className="text-gray-600 mb-4">Your cart is empty.</p>
            <Link
              to="/collection"
              className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
            >
              Continue Shopping
            </Link>
          </div>
        </>
      ) : (
        <>
          {/* ✅ No size column */}
          <div className="grid grid-cols-3 sm:grid-cols-4 font-medium text-gray-700 mb-2 border-b pb-2 text-xs sm:text-sm">
            <p className="col-span-2 sm:col-span-2">Product</p>
            <p>Quantity</p>
            <p className="text-right">Subtotal</p>
          </div>

          {cartData.map((item) => {
            const product = products.find((p) => p._id === item._id);
            if (!product) return null;

            return (
              <div
                key={item._id}
                className="grid grid-cols-3 sm:grid-cols-4 items-center py-3 sm:py-4 border-b text-xs sm:text-sm gap-2"
              >
                <div className="flex items-center gap-2 sm:gap-4 col-span-2 sm:col-span-2">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-12 h-12 sm:w-20 sm:h-20 object-cover rounded"
                  />
                  <div>
                    <h2 className="text-xs sm:text-sm font-medium">
                      {product.name}
                    </h2>
                    <p className="text-gray-500 text-[10px] sm:text-xs">
                      Price: {currency}
                      {product.price}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 sm:gap-2 justify-center">
                  <button
                    onClick={() => reduceQuantity(item._id)}

                    className="px-1 sm:px-2 py-0.5 sm:py-1 border rounded cursor-pointer"
                  >
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    onClick={() => addToCart(item._id)}
                    className="px-1 sm:px-2 py-0.5 sm:py-1 border rounded cursor-pointer"
                  >
                    +
                  </button>
                  <button
                   onClick={() => removeCartItem(item._id)}

                    className="px-1 sm:px-2 py-0.5 sm:py-1 cursor-pointer"
                  >
                    <img src={assets.bin_icon} alt="" className="w-4 sm:w-5" />
                  </button>
                </div>

                <div className="text-right font-medium">
                  {currency}
                  {product.price * item.quantity}
                </div>
              </div>
            );
          })}

          <div className="flex items-center justify-end">
            <div className="text-right mt-4 sm:mt-6 gap-3.5 w-full sm:w-fit">
              <p className="flex justify-between text-base sm:text-xl font-semibold">
                Sub-Total:
                <span className="text-green-600">
                  {currency}
                  {totalPrice}.00
                </span>
              </p>
              <hr className="mb-2 sm:mb-4" />
              <p className="flex justify-between text-base sm:text-xl font-semibold">
                Delivery-Fee:
                <span className="text-green-600">
                  {currency}
                  {deliveryFee}.00
                </span>
              </p>
              <hr className="mb-2 sm:mb-4" />
              <p className="flex justify-between text-base sm:text-xl font-semibold">
                Total:
                <span className="text-green-600">
                  {currency}
                  {totalPrice + deliveryFee}.00
                </span>
              </p>
              <hr className="mb-2 sm:mb-4" />
              <Link
                to="/place-order"
                className="inline-block mt-3 px-4 sm:px-6 py-2 sm:py-3 bg-black text-white rounded hover:bg-gray-800 transition"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
