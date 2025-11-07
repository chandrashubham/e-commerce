import mongoose from "mongoose";

const productSchema=new mongoose.Schema(
    {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
     images: 
      {
         type: [String] ,
         default:[]
      },
    category: {
      type: String,
      required: true,
    },
    subCategory: {
      type: String,
      required: true,
    }, 
    // sizes: 
    //   {
    //     type: Array,required:true,
    //   },
      bestseller:
      {type :Boolean},
      
      
      
    },
    {
      timestamps:true,
    }
);

const ProductModel=mongoose.models.product || mongoose.model('product',productSchema);
export default ProductModel;
