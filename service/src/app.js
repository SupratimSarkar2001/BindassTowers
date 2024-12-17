const express = require("express")
require('dotenv').config();
const cookieParser = require('cookie-parser')
const cors = require('cors')

const {connectDB} = require("./config/database");
const { authRouter } = require("./routes/auth.routes");

const PORT = 8080;

const corsOptions ={
 origin:'http://localhost:3000', 
 credentials:true,     
 optionSuccessStatus:200
}

const app = express();
app.use(cookieParser()); 
app.use(express.json()); 
app.use(cors(corsOptions));

/*Connecting to DB and Start our Server*/
connectDB().then(()=>{
 app.listen(PORT,()=>{
  console.log(`Server is up on port ${PORT}`);
 })
}).catch((error)=>{
 console.log("Some Error while connecting to database and starting server",error);
 process.exit(1);
})

/*Routes*/
app.use("/auth", authRouter);

/* Global error handler */
app.use((err, req, res, next) => {
 res.status(500).json({ message: "Internal Server Error", error: err.message });
});