/**
 * @file Implement DAO for managing data stoarge of profile with mongoose and mongoDB
 */

import ProfileDaoI from "../interfaces/ProfileDao";
import Profile from "../models/Profile";
import ProfileModel from "../mongoose/ProfileModel";

export default class ProfileDao implements ProfileDaoI {
  private static profileDao: ProfileDao | null = null;

  /**
   * Gets a single instance of ProfileDao
   * @returns return profile object
   */
  public static getInstance = (): ProfileDao => {
    if (ProfileDao.profileDao === null) {
      ProfileDao.profileDao = new ProfileDao();
    }
    return ProfileDao.profileDao;
  };
  private constructor() {}

  /**
   * create a new profile controller
   * @param req Request for the API endpoints
   * @param res Response from the node server
   * @returns newly created profile
   */
  async createProfile(profile: Profile): Promise<any> {
    return ProfileModel.create(profile);
  }

  /**
   * find all profile controller
   * @param req Request for the API endpoints
   * @param res Response from the node server
   * @returns all profile
   */
  async findAllProfile(): Promise<Profile[]> {
    return await ProfileModel.find();
  }

  /**
   * find one profile by user id controller
   * @param req Request for the API endpoints
   * @param res Response from the node server
   * @returns profile found
   */
  async findProfileByUserId(uid: string): Promise<any> {
    return await ProfileModel.find({ userId: uid });
  }
  /**
   * Update profile by user id
   * @param req request object
   * @param res response object
   * @return update status
   */
  async updateProfileByUserId(uid: string, profile: Profile): Promise<any> {
    return await ProfileModel.findOneAndUpdate({ userId: uid }, profile);
  }

  /**
   * Delete profile by user id
   * @param req request object
   * @param res response object
   * @return delete status
   */
  async deleteProfileByUserId(uid: string): Promise<any> {
    return await ProfileModel.deleteOne({ userId: uid });
  }
}
