import express from "express";

import TuitController from "./controllers/TuitController";
import mongoose from "mongoose";
import UserController from "./controllers/UserController";

import FollowController from "./controllers/FollowController";
import BookmarkController from "./controllers/BookmarkController";
import MessageController from "./controllers/MessageController";
import LikeController from "./controllers/LikeController";
import ProfileController from "./controllers/ProfileController";

const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// const address = `mongodb+srv://datnguyen:datnguyentuiter@cluster0.6eip3ug.mongodb.net/?retryWrites=true&w=majority`;

const address = "mongodb://127.0.0.1:27017/node";
mongoose.connect(address);

const userController = UserController.getInstance(app);
const tuitController = TuitController.getInstance(app);
const followController = FollowController.getInstance(app);
const bookmarkController = BookmarkController.getInstance(app);
const messageController = MessageController.getInstance(app);
const likesController = LikeController.getInstance(app);

const profileController = ProfileController.getInstance(app);

// app.get("/hello", (req, res) => res.send("Hello World! ts"));

const PORT: any = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", function () {
  console.log("Server started.......");
});
