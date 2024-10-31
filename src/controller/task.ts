import Task from "../model/task.model";
import { Request, Response } from "express";

const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json(tasks);
    return;
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
      return;
    }
  }
};
const getTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    res.status(200).json(task);
    return;
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
      return;
    }
  }
};

const createTask = async (req: Request, res: Response) => {
  try {
    const { title, description, status } = req.body;
    if (!title) {
      res.status(400).json({ message: "title is required" });
      return;
    }
    const task = await Task.create(req.body);
    res.status(200).json(task);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
      return;
    }
  }
};
const updateTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate(id, req.body);
    if (!task) {
      res.status(404).json({ message: "Task not found" });
      return;
    } else {
      const updatedtask = await Task.findById(id);
      res.status(200).json(updatedtask);
      return;
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
      return;
    }
  }
};
const deleteTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      res.status(404).json({ message: "Task not found" });
      return;
    }
    res.status(200).json({ message: "Task deleted succesfully" });
    return;
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
      return;
    }
  }
};

export { getTasks, getTask, createTask, updateTask, deleteTask };
