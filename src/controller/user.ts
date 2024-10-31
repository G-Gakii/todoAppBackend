import { Request, Response } from "express";
import { AuthenticatedRequest } from "../interface/auth";

const getUser = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const user = req.user;
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
};

export default getUser;
