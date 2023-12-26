import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
  console.log("Conected to mongodb")
}).catch((err) =>{
  console.log(err)
});

const app = express();

app.listen(300, () => {
  console.log("Server is running on 3000!!!");
});
