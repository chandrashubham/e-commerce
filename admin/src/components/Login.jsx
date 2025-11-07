import { useState } from "react"
import axios from "axios"
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import { EyeIcon, EyeOffIcon } from "lucide-react";

const Login = ({setToken}) => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

    const onSubmitHandler = async(e) => {
       try {
        e.preventDefault();
        const response=await axios.post(`${backendUrl}/api/user/admin`,{email,password});
        console.log(response)
        if(response.data.success){
            setToken(response.data.token);
        }else{
        toast.error("Invalid Credentials");
        }
        
       } catch (error) {
        console.log(error.message)
       }
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Admin <span className="text-indigo-600">Login</span>
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Welcome back to <span className="font-semibold">ArtifyHub Dashboard</span>
        </p>

        <form onSubmit={onSubmitHandler} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
            onChange={(e)=>{setEmail(e.target.value)}}
            value={email}
              type="email"
              placeholder="admin@artifyhub.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

        <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Password
      </label>
      <div className="relative">
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type={showPassword ? "text" : "password"}
          placeholder="********"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none pr-10"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
        >
          {showPassword ? (
            <EyeOffIcon size={20} />
          ) : (
            <EyeIcon size={20} />
          )}
        </button>
      </div>
    </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 cursor-pointer hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} ArtifyHub Admin Panel</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
