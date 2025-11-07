import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";


const SearchBar = () => {
    const {search,setSearch,showSearch,setShowSearch} =useContext(ShopContext);
    const [visible,setVisible]=useState(false);
    const location=useLocation();
    useEffect(()=>{
       if(location.pathname.includes('collection')){
        setVisible(true);
       }else{
        setVisible(false);
       }
    },[location])
  return showSearch && visible ?(
    <div className=" text-center flex items-center justify-center mt-2.5 gap-2">
        <div className="border border-gray-200 rounded-2xl text-sm sm:font-semibold text-center flex items-center justify-between w-[60%]">
            <input value={search} onChange={((e)=>setSearch(e.target.value))} type="text" placeholder="Search" className="w-full p-3.5 rounded-2xl cursor-text focus:outline-none"/>
            <img src={assets.search_icon} alt="search" className="w-4 mr-2.5 cursor-pointer" />
        </div>
        <img src={assets.cross_icon} alt="cross" className="w-4 cursor-pointer" onClick={()=>{setShowSearch(false);setSearch('')}} />

    </div>
  ):null;
}

export default SearchBar