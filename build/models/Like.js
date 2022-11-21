"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @file Like represents the tuit liked by a user
 * @property {string} likedBy represents the person who liked the tuit
 * @property {string} likedTuit represents the tuit which got liked
 * @property {string} postedOn represents date when tuit was liked by that person
 */
class Like {
    constructor() {
        this.likedBy = null;
        this.likedTuit = null;
        this.postedOn = new Date();
    }
}
exports.default = Like;
