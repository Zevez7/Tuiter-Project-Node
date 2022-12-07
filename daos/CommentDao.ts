/**
 * @file Implements DAO managing data storage of likes. Uses mongoose TuitModel
 * to integrate with MongoDB
 */
import Comment from "../models/Comment";
import CommentModel from "../mongoose/CommentModel";
import CommentDaoI from "../interfaces/CommentDao";

/**
 * @class LikeDao Implements Data Access Object managing data storage
 * of likes
 * @property {LikeDao} UserDao Private single instance of LikeDao
 */
export default class CommentDao implements CommentDaoI {
  private static commentDao: CommentDao | null = null;
  /**
   * Gets a single instance of MessageDao
   * @returns return like object
   */
  public static getInstance = (): CommentDao => {
    if (CommentDao.commentDao === null) {
        CommentDao.commentDao = new CommentDao();
    }
    return CommentDao.commentDao;
  };
  private constructor() {}

  async commentATuit(tid: string, uid: string): Promise<any> {
    if (!(await CommentModel.exists({ commentedTuit: tid, commentedBy: uid }))) {
      return await CommentModel.create({ commentedTuit: tid, commentedBy: uid });
    }
    return await CommentModel.findOne({ commentedTuit: tid, commentedBy: uid });
  }

  async unCommentATuit(tid: string, uid: string): Promise<any> {
    return await CommentModel.deleteOne({ commentedTuit: tid, commentedBy: uid });
  }

  async findTuitscommentedByAUser(uid: string): Promise<any> {
    //modify to get array of tuit
    //  return await LikeModel.find({likedBy:uid})
    return await CommentModel.find({ commentedBy: uid }).populate("commentedTuit").exec();
  }

  async findUsersThatcommentedATuid(tid: string): Promise<any> {
    //modify to get array of tuit
    return await CommentModel.find({ commentedTuit: tid }).populate("commentedBy").exec();
  }
}
