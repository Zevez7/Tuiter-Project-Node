"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BookmarkDao_1 = __importDefault(require("../daos/BookmarkDao"));
/**
 * @class BookmarkController Implements RESTful Web service API for users resource.
 * Defines the following HTTP endpoints:
 * <ul>
 *     <li>POST /users/:uid/bookmarks/:tid to create a new bookmark instance</li>
 *     <li>DELETE /users/:uid/bookmarks/:tid to delete bookmark based on user id and tuit id</li>
 *     <li>GET /users/:uid/bookmarks to get bookmark based on user id</li>
 *     <li>GET /tuits/:tid/bookmarks to get bookmark based on tuit id </li>
 * </ul>
 * @property {UserDao} userDao Singleton DAO implementing user CRUD operations
 * @property {UserController} userController Singleton controller implementing
 * RESTful Web service API
 */
class BookmarkController {
    constructor() {
        this.bookmarkATuit = (req, res) => BookmarkController.bookmarkDao.bookmarkATuit(req.params.tid, req.params.uid)
            .then(bookmark => res.json(bookmark));
        this.unBookmarkATuit = (req, res) => BookmarkController.bookmarkDao.unBookmarkATuit(req.params.tid, req.params.uid)
            .then(status => res.json(status));
        this.findTuitsBookmarkedByAUser = (req, res) => BookmarkController.bookmarkDao.findTuitsBookmarkedByAUser(req.params.uid)
            .then(bookmarks => res.json(bookmarks));
        this.findUsersThatBookmarkedATuid = (req, res) => BookmarkController.bookmarkDao.findUsersThatBookmarkedATuid(req.params.tid)
            .then(bookmarks => res.json(bookmarks));
        this.removeTuitsBookmarkedByAUser = (req, res) => BookmarkController.bookmarkDao.removeTuitsBookmarkedByAUser(req.params.uid)
            .then(bookmarks => res.json(bookmarks));
        this.removeUsersWhoBookmarkedATuid = (req, res) => BookmarkController.bookmarkDao.removeUsersWhoBookmarkedATuid(req.params.tid)
            .then(bookmarks => res.json(bookmarks));
    }
}
exports.default = BookmarkController;
BookmarkController.bookmarkDao = BookmarkDao_1.default.getInstance();
BookmarkController.bookmarkController = null;
/**
* Creates singleton controller instance
* @param {Express} app Express instance to declare the RESTful Web service
* API
* @returns BookmarkController
*/
BookmarkController.getInstance = (app) => {
    if (BookmarkController.bookmarkController === null) {
        BookmarkController.bookmarkController = new BookmarkController();
        app.post("/users/:uid/bookmarks/:tid", BookmarkController.bookmarkController.bookmarkATuit);
        app.delete("/users/:uid/bookmarks/:tid", BookmarkController.bookmarkController.unBookmarkATuit);
        app.get("/users/:uid/bookmarks", BookmarkController.bookmarkController.findTuitsBookmarkedByAUser);
        app.get("/tuits/:tid/bookmarks", BookmarkController.bookmarkController.findUsersThatBookmarkedATuid);
        app.delete("/users/:uid/bookmarks", BookmarkController.bookmarkController.removeTuitsBookmarkedByAUser);
        app.delete("/tuits/:tid/bookmarks", BookmarkController.bookmarkController.removeUsersWhoBookmarkedATuid);
    }
    return BookmarkController.bookmarkController;
};
