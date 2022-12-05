import mongoose,  { Schema } from "mongoose";

const ImageSchema = new mongoose.Schema({
   fileName: {type: String},
   fileExtension: {type: String},
   base64OfImage: {type: String, required: true},
   dateOfUpload: {type: Date, default: Date.now},
   uploadedBy: {type: Schema.Types.ObjectId, ref: "UserModel"},
   presentInWhichTuit: {type: Schema.Types.ObjectId, ref: "TuitModel"},

}, {collection: 'images'});
export default ImageSchema;