import express from "express";
import registerUser from "../controller/register";

const route = express.Router();

route.post("/register", registerUser);

export default route;
