const mongoose = require("mongoose");
const validator = require("validator");

const propertySchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    minlength: 2,
    maxlength: 200
  },
  city:{
    type: String, 
    required: true,
    trim: true,
    lowercase: true,
    minlength: 2,
    maxlength: 20
  },
  town:{
    type: String, 
    required: true,
    trim: true,
    lowercase: true,
    minlength: 2,
    maxlength: 20
  },
  state: {ownerId:{
   type: mongoose.Schema.Types.ObjectId,
   ref: "User",
   required: true
  },
   type: String,
   required: true,
   enum: [
     "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
     "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
     "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
     "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
     "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands",
     "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Lakshadweep", "Delhi", "Puducherry"
   ]
 },
 pincode: {
  type: String,
  required: true,
  trim: true,
  minlength: 6,
  maxlength: 6,
  validate(value) {
    if (!validator.isNumeric(value)) {
      throw new Error("Invalid Pin Code");
    }
  }
},
ownerId:{
 type: mongoose.Schema.Types.ObjectId,
 ref: "User",
 required: true
},
isActive:{
 type: Boolean,
 default: true
}
},
{timestamps: true}
);

propertySchema.index({ownerId: 1});

const Property = mongoose.model("Property", propertySchema);

module.exports = {Property};