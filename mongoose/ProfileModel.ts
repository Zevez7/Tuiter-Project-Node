/**
 * @file Implements mongoose model for Profile
 */
import mongoose from "mongoose";
import ProfileSchema from "./ProfileSchema";
const ProfileModel = mongoose.model("ProfileModel", ProfileSchema);
export default ProfileModel;
