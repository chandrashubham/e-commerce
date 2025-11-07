import { createContext,useEffect, useState } from "react";
// import {products} from '../assets/assets'
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";


export const ShopContext=createContext();

const ShopContextProvider=({children})=>{
    const currency="₹ ";
    const deliveryFee=10;
    const [search,setSearch]=useState('');
    const [showSearch, setShowSearch]=useState(false);
    const [cartItems,setCartItems]=useState({});
    const [products,setProducts]=useState([]);
    const [token,setToken]=useState("");
    const navigate=useNavigate();
    const backendURL=import.meta.env.VITE_BACKEND_URL;
    

const addToCart = async (itemId) => {
  let cartData = { ...cartItems };

  cartData[itemId] = (cartData[itemId] || 0) + 1;
  setCartItems(cartData);

  if (token) {
    try {
      await axios.post(
        `${backendURL}/api/cart/add`,
        { item_id: itemId },
        { headers: { token } }
      );
    } catch (error) {
      console.log(error);
      toast.error("Failed to add to cart");
    }
  }
};

const reduceQuantity = async (itemId) => {
  let cartData = { ...cartItems };
  const newQuantity = (cartData[itemId] || 0) - 1;

  if (newQuantity > 0) {
    cartData[itemId] = newQuantity;
  } else {
    delete cartData[itemId];
  }

  setCartItems(cartData);

  if (token) {
    try {
      await axios.post(
        `${backendURL}/api/cart/update`,
        { item_id: itemId, quantity: newQuantity },
        { headers: { token } }
      );
    } catch (error) {
      console.log(error);
      toast.error("Failed to update cart");
    }
  }
};

const removeCartItem = async (itemId) => {
  let cartData = { ...cartItems };
  delete cartData[itemId];
  setCartItems(cartData);

  if (token) {
    try {
      await axios.post(
        `${backendURL}/api/cart/update`,
        { item_id: itemId, quantity: 0 },
        { headers: { token } }
      );
    } catch (error) {
      console.log(error);
      toast.error("Failed to remove from cart");
    }
  }
};

       
         
     const countCartItem = () => {
  let cartCount = 0;
  for (const item in cartItems) {
    if (cartItems[item] > 0) {
      cartCount += cartItems[item];
    }
  }
  return cartCount;
};
    const fetchProducts=async()=>{
        try { 
            const response=await axios.get(`${backendURL}/api/product/list`);
            if(response.data.success){
                setProducts(response.data.products);
            }else{
                toast.error(response.data.message);
            }
          
        } catch (error) {
            console.log(error);
            toast.error(error.message);

        }
    } 
    const getUserCart=async(token)=>{
        try {
            const response=await axios.post(`${backendURL}/api/cart/get`,{},{headers:{token}});
            if(response.data.success){
                setCartItems(response.data.cartData);
            }
        } catch (error) {
             console.log(error);
            toast.error(error.message);
        }
    }

    useEffect(()=>{
fetchProducts();
    },[products])
    useEffect(()=>{
        if(!token&&localStorage.getItem("token")){
            setToken(localStorage.getItem("token"));
            getUserCart(localStorage.getItem("token"));
        }
    },[])
   
   const value={
        products,currency,deliveryFee,showSearch,setShowSearch,search,setSearch,cartItems,setCartItems,addToCart,countCartItem,reduceQuantity,removeCartItem,backendURL,token,setToken,navigate
    }
   
    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;