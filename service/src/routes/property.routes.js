const express = require('express');
const { userAuth, adminRBAC } = require('../middleware/auth.middlware');
const { Property } = require('../model/property.model');
const { User } = require('../model/user.model');

const propertyRouter = express.Router();

propertyRouter.post("/create", userAuth, adminRBAC, async (req, res) => {
 try {
   const propertyInstance = req.body;

   const mandatoryPropertyFields = ["address", "city", "town", "state", "pincode", "ownerId"];
   const keysOfProperty = Object.keys(propertyInstance);

   // Check if all mandatory fields are present
   const missingFields = mandatoryPropertyFields.filter(field => !keysOfProperty.includes(field));
   if (missingFields.length > 0) {
     return res.status(400).send({
       error: `Mandatory fields are missing: ${missingFields.join(", ")}`,
     });
   }

   const owner = await User.findById(propertyInstance.ownerId);

   if (!owner) {
     throw new Error("Owner not found");
   }
   // Create and save property
   const property = new Property(propertyInstance);
   const savedProperty = await property.save();

   // Populate the `ownerId` field
   await savedProperty.populate("ownerId", ["firstName", "lastName", "email", "role"]);

   res.send({
     message: "Property created successfully",
     data: savedProperty,
   });
 } catch (error) {
   res.status(500).send({
     error: "Unable to create new property - " + error.message,
   });
 }
});

//TODO: Add pagination
propertyRouter.get("/all", userAuth, adminRBAC, async (req, res) => {
 try {
   const properties = await Property.find().populate("ownerId", ["firstName", "lastName", "email", "role"]);
   res.send({
     message: "Properties fetched successfully",
     data: properties,
   });
 } catch (error) {
   res.status(500).send({
     error: "Unable to fetch all properties - " + error.message,
   });
 }
});

propertyRouter.get("/:id", userAuth, adminRBAC, async (req, res) => {
 try{
  const requestedPropertyId = req.params.id;
  const property = await Property.findById(requestedPropertyId);

  if(!property){
   throw new Error("Property not found");
  }

  const requestedProperty = await Property.findById(requestedPropertyId);
  await requestedProperty.populate("ownerId", ["firstName", "lastName", "email", "role"]);

  res.send({
   message: "Property fetched successfully",
   data: requestedProperty,
  })
 }
 catch(error){
  res.status(500).send({
   error: "Unable to fetch property by id - " + error.message,
  });
 }
});

propertyRouter.get("/owner/:id", userAuth, adminRBAC, async (req, res) => {
 try{
  const requestedOwnerId = req.params.id;
  const properties = await Property.find({ownerId: requestedOwnerId}).populate("ownerId", ["firstName", "lastName", "email", "role"]);

  res.send({
   message: "Properties fetched successfully",
   count: properties.length,
   data: properties,
  })
 }
 catch(error){
  res.status(500).send({
   error: "Unable to fetch property by owner id - " + error.message,
  });
 }
})

propertyRouter.patch("/:id", userAuth, adminRBAC, async (req, res) => {
 try{
   const allowedUpdates = ["address", "ownerId"];

   const requestedPropertyId = req.params.id;
   const property = await Property.findById(requestedPropertyId);

   if(!property){
    throw new Error("Property not found");
   }

   const updateRequestFields = Object.keys(req.body);

   const isValidUpdateRequest = updateRequestFields.every(update => allowedUpdates.includes(update));

   if(!isValidUpdateRequest){
    throw new Error("Invalid update request");
   }

   if(updateRequestFields.includes("ownerId")){
    const owner = await User.findById(updateRequestFields.ownerId);

    if (!owner) {
      throw new Error("Owner not found");
    }
   }

   const updatedProperty = await Property.findByIdAndUpdate(requestedPropertyId, req.body, {new: true}).populate("ownerId", ["firstName", "lastName", "email", "role"]);

   res.send({
    message: "Property updated successfully",
    data: updatedProperty,
   })
 }
 catch(error){
  res.status(500).send({
   error: "Unable to update property by id - " + error.message,
  });
 }
})

propertyRouter.delete("/:id", userAuth, adminRBAC, async (req, res) => {
 try{
  const requestedPropertyId = req.params.id;
  const property = await Property.findById(requestedPropertyId);

  if(!property){
   throw new Error("Property not found");
  } 

  await Property.findByIdAndDelete(requestedPropertyId); 

  res.send({
   message: "Property deleted successfully",
  })
 }
 catch(error){
  res.status(500).send({
   error: "Unable to delete property by id - " + error.message,
  })
 }
});

module.exports = {propertyRouter}