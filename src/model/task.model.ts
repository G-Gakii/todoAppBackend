import mongoose from "mongoose";
import task from "../interface/task";

const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    status: {
      type: String,
      enum: ["to-do", "in-progress", "done"],
    },
  },
  {
    timestamps: true,
  }
);
const Task = mongoose.model<task>("Task", TaskSchema);

export default Task;
