import { NavLink,Link } from 'react-router-dom'
import {assets} from '../assets/assets.js'
import { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext.jsx';

const Navbar = () => {
   const [visible,setVisible]=useState(false);
   const {setShowSearch,countCartItem,setCartItems,token,navigate,setToken} =useContext(ShopContext);
   const logout=()=>{
      localStorage.removeItem("token");
      setToken("");  
      setCartItems({});
      navigate('/login');
   }

  return (
    <>
    <div className='py-3 flex justify-between items-center '>
    <Link to='/'><img src={assets.logo} alt="logo" className='w-34' /></Link>
    <ul  className='hidden sm:flex gap-8 font-medium'>  
         <NavLink to='/' className='flex flex-col justify-center items-center'>
            <p> HOME</p>
         <hr className='hidden w-[2.6vw] h-[2px] bg-gray-500' />
         </NavLink>
        <NavLink to='/collection' className='flex flex-col justify-center items-center'>
           <p> COLLECTION</p>
        <hr className='hidden w-[2.6vw] h-[2px] bg-gray-500' />
        </NavLink>
        <NavLink to='/about' className='flex flex-col justify-center items-center'>
           <p> ABOUT</p>
        <hr className='hidden w-[2.6vw] h-[2px] bg-gray-500' />
        </NavLink>
        <NavLink to='/contact' className='flex flex-col justify-center items-center'>
           <p> CONTACT</p>
        <hr className='hidden w-[2.6vw] h-[2px] bg-gray-500' />
        </NavLink>
    </ul>
    <div className='flex gap-5 justify-center items-center'>
       
    <img src={assets.search_icon} alt="search" className='w-[1.4rem] cursor-pointer' onClick={()=>setShowSearch(true)} />

      <div className='group relative'>
      
           <img onClick={()=> token?null:navigate('/login')} src={assets.profile_icon} alt="profile" className='w-[1.4rem] cursor-pointer ' />
         {
            token &&   
             <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-0.5'>
               <div className=' flex flex-col gap-1 w-32 bg-slate-100 text-gray-700 p-3 rounded-2xl'>
                 <p className='ml-2 hover:text-black hover:font-medium  transition cursor-pointer'>My Profile</p>
                 <Link to='/orders'>  <p className='ml-2 hover:text-black hover:font-medium  transition cursor-pointer'> Orders</p></Link>
                  <p onClick={logout} className='ml-2 hover:text-black hover:font-medium  transition cursor-pointer'> Logout</p>

               </div>

            </div>
         }
     </div>
     <Link to='/cart' className='relative' >
     <img src={assets.cart_icon} alt="cart" className='w-[1.4rem] ' />
      <p className=' absolute w-4 top-3 right-[-2px] leading-4 text-center bg-black text-white aspect-square rounded-full text-[10px]'>{countCartItem()}</p>
     </Link>
     <img onClick={()=>{setVisible(true)}} src={assets.menu_icon} alt="menu" className='w-5 sm:hidden cursor-pointer' />
    </div>
    </div>
    {/* sidebar menu for mobile */}
    <div className={`fixed top-0 bottom-0 right-0  bg-white h-full overflow-hidden transition-all ${visible?'w-full z-20':'w-0'} `}>
      <div className='flex flex-col '>
   <div className='flex gap-3 m-3 mt-4 '>
      <img onClick={()=>{setVisible(false)}} src={assets.dropdown_icon} alt="back" className='w-3 cursor-pointer' />
      <p onClick={()=>{setVisible(false)}} className='text-2xl text-gray-800 font-semibold cursor-pointer'>Back</p>
   </div>
   <div className='w-full flex flex-col mt-2  text-gray-700 font-medium'>
   <NavLink onClick={()=>{setVisible(false)}} to='/' className={`p-3 border `}>
     <p>HOME</p> 
   </NavLink>
   <NavLink onClick={()=>{setVisible(false)}} to='/collection' className='p-3 border '>
     <p>COLLECTION</p> 
   </NavLink>
   <NavLink onClick={()=>{setVisible(false)}} to='/about' className='p-3 border  '>
     <p>ABOUT</p> 
   </NavLink>
   <NavLink onClick={()=>{setVisible(false)}} to='/contact' className='p-3 border '>
     <p>CONTACT</p> 
   </NavLink>

   </div>

      </div>
    </div>
    </>
  )
}

export default Navbar