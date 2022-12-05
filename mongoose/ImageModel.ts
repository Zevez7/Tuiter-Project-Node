import mongoose from "mongoose";
import ImageSchema from "./ImageSchema";

const imageModel = mongoose.model('ImageModel', ImageSchema);
export default imageModel;