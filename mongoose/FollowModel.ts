 /**
 * @file Implements mongoose model to CRUD
 * documents in the follow collection
 */
import mongoose from "mongoose";
import FollowSchema from "./FollowSchema";

const followSchema = mongoose.model('FollowModel', FollowSchema);
export default followSchema;