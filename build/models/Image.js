"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Image {
    constructor() {
        this.fileName = '';
        this.fileExtension = '';
        this.base64OfImage = '';
        this.dateOfUpload = new Date();
        this.uploadedBy = null;
        this.presentInWhichTuit = null;
    }
}
exports.default = Image;
