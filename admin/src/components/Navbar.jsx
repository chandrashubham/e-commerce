
import { Link } from "react-router-dom";

const Navbar = ({setToken}) => {
  return (
    <div className=" m-4">
      <nav className="flex justify-between ">
        <Link to={"/"}>
          <img src="logo.png" className="w-34" alt="" />
        </Link>
      
          <button onClick={()=>setToken('')} className="border-2 h-fit mr-6 px-5 py-2 text-white bg-black rounded-2xl hover:text-black hover:bg-white transition ease-in cursor-pointer">
            Logout
          </button>
        
      
      </nav>
    </div>
  );
};

export default Navbar;
