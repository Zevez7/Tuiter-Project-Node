"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserDao_1 = __importDefault(require("../daos/UserDao"));
class UserController {
    constructor() {
        this.findAllUsers = (req, res) => UserController.userDao.findAllUsers()
            .then((users) => res.json(users));
        this.findUserById = (req, res) => UserController.userDao.findUserById(req.params.uid)
            .then((user) => res.json(user));
        this.createUser = (req, res) => UserController.userDao.createUser(req.body)
            .then((user) => res.json(user));
        this.updateUser = (req, res) => UserController.userDao.updateUser(req.params.uid, req.body)
            .then((user) => res.send(user));
        this.deleteUser = (req, res) => UserController.userDao.deleteUser(req.params.uid)
            .then((status) => res.send(status));
    }
}
exports.default = UserController;
UserController.userDao = UserDao_1.default.getInstance();
UserController.userController = null;
/**
* Creates singleton controller instance
* @param {Express} app Express instance to declare the RESTful Web service
* API
* @returns UserController
*/
UserController.getInstance = (app) => {
    if (UserController.userController === null) {
        UserController.userController = new UserController();
        app.get("/users", UserController.userController.findAllUsers);
        app.get("/users/:uid", UserController.userController.findUserById);
        app.post("/users", UserController.userController.createUser);
        app.put("/users/:uid", UserController.userController.updateUser);
        app.delete("/users/:uid", UserController.userController.deleteUser);
    }
    return UserController.userController;
};
;
