"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
* @file Implements mongoose model to CRUD
* documents in the bookmark collection
*/
const mongoose_1 = __importDefault(require("mongoose"));
const BookmarkSchema_1 = __importDefault(require("./BookmarkSchema"));
const bookmarkSchema = mongoose_1.default.model('BookmarkModel', BookmarkSchema_1.default);
exports.default = bookmarkSchema;
