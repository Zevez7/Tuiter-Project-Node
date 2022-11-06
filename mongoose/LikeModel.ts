 /**
 * @file Implements mongoose model to CRUD
 * documents in the likes collection
 */
import mongoose from "mongoose";
import LikeSchema from "./LikeSchema";

const likeSchema = mongoose.model('LikeModel', LikeSchema);
export default likeSchema;