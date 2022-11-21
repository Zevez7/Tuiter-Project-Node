import mongoose from "mongoose";
import ImageSchema from "./ImageSchema";

const imageSchema = mongoose.model('ImageModel', ImageSchema);
export default imageSchema;