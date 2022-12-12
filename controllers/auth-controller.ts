import { Express } from "express";
import ProfileDao from "../daos/ProfileDao";

import UserDao from "../daos/UserDao";
const bcrypt = require("bcrypt");
const saltRounds = 10;

const AuthenticationController = (app: Express) => {
  const userDao: UserDao = UserDao.getInstance();
  const profileDao: ProfileDao = ProfileDao.getInstance();

  const signup = async (req: any, res: any) => {
    const newUser = req.body;
    const password = newUser.password;
    const hash = await bcrypt.hash(password, saltRounds);

    newUser.password = hash;

    const existingUser = await userDao.findUserByUsername(req.body.username);
    if (existingUser) {
      res.sendStatus(403);
      console.log("user already existed");
      return;
    } else {
      const insertedUser = await userDao.createUser(newUser);
      console.log("insertedUser", insertedUser._id);
      // @ts-ignore
      const newProfileCreated = await profileDao.createProfile({
        userId: insertedUser._id,
      });
      console.log(newProfileCreated);
      insertedUser.password = "";
      req.session["profile"] = insertedUser;
      res.json(insertedUser);
    }
  };

  const profile = (req: any, res: any) => {
    const profile = req.session["profile"];
    if (profile) {
      profile.password = "";
      res.json(profile);
    } else {
      res.sendStatus(403);
    }
  };

  const logout = (req: any, res: any) => {
    req.session.destroy();
    res.sendStatus(200);
  };

  const login = async (req: any, res: any) => {
    const user = req.body;
    const username = user.username;
    const password = user.password;
    console.log(user);
    const existingUser = await userDao.findUserByUsername(username);
    if (!existingUser) {
      res.sendStatus(403);
      return;
    }
    const match = await bcrypt.compare(password, existingUser.password);
    if (match) {
      existingUser.password = "*****";
      req.session["profile"] = existingUser;
      res.json(existingUser);
      console.log(req.session["profile"]);
    } else {
      res.sendStatus(403);
    }
  };
  app.post("/api/auth/login", login);

  app.post("/api/auth/profile", profile);
  app.post("/api/auth/logout", logout);
  app.post("/api/auth/signup", signup);
};
export default AuthenticationController;
