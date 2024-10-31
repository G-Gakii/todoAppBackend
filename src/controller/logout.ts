import { Request, Response } from "express";

const logOut = (req: Request, res: Response) => {
  res.clearCookie("token").json({ message: "logged out" });
};
export default logOut;
