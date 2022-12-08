/**
 * @file Implements DAO managing data storage of likes. Uses mongoose TuitModel
 * to integrate with MongoDB
 */
import Like from "../models/Like";
import LikeModel from "../mongoose/LikeModel";
import LikeDaoI from "../interfaces/LikeDao";
import Bookmark from "../models/Bookmark";
import BookmarkModel from "../mongoose/BookmarkModel";

/**
 * @class LikeDao Implements Data Access Object managing data storage
 * of likes
 * @property {LikeDao} UserDao Private single instance of LikeDao
 */
export default class LikeDao implements LikeDaoI {
  private static likeDao: LikeDao | null = null;
  /**
   * Gets a single instance of MessageDao
   * @returns return like object
   */
  public static getInstance = (): LikeDao => {
    if (LikeDao.likeDao === null) {
      LikeDao.likeDao = new LikeDao();
    }
    return LikeDao.likeDao;
  };
  private constructor() {}

  async likeATuit(tid: string, uid: string): Promise<Like> {
    if (!(await LikeModel.exists({ likedTuit: tid, likedBy: uid }))) {
      return await LikeModel.create({ likedTuit: tid, likedBy: uid });
    }
    return await LikeModel.create({ likedTuit: tid, likedBy: uid });
  }

  async dislikeATuit(tid: string, uid: string): Promise<any> {
    return await LikeModel.deleteOne({ likedTuit: tid, likedBy: uid });
  }

  async findTuitsLikedByAUser(uid: string): Promise<any> {
    //modify to get array of tuit
    //  return await LikeModel.find({likedBy:uid})
    return await LikeModel.find({ likedBy: uid }).populate("likedTuit").exec();
  }

  async findUsersThatLikedATuit(tid: string): Promise<any> {
    //modify to get array of tuit
    return await LikeModel.find({ likedTuit: tid }).populate("likedBy").exec();
  }
}
