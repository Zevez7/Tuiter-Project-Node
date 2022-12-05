/**
 * @file Implements DAO managing data storage of tuits. Uses mongoose TuitModel
 * to integrate with MongoDB
 */
import TuitModel from "../mongoose/TuitModel";
import TuitDaoI from "../interfaces/TuitDao";
import Tuit from "../models/Tuit";

/**
 * @class TuitDao Implements Data Access Object managing data storage
 * of tuits
 * @property {TuitDao} tuitDao Private single instance of TuitDao
 */
export default class TuitDao implements TuitDaoI {
  private static tuitDao: TuitDao | null = null;
  /**
   * Gets a single instance of TuitDao
   * @returns return Tuit object
   */
  public static getInstance = (): TuitDao => {
    if (TuitDao.tuitDao === null) {
      TuitDao.tuitDao = new TuitDao();
    }
    return TuitDao.tuitDao;
  };
  private constructor() {}

  async findAllTuits(): Promise<Tuit[]> {
    return await TuitModel.find()
      .sort([["postedOn", -1]])
      .populate({
        path: "postedBy",
        select: "username",
      });
  }
  async findTuitById(tuidId: string): Promise<any> {
    return await TuitModel.findById(tuidId);
  }

  async createTuit(uid: string, tuit: Tuit): Promise<any> {
    return await TuitModel.create({ ...tuit, postedBy: uid });
  }

  async deleteTuit(tid: string): Promise<any> {
    return await TuitModel.deleteOne({ _id: tid });
  }
  async updateTuit(tid: string, tuit: Tuit): Promise<any> {
    return await TuitModel.findOneAndUpdate({ _id: tid }, tuit);
  }

  async findTuitsByUser(uid: string): Promise<any> {
    return await TuitModel.find({ postedBy: uid })
      .sort([["postedOn", -1]])
      .populate({
        path: "postedBy",
        select: "username",
      }); //to be changed
  }
}
