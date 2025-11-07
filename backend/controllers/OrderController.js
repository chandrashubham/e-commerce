import UserModel from "../models/UserModel.js";
import OrderModel from "../models/OrderModel.js";
import Stripe from "stripe";
// import Razorpay from "razorpay";

// ⚙️ Initialize Stripe and Razorpay with environment keys
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
// const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID,
//   key_secret: process.env.RAZORPAY_KEY_SECRET,
// });

// ✅ COD: Cash On Delivery
const placeOrderCOD = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    if (!userId || !items || !amount || !address) {
      return res.json({ success: false, message: "Incomplete order data" });
    }

    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };

    const newOrder = new OrderModel(orderData);
    await newOrder.save();

    // Empty user's cart after placing order
    await UserModel.findByIdAndUpdate(userId, { cartData: {} });

    res.json({ success: true, message: "Order placed successfully via COD" });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Error while placing COD order" });
  }
};

// ✅ Stripe Payment Order
const placeOrderStripe = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    if (!userId || !items || !amount || !address) {
      return res.json({ success: false, message: "Incomplete order data" });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100),
      currency: "inr",
      payment_method_types: ["card"],
      metadata: { userId },
    });

    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: "Stripe",
      payment: true,
      date: Date.now(),
    };

    const newOrder = new OrderModel(orderData);
    await newOrder.save();

    // Empty user's cart
    await UserModel.findByIdAndUpdate(userId, { cartData: {} });

    res.json({
      success: true,
      message: "Stripe order created successfully",
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Error while processing Stripe order" });
  }
};

// ✅ Razorpay Order
// const placeOrderRazorpay = async (req, res) => {
//   try {
//     const { userId, items, amount, address } = req.body;

//     if (!userId || !items || !amount || !address) {
//       return res.json({ success: false, message: "Incomplete order data" });
//     }

//     const options = {
//       amount: Math.round(amount * 100),
//       currency: "INR",
//       receipt: `receipt_${Date.now()}`,
//     };

//     const order = await razorpay.orders.create(options);

//     const orderData = {
//       userId,
//       items,
//       address,
//       amount,
//       paymentMethod: "Razorpay",
//       payment: true,
//       date: Date.now(),
//     };

//     const newOrder = new OrderModel(orderData);
//     await newOrder.save();

//     // Empty user's cart
//     await UserModel.findByIdAndUpdate(userId, { cartData: {} });

//     res.json({
//       success: true,
//       message: "Razorpay order created successfully",
//       orderId: order.id,
//       amount: order.amount,
//       currency: order.currency,
//     });
//   } catch (error) {
//     console.error(error);
//     res.json({
//       success: false,
//       message: "Error while processing Razorpay order",
//     });
//   }
// };

// ✅ Admin: Get All Orders
const allOrders = async (req, res) => {
  try {
    const orders = await OrderModel.find({}).sort({ date: -1 });
    res.json({ success: true, orders });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Error fetching all orders" });
  }
};

// ✅ User: Get Their Orders
const userOrders = async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.json({ success: false, message: "User ID is required" });
    }

    const orders = await OrderModel.find({ userId }).sort({ date: -1 });
    res.json({ success: true, orders });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Error fetching user orders" });
  }
};

// ✅ Admin: Update Order Status
const updateOrderStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;

    if (!orderId || !status) {
      return res.json({ success: false, message: "Order ID or Status missing" });
    }

    await OrderModel.findByIdAndUpdate(orderId, { status });

    res.json({ success: true, message: "Order status updated successfully" });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Error updating order status" });
  }
};

export {
  placeOrderCOD,
//   placeOrderStripe,
//   placeOrderRazorpay,
  allOrders,
  userOrders,
  updateOrderStatus,
};
