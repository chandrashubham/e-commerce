import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { Link } from "react-router-dom";
import axios, { all } from "axios";

const Orders = () => {
  const { products, currency,orders, cartItems,backendURL,token } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);
  const loadOrderData=async()=>{
    try {
      if(!token){
        return null;
      }
      const response=await axios.post(`${backendURL}/api/order/userorders`,{},{headers:{token}});
      // console.log(response.data);
      if(response.data.success){
let allOrderItems=[];
response.data.orders.map((order)=>{
order.items.map((item)=>{
item['status']=order.status;
item['payment']=order.payment;
item['paymentMethod']=order.paymentMethod;
item['date']=order.date;

allOrderItems.push(item);

})
}

)
setOrderData(allOrderItems.reverse());
      }
    } catch (error) {
      console.log(error);

    }
  }
  useEffect(()=>{
   
      loadOrderData();
    },[token]);

  // If you have actual orders stored in context
  useEffect(() => {
    if (orders && orders.length > 0) {
      setOrderData(orders);
    } 
  }, [orders, cartItems]);

  return (
    <div className="max-w-6xl mx-auto px-2 sm:px-4 py-6 sm:py-8">
      <div className="mb-6">
        <Title text1="YOUR" text2="ORDERS" />
      </div>

      {orderData.length === 0 ? (
        <>
        <p className="text-gray-500 text-center">You have no orders yet.</p>
        <div className="flex justify-center ">
        <Link
                to="/collection"
                className="inline-block mt-3 px-4 sm:px-6 py-2 sm:py-3 bg-black text-white rounded hover:bg-gray-800 transition"
              >
                Continue Shopping
              </Link>
              </div>
      </>
      ) : (
        <div className="space-y-4">
          {orderData.map((item, index) => {
            const product = products.find((p) => p._id === item._id);
            if (!product) return null;

            return (
              <div
                key={`${item._id}-${index}`}
                className="p-4 border rounded-lg flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
              >
                {/* Product info */}
                <div className="flex items-center gap-4">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h2 className="text-sm sm:text-base font-medium">{product.name}</h2>
                    <p className="text-xs text-gray-500">
                      Size: {item.size} | Qty: {item.quantity}
                    </p>
                    <p className="text-xs text-gray-500">
                      Ordered on: {new Date(item.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                {/* Price + status */}
                <div className="flex flex-col items-start sm:items-end text-sm sm:text-base">
                  <p className="font-semibold">
                    {currency}
                    {product.price * item.quantity}
                  </p>
                  <p
                    className={`text-xs mt-1 ${
                      item.status === "Delivered"
                        ? "text-green-600"
                        : "text-yellow-600"
                    }`}
                  >
                    Status: {item.status || "Processing"}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Orders;
