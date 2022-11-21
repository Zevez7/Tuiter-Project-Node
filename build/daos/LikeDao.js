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
const LikeModel_1 = __importDefault(require("../mongoose/LikeModel"));
/**
 * @class LikeDao Implements Data Access Object managing data storage
 * of likes
 * @property {LikeDao} UserDao Private single instance of LikeDao
 */
class LikeDao {
    constructor() { }
    likeATuit(tid, uid) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(yield LikeModel_1.default.exists({ likedTuit: tid, likedBy: uid }))) {
                return yield LikeModel_1.default.create({ likedTuit: tid, likedBy: uid });
            }
            return yield LikeModel_1.default.findOne({ likedTuit: tid, likedBy: uid });
        });
    }
    dislikeATuit(tid, uid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield LikeModel_1.default.deleteOne({ likedTuit: tid, likedBy: uid });
        });
    }
    findTuitsLikedByAUser(uid) {
        return __awaiter(this, void 0, void 0, function* () {
            //  return await LikeModel.find({likedBy:uid})
            return yield LikeModel_1.default
                .find({ likedBy: uid })
                .populate("likedTuit")
                .exec();
        });
    }
    findUsersThatLikedATuid(tid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield LikeModel_1.default
                .find({ likedTuit: tid })
                .populate("likedBy")
                .exec();
        });
    }
}
exports.default = LikeDao;
LikeDao.likeDao = null;
/**
  * Gets a single instance of MessageDao
  * @returns return like object
  */
LikeDao.getInstance = () => {
    if (LikeDao.likeDao === null) {
        LikeDao.likeDao = new LikeDao();
    }
    return LikeDao.likeDao;
};
