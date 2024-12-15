const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI
const DB_NAME = process.env.DB_NAME

const connectDB = async () => {
 try{
   await mongoose.connect(`${MONGO_URI}`, {dbName: DB_NAME});
   console.log("Database Connected Successfully");
 }
 catch(error){
  console.warn("Database Connection Failed",error)
 }
}

module.exports = {connectDB};