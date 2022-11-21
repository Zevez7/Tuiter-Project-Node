"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @file Implements mongoose schema for users
 */
const mongoose_1 = __importDefault(require("mongoose"));
/**
 * @typedef UserSchema represents users collections
 * @property {string} username represents username of a user
 * @property {string} password represents password of a user
 * @property {string} firstname represents first name of a user
 * @property {string} lastName represents last name of a user
 * @property {string} email represents email of a user
 * @property {string} profilePhoto email represents profile photo of a user
 * @property {string} headerImage represents header image of a user
 * @property {string} accountType represents enum of account type of a user
 * @property {string} maritalStatus represents enum of marital status of a user
 * @property {string} biography represents biography of a user
 * @property {Date} dateOfBirth represents birthday of the user
 * @property {Date} joined represents when user joined the application
 * @property {ObjectId} location  represents location of the user
 */
const UserSchema = new mongoose_1.default.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    firstName: String,
    lastName: String,
    email: String,
    profilePhoto: String,
    headerImage: String,
    accountType: { type: String, default: 'PERSONAL', enum: ['PERSONAL', 'ACADEMIC', 'PROFESSIONAL'] },
    maritalStatus: { type: String, default: 'SINGLE', enum: ['MARRIED', 'SINGLE', 'WIDOWED'] },
    biography: String,
    dateOfBirth: Date,
    joined: { type: Date, default: Date.now },
    location: {
        latitude: { type: Number, default: 0.0 },
        longitude: { type: Number, default: 0.0 },
    }
}, { collection: 'users' });
exports.default = UserSchema;
