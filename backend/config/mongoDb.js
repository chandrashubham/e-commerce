import mongoose from "mongoose";

const connectDB = async () => {
 await mongoose.connect(`${process.env.MONGODB_URI}/E-Commerce`)
 .then(()=>{
    console.log("Mongodb connected");

 }).catch(()=>{
    console.log("some error connecting mongodb")
 })
};

export default connectDB;
