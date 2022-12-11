import User from "../models/User";

/**
 * @file This file acts as an interface for users collections
 */
export default interface UserDao {
  /**
   * Find all users
   */
  findAllUsers(): Promise<User[]>;
  /**
   * Find user by its id
   * @param uid user id for which we need to find the data
   */
  findUserById(uid: string): Promise<any>;
  /**
   * Create a user
   * @param user user to be created
   */
  createUser(user: User): Promise<User>;
  /**
   * Update user
   * @param uid user id of the user data present
   * @param user updated user
   */
  updateUser(uid: string, user: User): Promise<any>;
  /**
   * Delete user
   * @param uid user id  of the user to be deleted
   */
  deleteUser(uid: string): Promise<any>;

  /**
   * Delete user
   * @param username user name
   * @returns delete status
   */
  deleteUsersByUsername(username: string): Promise<any>;
}
