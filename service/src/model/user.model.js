const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 20
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 20
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    trim: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }
    }
  },
  password: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isMobilePhone(value, "en-IN")) {
        throw new Error("Invalid Mobile Number");
      }
    }
  },
  role: {
    type: String,
    default: "user",
    required: true,
    enum: ["user", "admin", "etm", "eh", "lt"]
  },
  age: {
    type: Number,
    required: true,
    min: 18,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
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
  town: {
    type: String,
    required: true,
  },
  pinCode: {
    type: String,
    required: true,
  }
});

/**
 * Compare a given password with the password hash stored in the database.
 * @param {string} passwordInput - The password to compare.
 * @returns {Promise<boolean>} - A promise that resolves to true if the password is valid, false otherwise.
 * @throws {Error} - If the password comparison fails.
 */
userSchema.methods.isPasswordValid = async function(passwordInput) {
 try {
   const passwordHash = this.password;
   const isValid = await bcrypt.compare(passwordInput, passwordHash); 
   return isValid;
 } catch (error) {
   throw new Error("Password comparison failed");
 }
};

/**
 * Generates a JSON Web Token (JWT) for the user.
 *
 * Steps:
 * 1. Create a token object containing the user's _id, firstName, and email.
 * 2. Ensure that the JWT_SECRET is defined, throwing an error if it is not.
 * 3. Sign the token object using the jwt.sign() method with the secret key, setting an expiration time of 7 day.
 * 4. Return the generated token.
 *
 * @returns {Promise<string>} - A promise that resolves to the generated JWT.
 * @throws {Error} - If the JWT_SECRET is not defined or token generation fails.
 */
userSchema.methods.generateJWTToken = async function() {
 try {
   const tokenObject = {
     _id: this._id,
     firstName: this.firstName,
     email: this.email,
   };

   if (!JWT_SECRET) {
     throw new Error("JWT_SECRET is not defined");
   }

   const token = await jwt.sign(tokenObject, JWT_SECRET, { expiresIn: "7d" });
   return token;
 } catch (error) {
   throw new Error("Token generation failed: " + error.message);
 }
};

const User = mongoose.model("User", userSchema);
module.exports = {User};
