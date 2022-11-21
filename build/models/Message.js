"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @file Message represents message posted by user
 * @property {string} message represents the message between the user
 * @property {string} to represents the person who recived the message
 * @property {string} from represents the person who sent the message
 * @property {string} sentOn represents date when user got the message
 */
class Message {
    constructor() {
        this.message = '';
        this.to = new Date();
        this.from = null;
        this.sendOn = null;
    }
}
exports.default = Message;
