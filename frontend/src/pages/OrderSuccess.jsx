import { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const OrderSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { orderId, totalAmount } = location.state || {};
  const [countdown, setCountdown] = useState(5); // seconds until redirect

  // Countdown logic
  useEffect(() => {
    const timer =
      countdown > 0 &&
      setInterval(() => setCountdown((prev) => prev - 1), 1000);

    if (countdown === 0) {
      navigate("/orders");
    }

    return () => clearInterval(timer);
  }, [countdown, navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="bg-white shadow-xl rounded-2xl p-8 sm:p-10 max-w-md text-center animate-fade-in">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-16 h-16 text-green-500 animate-bounce" />
        </div>

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
          Order Placed Successfully 🎉
        </h1>

        <p className="text-gray-600 mb-6">
          Thank you for your order! We’ve received it and will start processing soon.
        </p>

        {/* Order Details */}
        {orderId && (
          <div className="bg-gray-100 p-3 rounded-lg mb-6 text-sm">
            <p className="text-gray-700 font-medium">
              <span className="text-gray-500">Order ID:</span> {orderId}
            </p>
            {totalAmount && (
              <p className="text-gray-700 font-medium mt-1">
                <span className="text-gray-500">Total Amount:</span> ₹{totalAmount}
              </p>
            )}
          </div>
        )}

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
          <Link
            to="/orders"
            className="px-5 py-2.5 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition"
          >
            View My Orders
          </Link>
          <Link
            to="/collection"
            className="px-5 py-2.5 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition"
          >
            Continue Shopping
          </Link>
        </div>

        {/* Countdown Text */}
        <p className="text-sm text-gray-500">
          Redirecting to your orders page in{" "}
          <span className="font-semibold text-gray-700">{countdown}</span> seconds...
        </p>
      </div>
    </div>
  );
};

export default OrderSuccess;
