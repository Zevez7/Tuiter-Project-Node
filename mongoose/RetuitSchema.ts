/**
 * @file Implements mongoose schema for likes
 */
import mongoose, {Schema} from "mongoose";
import Retuit from "../models/Retuit";

/**
 * @typedef RetuitSchema represents the tuit retuited by a user
 * @property {string} postedOn represents date when tuit was liked by that person
 * @property {string} retuitedBy represents the person who retuited the tuit
 * @property {string} retuitTuit represents the tuit which got retuited
 */
const RetuitSchema = new mongoose.Schema<Retuit>({
    postedOn: {type: Date, default: Date.now}, 
    retuitedBy: {type: Schema.Types.ObjectId, ref: "UserModel"},
    retuitTuit: {type: Schema.Types.ObjectId, ref: "TuitModel"}
}, {collection: "retuits"});
export default RetuitSchema;