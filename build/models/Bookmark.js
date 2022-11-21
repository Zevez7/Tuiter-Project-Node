"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @file Bookmark represents the tuit which was bookmarked by a user
 * @property {string} bookmarkedBy represents the person who bookmarked
 * @property {string} bookmarkedTuit represents the tuit that got bookmarked
 * @property {string} postedOn represents date on which user bookmarked the post
 */
class Bookmark {
    constructor() {
        this.bookmarkedTuit = null;
        this.bookmarkedBy = null;
        this.postedOn = new Date();
    }
}
exports.default = Bookmark;
