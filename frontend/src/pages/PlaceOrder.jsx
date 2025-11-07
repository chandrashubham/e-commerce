import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const {
    products,
    cartItems,
    currency,
    deliveryFee,
    backendURL,
    token,
    navigate,
  } = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);
  const [method, setMethod] = useState("cod");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phoneNumber: "",
  });

  // Handle input changes
  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  // Extract cart data
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

  // 🧾 SUBMIT ORDER HANDLER
  const submitHandle = async (e) => {
    e.preventDefault();

    for (const key in formData) {
      if (!formData[key]) {
        toast.error("Please fill all required fields.");
        return;
      }
    }

    if (cartData.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }

    const orderData = {
      userId: "",
      items: cartData,
      amount: totalPrice + deliveryFee,
      address: formData,
    };

    try {
      setLoading(true);
      let response;

      // COD - Directly Place Order
      if (method === "cod") {
        response = await axios.post(`${backendURL}/api/order/COD`, orderData, {
          headers: { token },
        });

   if (response.data.success) {
  toast.success("Order Placed Successfully!");
  navigate("/order-success", {
    state: {
      orderId: response.data.orderId || "N/A",
      totalAmount: totalPrice + deliveryFee,
    },
  });
}

        } else {
          toast.error(response.data.message || "Order failed. Try again.");
        }
      // }

      // Stripe Payment
      // else if (method === "stripe") {
      //   const stripeSession = await axios.post(
      //     `${backendURL}/api/payment/create-stripe-session`,
      //     orderData,
      //     { headers: { token } }
      //   );

      //   if (stripeSession.data.url) {
      //     window.location.href = stripeSession.data.url; // Redirect to Stripe Checkout
      //   } else {
      //     toast.error("Unable to initiate Stripe payment.");
      //   }
      // }

      // Razorpay Payment
      // else if (method === "razorpay") {
      //   const razorpayOrder = await axios.post(
      //     `${backendURL}/api/payment/create-razorpay-order`,
      //     orderData,
      //     { headers: { token } }
      //   );

      //   if (!razorpayOrder.data.success) {
      //     toast.error("Failed to initialize Razorpay order.");
      //     return;
      //   }

        // const { orderId, amount, key_id } = razorpayOrder.data;

        // Open Razorpay Checkout
        // const options = {
        //   key: key_id,
        //   amount: amount,
        //   currency: "INR",
        //   name: "Your Store",
        //   description: "Order Payment",
        //   order_id: orderId,
        //   handler: async function (response) {
        //     toast.success("Payment Successful!");
        //     navigate("/orders");
        //   },
        //   prefill: {
        //     name: `${formData.firstName} ${formData.lastName}`,
        //     email: formData.email,
        //     contact: formData.phoneNumber,
        //   },
        //   theme: {
        //     color: "#121212",
        //   },
        // };

        // const rzp = new window.Razorpay(options);
        // rzp.open();
      // }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong while placing order.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-3 sm:px-5 py-6 sm:py-10">
      <form
        onSubmit={submitHandle}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-6 rounded-xl shadow-md"
      >
        {/* Left Section - Delivery Form */}
        <div className="p-4 border-r border-gray-200">
          <h2 className="text-2xl font-semibold mb-5 text-gray-800">
            Delivery Information
          </h2>

          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <input
              onChange={onChangeHandler}
              name="firstName"
              value={formData.firstName}
              type="text"
              required
              placeholder="First Name"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              onChange={onChangeHandler}
              name="lastName"
              value={formData.lastName}
              type="text"
              required
              placeholder="Last Name"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <input
            onChange={onChangeHandler}
            name="email"
            value={formData.email}
            type="email"
            required
            placeholder="Email Address"
            className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            onChange={onChangeHandler}
            name="street"
            value={formData.street}
            type="text"
            required
            placeholder="Street Address"
            className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <input
              onChange={onChangeHandler}
              name="city"
              value={formData.city}
              type="text"
              required
              placeholder="City"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              onChange={onChangeHandler}
              name="state"
              value={formData.state}
              type="text"
              required
              placeholder="State"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <input
              onChange={onChangeHandler}
              name="zipCode"
              value={formData.zipCode}
              type="number"
              required
              placeholder="Zip Code"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              onChange={onChangeHandler}
              name="country"
              value={formData.country}
              type="text"
              required
              placeholder="Country"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <input
            onChange={onChangeHandler}
            name="phoneNumber"
            value={formData.phoneNumber}
            type="number"
            required
            placeholder="Phone Number"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Right Section - Cart Summary and Payment */}
        <div className="p-4 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-5 text-gray-800">
              Your Cart Summary
            </h2>

            <div className="bg-gray-50 rounded-lg p-4 mb-5 shadow-inner">
              <div className="flex justify-between mb-2">
                <p>Subtotal</p>
                <span>
                  {currency}
                  {totalPrice}.00
                </span>
              </div>
              <div className="flex justify-between mb-2">
                <p>Delivery Fee</p>
                <span>
                  {currency}
                  {deliveryFee}.00
                </span>
              </div>
              <div className="border-t pt-2 flex justify-between text-lg font-semibold">
                <p>Total</p>
                <span className="text-green-600">
                  {currency}
                  {totalPrice + deliveryFee}.00
                </span>
              </div>
            </div>

            <h3 className="text-lg font-semibold mb-3 text-gray-800">
              Payment Method
            </h3>
            <div className="flex flex-wrap gap-3">
              {/* Razorpay */}
              {/* <div
                onClick={() => setMethod("razorpay")}
                className={`cursor-pointer flex items-center gap-2 p-2 border rounded-md w-[150px] sm:w-[170px] transition-all ${
                  method === "razorpay"
                    ? "border-green-400 bg-green-50"
                    : "border-gray-300"
                }`}
              >
                <div
                  className={`w-3 h-3 rounded-full border ${
                    method === "razorpay"
                      ? "bg-green-400 border-green-500"
                      : "border-gray-400"
                  }`}
                ></div>
                <img
                  src={assets.razorpay_logo}
                  alt="Razorpay"
                  className="h-5"
                />
              </div> */}

              {/* Stripe */}
              {/* <div
                onClick={() => setMethod("stripe")}
                className={`cursor-pointer flex items-center gap-2 p-2 border rounded-md w-[150px] sm:w-[170px] transition-all ${
                  method === "stripe"
                    ? "border-green-400 bg-green-50"
                    : "border-gray-300"
                }`}
              >
                <div
                  className={`w-3 h-3 rounded-full border ${
                    method === "stripe"
                      ? "bg-green-400 border-green-500"
                      : "border-gray-400"
                  }`}
                ></div>
                <img src={assets.stripe_logo} alt="Stripe" className="h-5" />
              </div> */}

              {/* COD */}
              <div
                onClick={() => setMethod("cod")}
                className={`cursor-pointer flex items-center gap-2 p-2 border rounded-md w-[150px] sm:w-[170px] transition-all ${
                  method === "cod"
                    ? "border-green-400 bg-green-50"
                    : "border-gray-300"
                }`}
              >
                <div
                  className={`w-3 h-3 rounded-full border ${
                    method === "cod"
                      ? "bg-green-400 border-green-500"
                      : "border-gray-400"
                  }`}
                ></div>
                <p className="text-sm font-medium text-gray-700">
                  Pay on Delivery
                </p>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`mt-6 w-full ${
              loading ? "bg-gray-500 cursor-not-allowed" : "bg-black cursor-pointer"
            } text-white font-semibold py-3 rounded-lg hover:bg-gray-800 transition duration-200`}
          >
            {loading ? "Processing..." : "Place Order"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;
