/**
 * @file Implements DAO managing data storage of bookmarks. Uses mongoose TuitModel
 * to integrate with MongoDB
 */
import Bookmark from "../models/Bookmark";
import BookmarkModel from "../mongoose/BookmarkModel";
import BookmarkDaoI from "../interfaces/BookmarkDao";

/**
 * @class BookmarkDao Implements Data Access Object managing data storage
 * of follows
 * @property {BookmarkDao} UserDao Private single instance of FollowDao
 */
export default class BookmarkDao implements BookmarkDaoI { 

    private static bookmarkDaoDao: BookmarkDao | null = null;

    /**
     * Gets a single instance of BookmarkDao
     * @returns return Bookmark object
     */
    public static getInstance = (): BookmarkDao => {
        if(BookmarkDao.bookmarkDaoDao === null) {
            BookmarkDao.bookmarkDaoDao = new BookmarkDao();
        }
        return BookmarkDao.bookmarkDaoDao;
    }
    private constructor() {}


  async bookmarkATuit(tid: string, uid: string): Promise<Bookmark> {
    return await BookmarkModel.create({bookmarkedTuit:tid, bookmarkedBy: uid});
}

async unBookmarkATuit(tid: string, uid: string): Promise<any> {
    return await BookmarkModel.deleteOne({bookmarkedTuit:tid, bookmarkedBy: uid});
}

async findTuitsBookmarkedByAUser(uid: string): Promise<any> { //modify to get array of tuit
  //  return await BookmarkModel.find({likedBy:uid});
    return  await BookmarkModel
  .find({bookmarkedBy:uid})
  .populate("bookmarkedTuit")
  .exec();
}

async findUsersThatBookmarkedATuid(tid: string): Promise<any> { //modify to get array of tuit
   // return await BookmarkModel.find({likedTuit:tid});
   return  await BookmarkModel
  .find({bookmarkedTuit:tid})
  .populate("bookmarkedBy")
  .exec();

}

async removeTuitsBookmarkedByAUser(uid: string): Promise<any> {
  return await BookmarkModel.deleteOne({ bookmarkedBy: uid});
}

async removeUsersWhoBookmarkedATuid(tid: string): Promise<any> {
return await BookmarkModel.deleteOne({ bookmarkedTuit: tid});
}


} 