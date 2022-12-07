/**
 * @file Implements mongoose schema for comment
 */
import mongoose, {Schema} from "mongoose";
import Comment from "../models/Comment";

/**
 * @typedef CommentSchema represents the tuit commented by a user
 * @property {string} postedOn represents date when tuit was commmented by that person
 * @property {string} commentedBy represents the person who commented the tuit
 * @property {string} commentedTuit represents the tuit which got commented
 */
const CommentSchema = new mongoose.Schema<Comment>({
    postedOn: {type: Date, default: Date.now}, 
    commentedBy: {type: Schema.Types.ObjectId, ref: "UserModel"},
    commentedTuit: {type: Schema.Types.ObjectId, ref: "TuitModel"}
}, {collection: "comments"});
export default CommentSchema;