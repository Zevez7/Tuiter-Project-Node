/**
 * @file Implements mongoose schema for messages
 */
import mongoose, {Schema} from "mongoose";
import Message from "../models/Message";

/**
 * @typedef MessageSchema represents message posted by user
 * @property {string} sentOn represents date when user got the message
 * @property {string} message represents the message between the user
 * @property {string} to represents the person who recived the message
 * @property {string} from represents the person who sent the message
 */
const MessageSchema = new mongoose.Schema<Message>({
    sentOn: {type: Date, default: Date.now},
    message: String,
    to: {type: Schema.Types.ObjectId, ref: "UserModel"},
    from: {type: Schema.Types.ObjectId, ref: "UserModel"}
}, {collection: "messages"});
export default MessageSchema;