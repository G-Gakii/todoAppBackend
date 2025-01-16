import { Request, Response } from "express";
import User from "../model/user.model";
import generateToken from "../token/token";
import argon2 from "argon2";

const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      res.status(400).json({ message: "All field required" });
      return;
    }
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(400).json({ message: "invalid credentials" });
      return;
    }
    const isPasswordValid = await argon2.verify(user.password, password);
    if (!isPasswordValid) {
      res.status(400).json({ message: "invalid credentials" });
      return;
    }
    const token = generateToken(user._id);

    res.json({ token });
    return;
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
};

export default login;
