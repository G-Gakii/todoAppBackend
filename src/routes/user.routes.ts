import express from "express";
import registerUser from "../controller/register";
import login from "../controller/login";
import logOut from "../controller/logout";
import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
} from "../controller/task";
import autheticate from "../middleware/auth.middleware";
import getUser from "../controller/user";
import checkAuthorization from "../middleware/authorization.middleware";

const route = express.Router();

route.post("/register", registerUser);
route.post("/login", login);
route.get("/logout", autheticate, logOut);
route.get("/profile", autheticate, getUser);

route.get("/tasks", autheticate, getTasks);
route.get("/tasks/:id", autheticate, checkAuthorization, getTask);
route.post("/tasks", autheticate, createTask);
route.put("/tasks/:id", autheticate, checkAuthorization, updateTask);
route.delete("/tasks/:id", autheticate, checkAuthorization, deleteTask);

export default route;
