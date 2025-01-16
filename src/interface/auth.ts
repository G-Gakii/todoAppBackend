import { Request } from "express";
import { Document } from "mongoose";
import Iuser from "../interface/Iuser";

export interface AuthenticatedRequest extends Request {
  user?: Document<any, any, Iuser> & Iuser & { _id: string };
  payload?: any;
}
