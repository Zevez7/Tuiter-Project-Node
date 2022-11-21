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
const BookmarkModel_1 = __importDefault(require("../mongoose/BookmarkModel"));
/**
 * @class BookmarkDao Implements Data Access Object managing data storage
 * of follows
 * @property {BookmarkDao} UserDao Private single instance of FollowDao
 */
class BookmarkDao {
    constructor() { }
    bookmarkATuit(tid, uid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield BookmarkModel_1.default.create({ bookmarkedTuit: tid, bookmarkedBy: uid });
        });
    }
    unBookmarkATuit(tid, uid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield BookmarkModel_1.default.deleteOne({ bookmarkedTuit: tid, bookmarkedBy: uid });
        });
    }
    findTuitsBookmarkedByAUser(uid) {
        return __awaiter(this, void 0, void 0, function* () {
            //  return await BookmarkModel.find({likedBy:uid});
            return yield BookmarkModel_1.default
                .find({ bookmarkedBy: uid })
                .populate("bookmarkedTuit")
                .exec();
        });
    }
    findUsersThatBookmarkedATuid(tid) {
        return __awaiter(this, void 0, void 0, function* () {
            // return await BookmarkModel.find({likedTuit:tid});
            return yield BookmarkModel_1.default
                .find({ bookmarkedTuit: tid })
                .populate("bookmarkedBy")
                .exec();
        });
    }
    removeTuitsBookmarkedByAUser(uid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield BookmarkModel_1.default.deleteOne({ bookmarkedBy: uid });
        });
    }
    removeUsersWhoBookmarkedATuid(tid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield BookmarkModel_1.default.deleteOne({ bookmarkedTuit: tid });
        });
    }
}
exports.default = BookmarkDao;
BookmarkDao.bookmarkDaoDao = null;
/**
 * Gets a single instance of BookmarkDao
 * @returns return Bookmark object
 */
BookmarkDao.getInstance = () => {
    if (BookmarkDao.bookmarkDaoDao === null) {
        BookmarkDao.bookmarkDaoDao = new BookmarkDao();
    }
    return BookmarkDao.bookmarkDaoDao;
};
