import { log } from "console";
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL as string);
    console.log("connected to database");
  } catch (error) {
    console.log("connect failed", error);
  }
};
