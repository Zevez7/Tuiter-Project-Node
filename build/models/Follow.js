"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @file Follow represents the follow relationship betweent the user
 * @property {string} userFollowed represents the person who got followed
 * @property {string} userFollowing represents the person who was following
 * @property {string} followedOn represents date user started following another user
 */
class Follow {
    constructor() {
        this.userFollowed = null;
        this.userFollowing = null;
        this.followedOn = new Date();
    }
}
exports.default = Follow;
