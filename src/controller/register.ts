import { Request, Response } from "express";
import User from "../model/user.model";
import argon2 from "argon2";
import Iuser from "../interface/Iuser";
import { promises } from "dns";
import generateToken from "../token/token";

const registerUser = async (req: Request, res: Response) => {
  try {
    if (!req.body) {
      res.status(400).json({ message: "request body is required" });
      return;
    }
    const { username, email, password } = req.body;
    if (!(username && email && password)) {
      res.status(400).json({ message: "UserName,password and email required" });
      return;
    }
    let existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      res.status(409).json({ message: "user already exist" });
      return;
    }
    const hashedPasword = await argon2.hash(req.body.password);

    const newuser = new User({
      username,
      email,
      password: hashedPasword,
    });
    const user = await newuser.save();
    const access_token = generateToken((await user)._id);

    res.json(access_token);
    return;
  } catch (error) {
    res.status(500).json({ message: `internal server error ${error}` });
  }
};

export default registerUser;
