/**
 * @file Implements mongoose schema for follow
 */
import mongoose, { Schema } from "mongoose";
import Follow from "../models/Follow";

/**
 * @typedef FollowSchema represents the follow relationship betweent the user
 * @property {string} followedOn represents date user started following another user
 * @property {string} userFollowed represents the person who got followed
 * @property {string} userFollowing represents the person who was following
 */
const FollowSchema = new mongoose.Schema<Follow>(
  {
    followedOn: { type: Date, default: Date.now },
    userFollowed: { type: Schema.Types.ObjectId, ref: "UserModel" },
    userFollowing: { type: Schema.Types.ObjectId, ref: "UserModel" },
  },
  { collection: "followers" }
);
export default FollowSchema;
