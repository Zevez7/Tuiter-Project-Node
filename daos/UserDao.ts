/**
 * @file Implements DAO managing data storage of users. Uses mongoose TuitModel
 * to integrate with MongoDB
 */
import User from "../models/User";
import UserModel from "../mongoose/UserModel";
import UserDaoI from "../interfaces/UserDao";

/**
 * @class UserDao Implements Data Access Object managing data storage
 * of Users
 * @property {UserDao} UserDao Private single instance of UserDao
 */
export default class UserDao implements UserDaoI {
  private static userDao: UserDao | null = null;

  /**
   * Gets a single instance of UserDao
   * @returns return User object
   */
  public static getInstance = (): UserDao => {
    if (UserDao.userDao === null) {
      UserDao.userDao = new UserDao();
    }
    return UserDao.userDao;
  };
  private constructor() {}

  async findAllUsers(): Promise<User[]> {
    return await UserModel.find();
  }
  async findUserById(uid: string): Promise<any> {
    return await UserModel.findById(uid);
  }
  async createUser(user: User): Promise<any> {
    UserModel.create(user);
    return await UserModel.findOne({ username: user.username });
  }
  async deleteUser(uid: string): Promise<any> {
    return await UserModel.deleteOne({ _id: uid });
  }
  async updateUser(uid: string, user: User): Promise<any> {
    return await UserModel.findOneAndUpdate({ _id: uid }, user);
  }

  /**
   * Update user
   * @param uid user id
   * @param user user
   * @returns update status
   */
  async findUserByUsername(username: string): Promise<any> {
    return await UserModel.findOne({ username: username });
  }
}
