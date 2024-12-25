const express = require('express');
const { userAuth, adminRBAC } = require('../middleware/auth.middlware');

const propertyRouter = express.Router();

propertyRouter.get("/test",userAuth, adminRBAC, async (req, res)=>{
 try{
  res.status(200).send({message:"Property Route Working"})
 }
 catch(error){
  res.status(500).send({error:"Something went wrong - " + error.message})
 }
})

module.exports = {propertyRouter}