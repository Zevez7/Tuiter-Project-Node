/**
 * @file Controller RESTful Web service API for users resource
 */
import { Request, Response, Express } from "express";
import UserDao from "../daos/UserDao";
import UserControllerI from "../interfaces/UserControllerI";

export default class UserController implements UserControllerI {
  private static userDao: UserDao = UserDao.getInstance();
  private static userController: UserController | null = null;

  /**
   * Creates singleton controller instance
   * @param {Express} app Express instance to declare the RESTful Web service
   * API
   * @returns UserController
   */
  public static getInstance = (app: Express): UserController => {
    if (UserController.userController === null) {
      UserController.userController = new UserController();

      app.get("/users", UserController.userController.findAllUsers);
      app.get("/users/:uid", UserController.userController.findUserById);
      app.post("/users", UserController.userController.createUser);
      app.put("/users/:uid", UserController.userController.updateUser);
      app.delete("/users/:uid", UserController.userController.deleteUser);
      app.delete(
        "/users/username/:username/delete",
        UserController.userController.deleteUsersByUsername
      );
    }
    return UserController.userController;
  };

  private constructor() {}

  findAllUsers = (req: Request, res: Response) =>
    UserController.userDao.findAllUsers().then((users) => res.json(users));

  findUserById = (req: Request, res: Response) =>
    UserController.userDao
      .findUserById(req.params.uid)
      .then((user) => res.json(user));

  createUser = (req: Request, res: Response) =>
    UserController.userDao.createUser(req.body).then((user) => res.json(user));

  updateUser = (req: Request, res: Response) =>
    UserController.userDao
      .updateUser(req.params.uid, req.body)
      .then((user) => res.send(user));

  deleteUser = (req: Request, res: Response) =>
    UserController.userDao
      .deleteUser(req.params.uid)
      .then((status) => res.send(status));

  /**
   *Find user by username
   * @param {Request} req Represents request from client, including path
   * parameter username identifying the primary key of the user to be find
   * @param {Response} res Represents response to client, including the return of the found user
   */
  findUserByUsername = (req: Request, res: Response) =>
    UserController.userDao
      .findUserByUsername(req.params.username)
      .then((user) => res.json(user));

  /**
   * Delete a user by user name
   * @param {Request} req Represents request from client, including path
   * parameter username identifying the primary key of the user to be removed
   * @param {Response} res Represents response to client, including status
   * on whether deleting a user was successful or not
   */
  deleteUsersByUsername = (req: Request, res: Response) => {
    UserController.userDao
      .deleteUsersByUsername(req.params.username)
      .then((status) => res.json(status));
  };
}
