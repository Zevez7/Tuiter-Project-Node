"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FollowDao_1 = __importDefault(require("../daos/FollowDao"));
/**
 * @class FollowController Implements RESTful Web service API for users resource.
 * Defines the following HTTP endpoints:
 * <ul>
 *     <li>POST /follow/userFollowed/:userFollowed/userFollowing/:userFollowing to create a new bookmark instance by users' id</li>
 *     <li>DELETE /follow/userFollowed/:userFollowed/userFollowing/:userFollowing to delete bookmark based on users' id</li>
 *     <li>GET /follow/followers/:uid to get folloers for user'id</li>
 *     <li>GET /follow/following/:uid to get following for user id</li>
 * </ul>
 * @property {UserDao} FollowDao Singleton DAO implementing user CRUD operations
 * @property {FollowController} userController Singleton controller implementing
 * RESTful Web service API
 */
class FollowController {
    constructor() {
        this.createFollow = (req, res) => FollowController.followDao.createFollow(req.body)
            .then(follwer => res.json(follwer));
        this.deleteFollow = (req, res) => FollowController.followDao.deleteFollow(req.params.userFollowed, req.params.userFollowing)
            .then(status => res.json(status));
        this.getFollowingOfAUser = (req, res) => FollowController.followDao.getFollowingOfAUser(req.params.uid)
            .then(follwers => res.json(follwers));
        this.getFollowersOfAUser = (req, res) => FollowController.followDao.getFollowersOfAUser(req.params.uid)
            .then(follwers => res.json(follwers));
        this.removeAllPeopleWhoWereFollowingAUser = (req, res) => FollowController.followDao.removeAllPeopleWhoWereFollowingAUser(req.params.uid)
            .then(status => res.json(status));
        this.removeAllPeopleWhoWereFollowedByAUser = (req, res) => FollowController.followDao.removeAllPeopleWhoWereFollowedByAUser(req.params.uid)
            .then(status => res.json(status));
    }
}
exports.default = FollowController;
FollowController.followDao = FollowDao_1.default.getInstance();
FollowController.followController = null;
/**
* Creates singleton controller instance
* @param {Express} app Express instance to declare the RESTful Web service
* API
* @returns FollowController
*/
FollowController.getInstance = (app) => {
    if (FollowController.followController === null) {
        FollowController.followController = new FollowController();
        app.post("/follow", FollowController.followController.createFollow);
        app.delete("/follow/userFollowed/:userFollowed/userFollowing/:userFollowing", FollowController.followController.deleteFollow);
        app.get("/follow/followers/:uid", FollowController.followController.getFollowersOfAUser);
        app.get("/follow/following/:uid", FollowController.followController.getFollowingOfAUser);
        app.delete("/follow/following/:uid", FollowController.followController.removeAllPeopleWhoWereFollowingAUser);
        app.delete("/follow/follower/:uid", FollowController.followController.removeAllPeopleWhoWereFollowedByAUser);
    }
    return FollowController.followController;
};
