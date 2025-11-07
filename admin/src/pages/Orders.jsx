import { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  // ✅ Fetch all orders (Admin)
  const fetchOrders = async () => {
    try {
      if (!token) return null;

      const response = await axios.post(
        `${backendUrl}/api/order/list`,
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        setOrders(response.data.orders);
        toast.success("Orders fetched successfully");
      } else {
        toast.error("Failed to fetch orders");
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
      toast.error("Error fetching orders");
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // ✅ Update Order Status
  const updateStatus = async (orderId, newStatus) => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/order/status`,
        { orderId, status: newStatus },
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success("Order status updated!");
        fetchOrders();
      } else {
        toast.error("Failed to update status");
      }
    } catch (error) {
      console.error("Error updating status:", error);
      toast.error("Error updating order status");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center border-b p-6 bg-gray-100">
          <h2 className="text-2xl font-semibold text-gray-800">
            Order Management 🛍️
          </h2>
          <button
            onClick={fetchOrders}
            className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Refresh
          </button>
        </div>

        {/* Orders Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-200 text-gray-700 uppercase text-sm">
              <tr>
                <th className="p-4 border-b">Order ID</th>
                <th className="p-4 border-b">Customer Info</th>
                <th className="p-4 border-b">Address</th>
                <th className="p-4 border-b">Quantity</th>
                <th className="p-4 border-b">Payment</th>
                <th className="p-4 border-b">Amount</th>
                <th className="p-4 border-b">Status</th>
                <th className="p-4 border-b">Date</th>
                <th className="p-4 border-b text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {orders.length > 0 ? (
                orders.map((order) => (
                  <tr
                    key={order._id}
                    className="border-b hover:bg-gray-50 transition text-sm"
                  >
                    {/* Order ID */}
                    <td className="p-4 font-medium text-gray-800">
                      #{order._id.slice(-6)}
                    </td>

                    {/* Customer Info */}
                    <td className="p-4 text-gray-700">
                      <p className="font-semibold">
                        {order.address.firstName} {order.address.lastName}
                      </p>
                      <p className="text-gray-500 text-xs">
                        {order.address.email}
                      </p>
                      <p className="text-gray-500 text-xs">
                        {order.address.phoneNumber}
                      </p>
                    </td>

                    {/* Address */}
                    <td className="p-4 text-gray-600">
                      <p>
                        {order.address.street}, {order.address.city},{" "}
                        {order.address.state}
                      </p>
                      <p className="text-xs text-gray-500">
                        {order.address.country} - {order.address.zipCode}
                      </p>
                    </td>

                    {/* Items */}
                    <td className="p-4 text-gray-700">
                      {order.items.map((item, i) => (
                        <p key={i} className="text-xs">
                           {item.quantity}
                        </p>
                      ))}
                    </td>

                    {/* Payment Info */}
                    <td className="p-4">
                      <p
                        className={`text-xs font-medium ${
                          order.payment
                            ? "text-green-600"
                            : "text-yellow-600"
                        }`}
                      >
                        {order.paymentMethod}
                      </p>
                      <p
                        className={`text-xs ${
                          order.payment
                            ? "text-green-500"
                            : "text-yellow-500"
                        }`}
                      >
                        {order.payment ? "Paid" : "Unpaid"}
                      </p>
                    </td>

                    {/* Amount */}
                    <td className="p-4 text-gray-800 font-semibold">
                      ₹{order.amount}
                    </td>

                    {/* Status Dropdown */}
                    <td className="p-4">
                      <select
                        className="border border-gray-300 rounded-lg px-2 py-1 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                        value={order.status}
                        onChange={(e) =>
                          updateStatus(order._id, e.target.value)
                        }
                      >
                        <option value="order-placed">Order Placed</option>
                        <option value="Processing">Processing</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </td>

                    {/* Date */}
                    <td className="p-4 text-gray-500">
                      {new Date(order.date).toLocaleDateString()}
                    </td>

                    {/* Actions */}
                    <td className="p-4 text-center">
                      <button
                        onClick={() =>
                          toast.info("View details feature coming soon!")
                        }
                        className="text-blue-600 hover:text-blue-800 mr-3"
                      >
                        👁️
                      </button>
                      <button
                        onClick={() =>
                          updateStatus(order._id, "Cancelled")
                        }
                        className="text-red-600 hover:text-red-800"
                      >
                        ❌
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="9"
                    className="text-center py-10 text-gray-500 font-medium"
                  >
                    No orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
