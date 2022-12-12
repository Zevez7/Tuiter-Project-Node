 /**
 * @file Implements mongoose model to CRUD
 * documents in the retuits collection
 */
import mongoose from "mongoose";
import RetuitSchema from "./RetuitSchema";

const RetuitModel = mongoose.model('RetuitModel', RetuitSchema);
export default RetuitModel;