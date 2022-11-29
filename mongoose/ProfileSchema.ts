/**
 * @file Implements mongoose schema for Profile
 */
import mongoose, { Schema } from "mongoose";

/**
 * @typedef ProfileSchema represents Profile collections
 * @property {string} userId the user id of the profile user
 * @property {string} profileImage the http address of the profile image
 * @property {string} personWebsite the http address of the user personal website
 * @property {string} linkedIn the http address of the user linkedIn
 * @property {string} github the http address of the user github
 * @property {string} instagram the http address of the user instagram
 * @property {string} company name of the company the user work at
 * @property {string} interest1 name user interest1
 * @property {string} interest2 name user interest2
 * @property {string} interest3 name user interest3
 * @property {string} friends the userId of the user's friends
 */
const ProfileSchema = new mongoose.Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "UserModel" },
    profileImage: { String },
    personWebsite: { String },
    linkedIn: { String },
    github: { String },
    instagram: { String },
    company: { String },
    interest1: { String },
    interest2: { String },
    interest3: { String },
    friends: [{ type: String }],
  },
  { collection: "profiles" }
);
export default ProfileSchema;
