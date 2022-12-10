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

  /**
   * Find all user
   * @returns array of user
   */
  async findAllUsers(): Promise<User[]> {
    return await UserModel.find();
  }
  /**
   * Find user by user id
   * @param {string}uid user id
   * @returns user
   */
  async findUserById(uid: string): Promise<any> {
    return await UserModel.findById(uid);
  }
  /**
   * Create new user
   * @param user User object
   * @returns user
   */
  async createUser(user: User): Promise<any> {
    return await UserModel.create(user);
  }
  /**
   * Delete user
   * @param uid user id
   * @returns delete status
   */
  async deleteUser(uid: string): Promise<any> {
    return await UserModel.deleteOne({ _id: uid });
  }

  /**
   * Update user
   * @param uid user id
   * @param user user
   * @returns update status
   */
  async updateUser(uid: string, user: any): Promise<any> {
    return await UserModel.updateOne({ _id: uid }, { $set: user });
  }

  /**
   * Update user
   * @param username user name
   * @returns update status
   */
  async findUserByUsername(username: string): Promise<any> {
    return await UserModel.findOne({ username: username });
  }

  /**
   * Delete user by username
   * @param username username
   * @returns delete status
   */
  deleteUsersByUsername = async (username: string): Promise<any> =>
    UserModel.deleteMany({ username });
}
