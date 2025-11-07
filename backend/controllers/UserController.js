import validator from 'validator';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import UserModel from '../models/UserModel.js'

const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

// user login 
const userLogin=async (req,res)=>{
   try {
    const {email,password}=req.body;
    const user=await UserModel.findOne({email})
    if(!user){
        return res.json({
            success:false,
            message:"User does not Exists"
        })
    }
    const isMatch=await bcrypt.compare(password,user.password);
    if(isMatch){
        const token=createToken(user._id);
        return res.json({
            success:true,
            token
        })
    }else{
        return res.json({
            success:false,
            message:"Invalid Credentials"
        })
    }
   } catch (error) {
        console.log(error)
        return res.json({
            success:false,
            message:error.message
        })
   }
}




// user signup
const userSignup=async (req,res)=>{
        try {
            const {name,email,password} = req.body;
            // checking user already exist or not
            const exists=await UserModel.findOne({email});
            if(exists){
                return res.json({success:false,message:"User ALready Exists"})
            }
    //    validating email and strong password
                if(!validator.isEmail(email)){
                    return res.json({success:false,messge:"Enter Valid Email"})
                }
                if(password.length<8){
                    return res.json({success:false,message:"Enter minimum 8 Digit password"})
                }
                const salt=await bcrypt.genSalt(10);
                const hashedPassword=await bcrypt.hash(password,salt);
                const newUser=new UserModel({
                    name,
                    email,
                    password:hashedPassword

                })
                const user=await newUser.save();
                const token=createToken(user._id);
                res.json({success:true,token})
            
        } catch (error) {
                console.log(error);
                res.json({
                    success:false,
                    message:error.message,
                })
        }
}


// admin login
const adminLogin= async (req,res)=>{
    try {
        const {email,password}=req.body;
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password,process.env.JWT_SECRET);
            res.json({
                success:true,
                token
            })
        }else{
            res.json({
                success:false,
                message:"Invalid Credentials"
            })
        }
        
    } catch (error) {
        console.log(error);
                res.json({
                    success:false,
                    message:error.message,
                })
    }
}



export {userLogin,userSignup,adminLogin}