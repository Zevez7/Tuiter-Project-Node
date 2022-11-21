"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LikeDao_1 = __importDefault(require("../daos/LikeDao"));
/**
 * @class LikeController Implements RESTful Web service API for users resource.
 * Defines the following HTTP endpoints:
 * <ul>
 *     <li>POST /users/:uid/likes/:tid to create tuit</li>
 *     <li>DELETE /users/:uid/likes/:tid to delete tuit</li>
 *     <li>GET /users/:uid/likes get tuits who like a specific user</li>
 *     <li>GET /tuits/:tid/likes get users who like a specific tuit</li>
 * </ul>
 * @property {LikeDao} FollowDao Singleton DAO implementing user CRUD operations
 * @property {LikeController} userController Singleton controller implementing
 * RESTful Web service API
 */
class LikeController {
    constructor() {
        this.likeATuit = (req, res) => LikeController.likeDao.likeATuit(req.params.tid, req.params.uid)
            .then(like => res.json(like));
        this.dislikeATuit = (req, res) => LikeController.likeDao.dislikeATuit(req.params.tid, req.params.uid)
            .then(status => res.json(status));
        this.findTuitsLikedByAUser = (req, res) => LikeController.likeDao.findTuitsLikedByAUser(req.params.uid)
            .then(likes => res.json(likes));
        this.findUsersThatLikedATuid = (req, res) => LikeController.likeDao.findUsersThatLikedATuid(req.params.tid)
            .then(likes => res.json(likes));
    }
}
exports.default = LikeController;
LikeController.likeDao = LikeDao_1.default.getInstance();
LikeController.likeController = null;
/**
* Creates singleton controller instance
* @param {Express} app Express instance to declare the RESTful Web service
* API
* @returns LikeController
*/
LikeController.getInstance = (app) => {
    if (LikeController.likeController === null) {
        LikeController.likeController = new LikeController();
        app.post("/users/:uid/likes/:tid", LikeController.likeController.likeATuit);
        app.delete("/users/:uid/likes/:tid", LikeController.likeController.dislikeATuit);
        app.get("/users/:uid/likes", LikeController.likeController.findTuitsLikedByAUser);
        app.get("/tuits/:tid/likes", LikeController.likeController.findUsersThatLikedATuid);
    }
    return LikeController.likeController;
};
