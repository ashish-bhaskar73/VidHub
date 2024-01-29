//method 1 for dotenv
// require("dotenv").config({ path: "./env" });
import mongoose from "mongoose";

//method2
import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config({
  path: "./env",
});
connectDB();

/*
import { DB_NAME } from "./constant";

import express from "express";

const app = express();
(async () => {
  try {
    mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Error:", error);
    });
    app.listen(process.env.PORT, () => {
      console.log(`server is running on port ${(process.env, PORT)}`);
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
})();
*/
