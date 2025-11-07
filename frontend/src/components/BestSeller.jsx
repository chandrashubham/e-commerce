
import { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem';

const BestSeller = () => {
  const {products} =useContext(ShopContext);
  const [bestSeller,setBestSeller]=useState([]);

  useEffect(()=>{
    if(products && products.length>0){
        const bestProducts=products.filter((item)=>(item.bestseller));
        setBestSeller(bestProducts.slice(0,5));
    }
},[products]);

  return (
    <>
    <div className='text-center'>
        <Title text1=' BEST' text2='SELLER'/>
        <p className="text-sm text-gray-600 sm:text-[1rem]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam sapiente quae aliquam atque beatae quod, necessitatibus obcaecati, rep.</p>
    </div>
   <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-6 mt-10 px-4">
        {bestSeller.map((product) => (
          <ProductItem
            key={product._id}
            id={product._id}
            name={product.name}
            images={product.images}
            price={product.price}
          />
        ))}
      </div>

    </>
  )
}

export default BestSeller