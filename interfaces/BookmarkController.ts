import { Request, Response } from "express";
/**
 * @file This file is an interface for Bookmark api
 */
export default interface BookmarkController {
  /**
   * Bookmarks the tuit
   * @param req request object
   * @param res response object
   */
  bookmarkATuit(req: Request, res: Response): void;
  /**
   * Unbookmarks the tuit
   * @param req request object
   * @param res response object
   */
  unBookmarkATuit(req: Request, res: Response): void;
  /**
   * find tuits bookmarked by the user
   * @param req request object
   * @param res response object
   */
  findTuitsBookmarkedByAUser(req: Request, res: Response): void;
  /**
   * find users that bookmarked a tuit
   * @param req request object
   * @param res response object
   */
  findUsersThatBookmarkedATuit(req: Request, res: Response): void;

  /**
   * Remove all tuits bookmarked by a user
   * @param req request object
   * @param res response object
   */
  removeTuitsBookmarkedByAUser(req: Request, res: Response): void;

  /**
   * Remove all users who bookmarked by a user
   * @param req request object
   * @param res response object
   */
  removeUsersWhoBookmarkedATuit(req: Request, res: Response): void;
}
