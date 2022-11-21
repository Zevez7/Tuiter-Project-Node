"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
* @file Implements mongoose model to CRUD
* documents in the tuits collection
*/
const mongoose_1 = __importDefault(require("mongoose"));
const TuitSchema_1 = __importDefault(require("./TuitSchema"));
const tuitSchema = mongoose_1.default.model('TuitModel', TuitSchema_1.default);
exports.default = tuitSchema;
