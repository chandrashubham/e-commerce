import {v2 as cloudinary} from 'cloudinary'
import ProductModel from '../models/ProductModel.js'

// function to add product
const addProduct=async (req,res)=>{
   try {
    const {name,description,price,category,subCategory,bestseller}=req.body;
    const image1=req.files.image1 && req.files.image1[0];
    // const image2=req.files.image2 && req.files.image2[0];
    // const image3=req.files.image3 && req.files.image3[0];
    // const image4=req.files.image4 && req.files.image4[0];

    const images=[image1].filter((item)=>item!= undefined);
    let imagesUrl= await Promise.all(
        images.map(async(item)=>{
            let result=await cloudinary.uploader.upload(item.path,{resource_type:'image'});
            return result.secure_url;
        })
    )

    console.log(name,description,price,category,subCategory,bestseller)
    console.log(imagesUrl);
    const productData={
        name,
        description,
        price:Number(price),
        category,
        subCategory,
        bestseller:bestseller==="true"?true:false,
      
        images:imagesUrl,
        date:Date.now()
    }
    console.log(productData);
    const product=new ProductModel(productData);
    await product.save();
    res.json({success:true,msg:"product added successfully"})
    
   } catch (error) {
    res.json({
        success:false,
        msg:error.msg
    })
   }
    
}
// function to remove Product 
const removeProduct=async(req,res)=>{
    try {
        await ProductModel.findByIdAndDelete(req.body.id)
        res.json({success:true,msg:"Product Removed Successfully"})
    } catch (error) {
        console.log(error)
        res.json({
            success:false,
            msg:error.msg
        })
    }

}
// function to list Product
const listProduct=async(req,res)=>{
    try {
        const products=await ProductModel.find({});
        res.json({success:true,products});
        
    } catch (error) {
            console.log(error)
            res.json({success:false,msg:error.msg})
    }

}
// function to add product
const singleProduct=async(req,res)=>{
    try {
        const {productId} =req.body;
        const product=await ProductModel.findById(productId);
        res.json({
            success:true,
            product
        })
    } catch (error) {
        console.log(error)
        res.json({
            success:false,
            msg:error.msg
        })
    }

}



export {addProduct,removeProduct,listProduct,singleProduct};