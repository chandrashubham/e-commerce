import express from 'express'
import { userLogin,userSignup,adminLogin } from '../controllers/UserController.js'

const userRouter=express.Router();

userRouter.post('/login',userLogin);
userRouter.post('/signup',userSignup);
userRouter.post('/admin',adminLogin);


export default userRouter;
