/**
 * @file Implements mongoose schema for bookmark
 */
import mongoose, {Schema} from "mongoose";
import Bookmark from "../models/Bookmark";

/**
 * @typedef bookmarkSchema represents the tuit which was bookmarked by a user
 * @property {string} postedOn represents date on which user bookmarked the post
 * @property {string} bookmarkedBy represents the person who bookmarked
 * @property {string} bookmarkedTuit represents the tuit that got bookmarked
 */
const bookmarkSchema = new mongoose.Schema<Bookmark>({
    postedOn: {type: Date, default: Date.now},
    bookmarkedBy: {type: Schema.Types.ObjectId, ref: "UserModel"},
    bookmarkedTuit: {type: Schema.Types.ObjectId, ref: "TuitModel"}
}, {collection: "bookmarks"});
export default bookmarkSchema; 