const express = require('express');
const validator = require("validator");

const { User } = require('../model/user.model');
const { userAuth, adminRBAC } = require('../middleware/auth.middlware');

const userRouter = express.Router();

/* In oder to get details of all the existing user the requester should be an admin */
userRouter.get("/all", userAuth, adminRBAC, async (req, res) => {
 try {
   const { role } = req.query;

   const allowedRoles = ["user", "lt", "eh", "etm"];

   if (role && !allowedRoles.includes(role)) {
     throw new Error("Invalid role");
   }

   const query = role ? { role } : {};

   const users = await User.find(query).select("-password");

   res.send({
     message: role 
       ? `${role.toUpperCase()}s fetched successfully` 
       : "All users fetched successfully",
     count: users.length,
     data: users,
   });
 } catch (error) {
   res.status(500).send({
     error: "Unable to fetch users - " + error.message,
   });
 }
});

userRouter.get("/email/:email",userAuth, adminRBAC, async (req, res) => {
 try {
   const { email } = req.params;

   if(!validator.isEmail(email)){
    throw new Error("Invalid Email");
   }

   const user = await User.findOne({email}).select("-password");

   if(!user){
    throw new Error("User not found");
   }

   res.send({
     message: "User fetched successfully",
     data: user,
   });
 } catch (error) {
   res.status(500).send({
     error: "Unable to fetch user - " + error.message,
   });
 }
})

/*Generic User Endpoints */

userRouter.get("/id/:id", userAuth, async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).select("-password");
 
    if(!user){
     throw new Error("User not found");
    }
 
    res.send({
      message: "User fetched successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).send({
      error: "Unable to fetch user - " + error.message,
    });
  }
 })

 userRouter.patch("/id/:id", userAuth, async (req, res) => {
  try{
    const allowedUpdates = ["mobileNumber","city", "state", "town", "pinCode"];

    const requestObjectKeys = Object.keys(req.body);

    const isValidUpdateRequest = requestObjectKeys.every(update => allowedUpdates.includes(update));

    if(!isValidUpdateRequest){
     throw new Error("Invalid update request");
    }
    
    const { id } = req.params;
    const user = await User.findById(id);

    if(!user){
     throw new Error("User not found");
    }

    const updatedUser = await User.findByIdAndUpdate(id, req.body, {new: true});

    res.send({
      message: "User updated successfully",
      data: updatedUser,
    });
  }
  catch(error){
    res.status(500).send(
      {
        error: "Uanble to update user: " + error.message,
      }
    )
  }
 });

module.exports = {userRouter}