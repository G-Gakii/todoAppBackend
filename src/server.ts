import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./database/db";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import authRouter from "./routes/user.routes";
const app = express();
dotenv.config();

const PORT = process.env.PORT || 3001;

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/user", authRouter);

app.use((req, res, next) => {
  // Set CORS headers
  res.header("Access-Control-Allow-Origin", process.env.FRONTEND_URL); // Replace with your frontend domain
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true"); // Allow credentials (cookies, etc.)

  // Pass to next layer of middleware
  next();
});

app.listen(PORT, () => {
  connectDB();
  console.log(`listening at port ${PORT} `);
});
