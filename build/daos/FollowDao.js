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
const FollowModel_1 = __importDefault(require("../mongoose/FollowModel"));
/**
 * @class FollowDao Implements Data Access Object managing data storage
 * of follows
 * @property {FollowDao} UserDao Private single instance of FollowDao
 */
class FollowDao {
    constructor() { }
    createFollow(follow) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield FollowModel_1.default.create(follow);
        });
    }
    deleteFollow(userFollowed, userFollowing) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield FollowModel_1.default.deleteOne({ userFollowed: userFollowed, userFollowing: userFollowing });
        });
    }
    getFollowingOfAUser(uid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield FollowModel_1.default
                .find({ userFollowing: uid })
                .populate("userFollowed")
                .exec();
        });
    }
    getFollowersOfAUser(uid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield FollowModel_1.default
                .find({ userFollowed: uid })
                .populate("userFollowing")
                .exec();
        });
    }
    removeAllPeopleWhoWereFollowingAUser(uid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield FollowModel_1.default.deleteOne({ userFollowed: uid });
        });
    }
    removeAllPeopleWhoWereFollowedByAUser(uid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield FollowModel_1.default.deleteOne({ userFollowing: uid });
        });
    }
}
exports.default = FollowDao;
FollowDao.followDao = null;
/**
 * Gets a single instance of FollowDao
 * @returns return follow object
 */
FollowDao.getInstance = () => {
    if (FollowDao.followDao === null) {
        FollowDao.followDao = new FollowDao();
    }
    return FollowDao.followDao;
};
