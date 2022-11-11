/**
 * @file Implements mongoose schema for tuits
 */
import mongoose, {Schema} from "mongoose";
import Tuit from "../models/Tuit";

/**
 * @typedef TuitSchema represents tuits posted by user
 * @property {string} tuit represents tuit of the user
 * @property {string} postedOn represents date when tuit was posted on
 * @property {string} postedBy represents the user who posted the tuit
 */
const TuitSchema = new mongoose.Schema<Tuit>({
    tuit: String,
    postedOn: {type: Date, default: Date.now},
    postedBy: {type: Schema.Types.ObjectId, ref: "UserModel"},
}, {collection: "tuits"});
export default TuitSchema;