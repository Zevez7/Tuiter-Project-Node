"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MessageDao_1 = __importDefault(require("../daos/MessageDao"));
/**
 * @class LikeController Implements RESTful Web service API for users resource.
 * Defines the following HTTP endpoints:
 * <ul>
 *     <li>POST /messages to create message</li>
 *     <li>DELETE /messages/:messageId to delete message by message id</li>
 *     <li>GET /messages/sender/:senderId get messages based on sender id</li>
 *     <li>GET /messages/recevier/:recevierId get messages based on recevicer id</li>
 * </ul>
 * @property {LikeDao} FollowDao Singleton DAO implementing user CRUD operations
 * @property {LikeController} userController Singleton controller implementing
 * RESTful Web service API
 */
class MessageController {
    constructor() {
        this.createMessage = (req, res) => MessageController.messageDao.createMessage(req.body)
            .then(message => res.json(message));
        this.deleteAMessage = (req, res) => MessageController.messageDao.deleteAMessage(req.params.messageId)
            .then(status => res.json(status));
        this.getSentMessages = (req, res) => MessageController.messageDao.getSentMessages(req.params.senderId)
            .then(messages => res.json(messages));
        this.getReceivedMessage = (req, res) => MessageController.messageDao.getReceivedMessage(req.params.recevierId)
            .then(messages => res.json(messages));
        this.removeAllReceivedMessage = (req, res) => MessageController.messageDao.removeAllReceivedMessage(req.params.recevierId)
            .then(status => res.json(status));
        this.removeAllSendMessage = (req, res) => MessageController.messageDao.removeAllSendMessage(req.params.senderId)
            .then(status => res.json(status));
    }
}
exports.default = MessageController;
MessageController.messageDao = MessageDao_1.default.getInstance();
MessageController.messageController = null;
/**
 * Creates singleton controller instance
 * @param {Express} app Express instance to declare the RESTful Web service
 * API
 * @returns MessageController
 */
MessageController.getInstance = (app) => {
    if (MessageController.messageController === null) {
        MessageController.messageController = new MessageController();
        app.post("/messages", MessageController.messageController.createMessage);
        app.delete("/messages/:messageId", MessageController.messageController.deleteAMessage);
        app.get("/messages/sender/:senderId", MessageController.messageController.getSentMessages);
        app.get("/messages/recevier/:recevierId", MessageController.messageController.getReceivedMessage);
        app.delete("/messages/sender/:senderId", MessageController.messageController.removeAllSendMessage);
        app.delete("/messages/recevier/:recevierId", MessageController.messageController.removeAllReceivedMessage);
    }
    return MessageController.messageController;
};
