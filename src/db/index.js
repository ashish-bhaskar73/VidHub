import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
  try {
    const connectionINstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(`MongoDB is coonected !! DB_Host ${connectionINstance} `);
    console.log(`DB_Host ${connectionINstance.connection.host}`);
  } catch (error) {
    console.log("MongoDB is not connected: ", error);
  }
};

export default connectDB;
