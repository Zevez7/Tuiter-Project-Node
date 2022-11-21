"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
* @file Implements mongoose model to CRUD
* documents in the follow collection
*/
const mongoose_1 = __importDefault(require("mongoose"));
const FollowSchema_1 = __importDefault(require("./FollowSchema"));
const followSchema = mongoose_1.default.model('FollowModel', FollowSchema_1.default);
exports.default = followSchema;
