import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import Title from "./Title";
import ProductItem from './ProductItem'


const RelatedProducts = ({category,subcategory}) => {
        const {products} =useContext(ShopContext);
        const [relatedProducts,setRelatedProducts] =useState([]);

        useEffect(()=>{
            if(products.length >0){
                let productCopy=products.slice();
                productCopy=products.filter((item)=>item.category === category);
                productCopy =productCopy.filter((item)=>item.subcategory === subcategory);
                setRelatedProducts(productCopy.slice(0,5));
            }

        },[products])

  return (
    <div className="my-28"> 
    <div className="text-center text-3xl py-2">
      <Title text1={'RELATED'} text2={'PRODUCTS'}/>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-5 p-20">
    {
        relatedProducts.map((item,index)=>(
         <ProductItem key={index} id={item._id} name={item.name} images={item.images} price={item.price} />
        ))
    }
    </div>
    </div>
  )
}

export default RelatedProducts