import Tuit from "../models/Tuit";
import Bookmark from "../models/Bookmark";
import User from "../models/Like";
/**
 * @file This file is an interface for using Bookmark collections
 */
export default interface BookmarkDao {
  /**
   * Bookmarks the tuit
   * @param tid tuit id to be bookmarked
   * @param uid user id of the user who would bookmark
   */
  bookmarkATuit(tid: string, uid: string): Promise<Bookmark>;
  /**
   * Unbookmarks the tuit
   * @param tid tuit id to be bookmarked
   * @param uid user id of the user who would bookmark
   */
  unBookmarkATuit(tid: string, uid: string): Promise<any>;
  /**
   * find tuits bookmarked by the user
   * @param uid user id of the user who would bookmark
   */
  findTuitsBookmarkedByAUser(uid: string): Promise<Tuit[]>;
  /**
   * find users that bookmarked a tuit
   * @param tid tuit id to be bookmarked
   */
  findUsersThatBookmarkedATuid(tid: string): Promise<any[]>;

  /**
   * Remove all tuits bookmarked by a user
   * @param tid tuit id to be bookmarked
   */
  removeTuitsBookmarkedByAUser(uid: string): Promise<any[]>;

  /**
   * Remove all users who bookmarked by a user
   * @param tid tuit id to be bookmarked
   */
  removeUsersWhoBookmarkedATuit(tid: string): Promise<any[]>;
}
