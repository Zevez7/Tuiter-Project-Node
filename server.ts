import express from "express";

import TuitController from "./controllers/TuitController";
import mongoose from "mongoose";
import UserController from "./controllers/UserController";

import FollowController from "./controllers/FollowController";
import BookmarkController from "./controllers/BookmarkController";
import MessageController from "./controllers/MessageController";
import LikeController from "./controllers/LikeController";
import ProfileController from "./controllers/ProfileController";
import AuthenticationController from "./controllers/auth-controller";
import RetuitController from "./controllers/RetuitController";

const cors = require("cors");

const session = require("express-session");

const app = express();
app.use(
  cors({
    credentials: true,
    origin: true,
    optionsSuccessStatus: 200,
  })
);

let sess = {
  // secret: process.env.SECRET,
  secret: "REDCAT",
  cookie: {
    secure: false,
  },
};

app.use(session(sess));

app.use(express.json());

mongoose.connect('mongodb+srv://ujjval:ujjval@cluster0.zwdxz.mongodb.net/whiteboard?retryWrites=true&w=majority&ssl=true');

const userController = UserController.getInstance(app);
const tuitController = TuitController.getInstance(app);
const followController = FollowController.getInstance(app);
const bookmarkController = BookmarkController.getInstance(app);
const messageController = MessageController.getInstance(app);
const likesController = LikeController.getInstance(app);

const profileController = ProfileController.getInstance(app);
const authorController = AuthenticationController(app);
const retuitController = RetuitController.getInstance(app);

const PORT: any = process.env.PORT || 5002;

// app.listen(PORT, "0.0.0.0", function () {
//   console.log("Server started.......");
// });
app.listen(PORT);
