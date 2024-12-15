const express = require("express")
require('dotenv').config();
const cookieParser = require('cookie-parser')

const {connectDB} = require("./config/database");

const PORT = 8080;

const app = express();
app.use(cookieParser()); 
app.use(express.json()); 

/*Connecting to DB and Start our Server*/
connectDB().then(()=>{
 app.listen(PORT,()=>{
  console.log(`Server is up on port ${PORT}`);
 })
}).catch((error)=>{
 console.log("Some Error while connecting to database and starting server",error);
})