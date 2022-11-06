/**
 * @file Implements mongoose schema for likes
 */
import mongoose, {Schema} from "mongoose";
import Like from "../models/Like";

/**
 * @typedef LikeSchema represents the tuit liked by a user
 * @property {string} postedOn represents date when tuit was liked by that person
 * @property {string} likedBy represents the person who liked the tuit
 * @property {string} likedTuit represents the tuit which got liked
 */
const LikeSchema = new mongoose.Schema<Like>({
    postedOn: {type: Date, default: Date.now}, 
    likedBy: {type: Schema.Types.ObjectId, ref: "UserModel"},
    likedTuit: {type: Schema.Types.ObjectId, ref: "TuitModel"}
}, {collection: "likes"});
export default LikeSchema;