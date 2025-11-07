import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import { Link } from "react-router-dom"

const ProductItem = ({id,name,images,price}) => {
    const {currency}=useContext(ShopContext);

  return (
    <>
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>  
  
    <div className="overflow-hidden ">
        <img className=" hover:scale-110 transition ease-in-out" src={images}  />
    </div>
    <p className="text-sm pb-1 pt-1.5 ">{name}</p>
    <p className="text-sm font-medium">{currency}{price}</p>
    </Link>
    </>
  )
}

export default ProductItem