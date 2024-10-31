import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./database/db";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRouter from "./routes/user.routes";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3001;

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use("/api/user", authRouter);

app.listen(PORT, () => {
  connectDB();
  console.log(`listening at port ${PORT} `);
});