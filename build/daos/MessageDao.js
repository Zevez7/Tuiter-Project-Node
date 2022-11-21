"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MessageModel_1 = __importDefault(require("../mongoose/MessageModel"));
/**
 * @class MessageDao Implements Data Access Object managing data storage
 * of messages
 * @property {MessageDao} UserDao Private single instance of MessageDao
 */
class MessageDao {
    constructor() { }
    createMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield MessageModel_1.default.create(message);
        });
    }
    deleteAMessage(messageId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield MessageModel_1.default.deleteOne({ _id: messageId });
        });
    }
    getSentMessages(senderId) {
        return __awaiter(this, void 0, void 0, function* () {
            // return await MessageModel.find({to:senderId});
            return yield MessageModel_1.default
                .find({ from: senderId })
                .populate("to")
                .exec();
        });
    }
    getReceivedMessage(receiverId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield MessageModel_1.default
                .find({ to: receiverId })
                .populate("from")
                .exec();
        });
    }
    removeAllSendMessage(senderId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield MessageModel_1.default.deleteOne({ from: senderId });
        });
    }
    removeAllReceivedMessage(receiverId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield MessageModel_1.default.deleteOne({ to: receiverId });
        });
    }
}
exports.default = MessageDao;
MessageDao.messageDao = null;
/**
 * Gets a single instance of MessageDao
 * @returns return Messages object
 */
MessageDao.getInstance = () => {
    if (MessageDao.messageDao === null) {
        MessageDao.messageDao = new MessageDao();
    }
    return MessageDao.messageDao;
};
