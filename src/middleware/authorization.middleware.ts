import { NextFunction, Request, Response } from "express";
import { AuthenticatedRequest } from "../interface/auth";
import Task from "../model/task.model";

const checkAuthorization = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) {
      res.status(404).json({ message: "Task not found" });
      return;
    }
    if (!req.user || !req.user.id) {
      res.status(401).json({ message: "User not authenticated" });
      return;
    }
    if (task.owner.toString() !== req.user?.id.toString()) {
      res.status(403).json({ mesage: "acess denied" });
      return;
    }
    next();
  } catch (error) {
    res.status(500).json({ message: "Internal server error" + error });
    return;
  }
};

export default checkAuthorization;
