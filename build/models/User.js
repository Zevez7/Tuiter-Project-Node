"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AccountType_1 = __importDefault(require("./AccountType"));
const MaritalStatus_1 = __importDefault(require("./MaritalStatus"));
/**
 * @file UserSchema represents users collections
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
class User {
    constructor() {
        this.username = '';
        this.password = '';
        this.firstName = null;
        this.lastName = null;
        this.email = '';
        this.profilePhoto = null;
        this.headerImage = null;
        this.accountType = AccountType_1.default.Personal;
        this.maritalStatus = MaritalStatus_1.default.Single;
        this.biography = null;
        this.dateOfBirth = null;
        this.joined = new Date();
        this.location = null;
        this.followers = [];
        this.following = [];
        this.chatRoomUsers = [];
    }
}
exports.default = User;
