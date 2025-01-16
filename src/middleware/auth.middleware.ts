import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import generateToken from "../token/token";
import User from "../model/user.model";
import { AuthenticatedRequest } from "../interface/auth";

const autheticate = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }
    const bearerToken = authHeader.split(" ");
    const token = bearerToken[1];
    const decode = jwt.verify(token, process.env.SECRET_TOKEN as string) as {
      id: string;
    };
    const user = await User.findById(decode.id);
    if (!user) {
      res.status(403).json({ message: "invalid token" });
      return;
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
};

export default autheticate;
