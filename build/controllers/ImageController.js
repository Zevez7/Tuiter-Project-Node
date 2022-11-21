"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ImageDao_1 = __importDefault(require("../daos/ImageDao"));
class ImageController {
    constructor() {
        this.findImageById = (req, res) => ImageController.imageDao.findImageById(req.params.imageId)
            .then(bookmark => res.json(bookmark));
        this.uploadImage = (req, res) => ImageController.imageDao.uploadImage(req.body)
            .then(status => res.json(status));
        this.deleteImage = (req, res) => ImageController.imageDao.deleteImageById(req.params.imageId)
            .then(status => res.json(status));
        this.updateImage = (req, res) => ImageController.imageDao.updateImage(req.params.imageId, req.body)
            .then(bookmarks => res.json(bookmarks));
        this.findImagesPresentInATuit = (req, res) => ImageController.imageDao.findImagesPresentInATuit(req.params.tid)
            .then(images => res.json(images));
    }
}
exports.default = ImageController;
ImageController.imageDao = ImageDao_1.default.getInstance();
ImageController.imageController = null;
ImageController.getInstance = (app) => {
    if (ImageController.imageController === null) {
        ImageController.imageController = new ImageController();
        app.post("/image", ImageController.imageController.uploadImage);
        app.delete("/image/:imageId", ImageController.imageController.deleteImage);
        app.get("/image/:imageId", ImageController.imageController.findImageById);
        app.get("/user/:tid/images", ImageController.imageController.findImagesPresentInATuit);
        app.put("/image/:imageId", ImageController.imageController.updateImage);
    }
    return ImageController.imageController;
};
