"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
* @file Implements mongoose model to CRUD
* documents in the likes collection
*/
const mongoose_1 = __importDefault(require("mongoose"));
const LikeSchema_1 = __importDefault(require("./LikeSchema"));
const likeSchema = mongoose_1.default.model('LikeModel', LikeSchema_1.default);
exports.default = likeSchema;
