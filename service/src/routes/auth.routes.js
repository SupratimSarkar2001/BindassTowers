const express = require('express');
const validator = require("validator");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET


const { singUpValidation } = require('../helper/validation.js');
const { User } = require('../model/user.model');

const authRouter = express.Router();

authRouter.post("/signup",async (req,res)=>{
 const UserInstance = req.body; 

 try{
   singUpValidation(UserInstance);

   const password = UserInstance.password;

   const isStrongPassword = validator.isStrongPassword(password);
   if(!isStrongPassword){
    throw new Error("Password is not strong enough");
   }

   const passwordHash = await bcrypt.hash(password,10);

   UserInstance.password = passwordHash;

   const user = new User(UserInstance);
   await user.save();
   res.status(201).send({
    message:"User Added Successfully"
   })
 }
 catch(error){
  res.status(500).send("Adding User Failed "+ error.message);
 }
})

authRouter.post("/login",async (req,res)=>{
 const email = req.body.email;
 const password = req.body.password;
 try{
   const user = await User.findOne({email:email});
   
   if(!user){
     throw new Error("Invalid Credentials");
   }

   const isValidPassword = await user.isPasswordValid(password);

   if(!isValidPassword){
     throw new Error("Invalid Credentials");
   }

   const token = await user.generateJWTToken();

   res.cookie("token", token)
   return res.send({
     message:"Login Successfully",
     data:{
      _id: user._id,
      firstName:user.firstName,
      lastName:user.lastName,
      email:user.email,
      role: user.role
     }
   });
 }
 catch(error){
   res.status(400).send("Login Failed "+error.message);
 }
})

authRouter.post("/verify-token", async (req,res)=>{
  try{
    const token = req.cookies.token;
    if(!token){
      throw new Error("No Token Found");
    }
    const { _id, firstName } = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(_id);
    if(!user){
      throw new Error("No User Found");
    }
    res.send({
      message:"Token is valid",
    });
  }
  catch(error){
    res.status(401).send("Unauthorized "+error.message);
  }
})

authRouter.post("/logout",async (req,res)=>{
  try{
    res.cookie("token",null, {
      expires: new Date(Date.now())
    })
    res.send("Logout successfully")
  }
  catch(error){
    res.status(400).send("Bad Request")
  }
})

module.exports = {
 authRouter
}