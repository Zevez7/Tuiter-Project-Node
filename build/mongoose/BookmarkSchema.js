"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @file Implements mongoose schema for bookmark
 */
const mongoose_1 = __importStar(require("mongoose"));
/**
 * @typedef bookmarkSchema represents the tuit which was bookmarked by a user
 * @property {string} postedOn represents date on which user bookmarked the post
 * @property {string} bookmarkedBy represents the person who bookmarked
 * @property {string} bookmarkedTuit represents the tuit that got bookmarked
 */
const bookmarkSchema = new mongoose_1.default.Schema({
    postedOn: { type: Date, default: Date.now },
    bookmarkedBy: { type: mongoose_1.Schema.Types.ObjectId, ref: "UserModel" },
    bookmarkedTuit: { type: mongoose_1.Schema.Types.ObjectId, ref: "TuitModel" }
}, { collection: "bookmarks" });
exports.default = bookmarkSchema;
