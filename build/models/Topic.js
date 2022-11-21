"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @file This entity class represents the topic tuit covers
 * @property {string} name represents the name of the topic
 * @property {ObjectId} tuit represents the tuit for which this topic is associated
 */
class Topic {
    constructor() {
        this.name = '';
        this.tuit = null;
    }
}
exports.default = Topic;
