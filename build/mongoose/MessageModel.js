"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
* @file Implements mongoose model to CRUD
* documents in the messages collection
*/
const mongoose_1 = __importDefault(require("mongoose"));
const MessageSchema_1 = __importDefault(require("./MessageSchema"));
const messageSchema = mongoose_1.default.model('MessageModel', MessageSchema_1.default);
exports.default = messageSchema;
