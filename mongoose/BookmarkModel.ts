 /**
 * @file Implements mongoose model to CRUD
 * documents in the bookmark collection
 */
import mongoose from "mongoose";
import BookmarkSchema from "./BookmarkSchema";

const bookmarkSchema = mongoose.model('BookmarkModel', BookmarkSchema);
export default bookmarkSchema;