const express = require('express');
const { userAuth, adminRBAC } = require('../middleware/auth.middlware');
const { Property } = require('../model/property.model');

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

module.exports = {propertyRouter}