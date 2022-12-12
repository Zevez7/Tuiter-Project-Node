/**
 * @file Implements DAO managing data storage of likes. Uses mongoose TuitModel
 * to integrate with MongoDB
 */
import Like from "../models/Retuit";
import RetuitModel from "../mongoose/RetuitModel";
import RetuitDaoI from "../interfaces/RetuitDao";

/**
 * @class LikeDao Implements Data Access Object managing data storage
 * of likes
 * @property {LikeDao} UserDao Private single instance of LikeDao
 */
export default class RetuitDao implements RetuitDaoI {
  private static retuitDao: RetuitDao | null = null;
  /**
   * Gets a single instance of MessageDao
   * @returns return like object
   */
  public static getInstance = (): RetuitDao => {
    if (RetuitDao.retuitDao === null) {
        RetuitDao.retuitDao = new RetuitDao();
    }
    return RetuitDao.retuitDao;
  };
  private constructor() {}

  async retuitATuit(tid: string, uid: string): Promise<any> {
    if (!(await RetuitModel.exists({ retuitTuit: tid, retuitedBy: uid }))) {
      return await RetuitModel.create({ retuitTuit: tid, retuitedBy: uid });
    }
    return await RetuitModel.findOne({ retuitTuit: tid, retuitedBy: uid });
  }

  async findUsersThatRetuitATuid(tid: string): Promise<any> {
    //modify to get array of tuit
    return await RetuitModel.find({ retuitTuit: tid }).populate("retuitedBy").exec();
  }
}
