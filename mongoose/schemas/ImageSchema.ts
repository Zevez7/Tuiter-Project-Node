import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
   fileName: {type: String},
   fileExtension: {type: String},
   base64OfImage: {type: String, required: true},
   dateOfUpload: {type: Date, default: Date.now},

}, {collection: 'images'});
export default ImageSchema;