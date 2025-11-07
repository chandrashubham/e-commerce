import jwt from "jsonwebtoken";
import UserModel from "../models/UserModel.js";

// 🧩 Middleware-like helper to get userId from token
const getUserIdFromToken = (req) => {
  const token = req.headers.token;
  if (!token) throw new Error("No token provided");
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded.id; // ensure you signed token with {id: user._id}
};

// 🛒 Add to cart
const addToCart = async (req, res) => {
  try {
    const userId = getUserIdFromToken(req);
    const { item_id } = req.body;

    const userData = await UserModel.findById(userId);
    let cartData = userData.cartData || {};

    if (cartData[item_id]) {
      cartData[item_id] += 1;
    } else {
      cartData[item_id] = 1;
    }

    await UserModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "Item added to cart successfully", cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error while adding item to cart" });
  }
};

// 🧩 Update or remove
const updateCart = async (req, res) => {
  try {
    const userId = getUserIdFromToken(req);
    const { item_id, quantity } = req.body;

    const userData = await UserModel.findById(userId);
    let cartData = userData.cartData || {};

    if (quantity > 0) {
      cartData[item_id] = quantity;
    } else {
      delete cartData[item_id];
    }

    await UserModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "Cart updated successfully", cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error while updating cart" });
  }
};

// 🧾 Get user cart
const getUserCart = async (req, res) => {
  try {
    const userId = getUserIdFromToken(req);
    const userData = await UserModel.findById(userId);
    const cartData = userData.cartData || {};
    res.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error while fetching cart data" });
  }
};

export { addToCart, updateCart, getUserCart };
