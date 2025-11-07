import { Routes,Route } from "react-router-dom"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Add from "../src/pages/Add.jsx"
import List from "../src/pages/List.jsx"
import Orders from "../src/pages/Orders.jsx"
import Login from "./components/Login.jsx"
import { useEffect, useState } from "react"
 import { ToastContainer } from 'react-toastify';
export const backendUrl = import.meta.env.VITE_BACKEND_URL;



const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : "");
  useEffect(()=>{
    localStorage.setItem('token',token);
  },[token])
  return (
    <>
    <ToastContainer/>
    {token===""?<Login setToken={setToken}/>:
      <>

    <Navbar setToken={setToken}/>
 <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
  {/* Left Sidebar */}
    <HeroSection />


  {/* Right Content Area */}
  <div className="flex-1 p-6 overflow-y-auto">
    <Routes>
      <Route path="/add" element={<Add token={token} />} />
      <Route path="/list" element={<List token={token}/>} />
      <Route path="/orders" element={<Orders token={token}/>} />
    </Routes>
  </div>
</div>

    </>
    }
    </>
    
  )
}

export default App