"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @file tuit represents tuits posted by user
 * @property {string} tuit represents tuit of the user
 * @property {string} postedOn represents date when tuit was posted on
 * @property {string} tag represents the tags given to the tuit
 * @property {string} postedBy represents the topic the tuit covers
 */
class Tuit {
    constructor() {
        this.tuit = '';
        this.postedOn = new Date();
        this.postedBy = null;
        this.tag = null;
        this.topic = null;
    }
}
exports.default = Tuit;
