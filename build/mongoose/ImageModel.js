"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ImageSchema_1 = __importDefault(require("./ImageSchema"));
const imageSchema = mongoose_1.default.model('ImageModel', ImageSchema_1.default);
exports.default = imageSchema;
