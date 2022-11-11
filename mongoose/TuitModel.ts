 /**
 * @file Implements mongoose model to CRUD
 * documents in the tuits collection
 */
import mongoose from "mongoose";
import TuitSchema from "./TuitSchema";

const tuitSchema = mongoose.model('TuitModel', TuitSchema);
export default tuitSchema;