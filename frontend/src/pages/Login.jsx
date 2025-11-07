import { useState,useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [currentState, setCurrentState] = useState("login");
  const {token,setToken,navigate,backendURL}=useContext(ShopContext);
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const submitHandler=async(e)=>{
    e.preventDefault();
    try {
     if(currentState==="sign-up"){
      const response=await axios.post(`${backendURL}/api/user/signup`,{name,email,password});
      if(response.data.success){
        setToken(response.data.token);
        localStorage.setItem("token",response.data.token);
        toast.success("Signup Successful");
      }else{
        toast.error(response.data.message);
      }
     }else{
      const response=await axios.post(`${backendURL}/api/user/login`,{email,password});
      if(response.data.success){
        setToken(response.data.token);
        localStorage.setItem("token",response.data.token);
        toast.success("Login Successful");
      }else{
        toast.error(response.data.message);
      }

     }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }
  useEffect(()=>{
    if(token){
      navigate("/");
    }
  },[token]);


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form onSubmit={submitHandler} className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          {currentState === "sign-up" ? "Create Account" : "Login to Your Account"}
        </h2>

        {currentState === "sign-up" && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2" >
              Full Name
            </label>
            <input
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
              type="text"
              required
              placeholder="User Name"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Email Address
          </label>
          <input
          onChange={(e)=>{setEmail(e.target.value)}}
          value={email}
            type="email"
            required
            placeholder="Email"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Password
          </label>
          <input
          onChange={(e)=>{setPassword(e.target.value)}}
          value={password}
            type="password"
            required
            placeholder="Password"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition cursor-pointer"
        >
          {currentState === "sign-up" ? "Sign-up" : "Login"}
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          {currentState === "sign-up" ? (
            <>
              Already have an account?{" "}
              <button
                type="button"
                className="text-black underline cursor-pointer"
                onClick={() => setCurrentState("login")}
              >
                Login here
              </button>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <button
                type="button"
                className="text-black underline cursor-pointer"
                onClick={() => setCurrentState("sign-up")}
              >
                Sign up here
              </button>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
