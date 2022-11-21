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
const ImageModel_1 = __importDefault(require("../mongoose/ImageModel"));
class ImageDao {
    constructor() { }
    findImageById(imageId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ImageModel_1.default
                .find({ _id: imageId })
                .populate("uploadedBy")
                .exec();
        });
    }
    uploadImage(image) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ImageModel_1.default.bulkSave([...image]);
        });
    }
    deleteImageById(imageId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ImageModel_1.default.deleteOne({ _id: imageId });
        });
    }
    updateImage(imageId, image) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ImageModel_1.default.findOneAndUpdate({ _id: imageId }, image);
        });
    }
    findImagesPresentInATuit(tid) {
        return __awaiter(this, void 0, void 0, function* () {
            //  return await LikeModel.find({likedBy:uid})
            return yield ImageModel_1.default
                .find({ presentInWhichTuit: tid })
                .populate("likedTuit")
                .exec();
        });
    }
}
exports.default = ImageDao;
ImageDao.imageDao = null;
ImageDao.getInstance = () => {
    if (ImageDao.imageDao === null) {
        ImageDao.imageDao = new ImageDao();
    }
    return ImageDao.imageDao;
};
