import User from "./User";
import Tuit from "./Tuit";
 
/**
 * @file Bookmark represents the tuit which was bookmarked by a user
 * @property {string} bookmarkedBy represents the person who bookmarked
 * @property {string} bookmarkedTuit represents the tuit that got bookmarked
 * @property {string} postedOn represents date on which user bookmarked the post
 */
export default class Bookmark {
    private bookmarkedTuit: Tuit | null = null;
   private bookmarkedBy: User | null = null;
   private postedOn: Date = new Date(); 
}