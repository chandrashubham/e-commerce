import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Cart from './pages/Cart'
import Product from './pages/Product'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
 import { ToastContainer, toast } from 'react-toastify';
 import OrderSuccess from "./pages/OrderSuccess";

const App = () => {
  return (
    <>
   
    <div className='px-1 sm:px-[2vw] md:px-[3vw] lg:px-[4vw] top-0 sticky z-50 bg-white'>
      <ToastContainer />
      <Navbar/>
      </div>
      <hr className='w-auto '/>
      <SearchBar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/collection' element={<Collection/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/product/:productId' element={<Product/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/orders' element={<Orders/>}/>
    <Route path='/place-order' element={<PlaceOrder/>}/>
    <Route path="/order-success" element={<OrderSuccess />} />
  </Routes>
 
    <Footer/>
   
    </>
  )
}

export default App