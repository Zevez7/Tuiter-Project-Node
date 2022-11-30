/**
 * @file Controller RESTful Web service API for bookmark resource
 */
import { Request, Response, Express } from "express";
import BookmarkDao from "../daos/BookmarkDao";
import BookmarkControllerI from "../interfaces/BookmarkController";

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
export default class BookmarkController implements BookmarkControllerI {
  private static bookmarkDao: BookmarkDao = BookmarkDao.getInstance();
  private static bookmarkController: BookmarkController | null = null;

  /**
   * Creates singleton controller instance
   * @param {Express} app Express instance to declare the RESTful Web service
   * API
   * @returns BookmarkController
   */
  public static getInstance = (app: Express): BookmarkController => {
    if (BookmarkController.bookmarkController === null) {
      BookmarkController.bookmarkController = new BookmarkController();
      app.post(
        "/users/:uid/bookmarks/:tid",
        BookmarkController.bookmarkController.bookmarkATuit
      );
      app.delete(
        "/users/:uid/bookmarks/:tid",
        BookmarkController.bookmarkController.unBookmarkATuit
      );
      app.get(
        "/users/:uid/bookmarks",
        BookmarkController.bookmarkController.findTuitsBookmarkedByAUser
      );
      app.get(
        "/tuits/:tid/bookmarks",
        BookmarkController.bookmarkController.findUsersThatBookmarkedATuit
      );
      app.delete(
        "/users/:uid/bookmarks",
        BookmarkController.bookmarkController.removeTuitsBookmarkedByAUser
      );
      app.delete(
        "/tuits/:tid/bookmarks",
        BookmarkController.bookmarkController.removeUsersWhoBookmarkedATuit
      );
    }
    return BookmarkController.bookmarkController;
  };

  private constructor() {}

  bookmarkATuit = (req: Request, res: Response) =>
    BookmarkController.bookmarkDao
      .bookmarkATuit(req.params.tid, req.params.uid)
      .then((bookmark) => res.json(bookmark));

  unBookmarkATuit = (req: Request, res: Response) =>
    BookmarkController.bookmarkDao
      .unBookmarkATuit(req.params.tid, req.params.uid)
      .then((status) => res.json(status));

  findTuitsBookmarkedByAUser = (req: Request, res: Response) =>
    BookmarkController.bookmarkDao
      .findTuitsBookmarkedByAUser(req.params.uid)
      .then((bookmarks) => res.json(bookmarks));

  findUsersThatBookmarkedATuit = (req: Request, res: Response) =>
    BookmarkController.bookmarkDao
      .findUsersThatBookmarkedATuid(req.params.tid)
      .then((bookmarks) => res.json(bookmarks));

  removeTuitsBookmarkedByAUser = (req: Request, res: Response) =>
    BookmarkController.bookmarkDao
      .removeTuitsBookmarkedByAUser(req.params.uid)
      .then((bookmarks) => res.json(bookmarks));

  removeUsersWhoBookmarkedATuit = (req: Request, res: Response) =>
    BookmarkController.bookmarkDao
      .removeUsersWhoBookmarkedATuit(req.params.tid)
      .then((bookmarks) => res.json(bookmarks));
}
