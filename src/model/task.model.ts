import mongoose, { Schema } from "mongoose";
import task from "../interface/task";
import User from "./user.model";

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
    owner: {
      type: Schema.Types.ObjectId,
      ref: User,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Task = mongoose.model<task>("Task", TaskSchema);

export default Task;
