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
   * create a new profile
   * @returns newly created profile
   * @param profile
   */
  async createProfile(profile: Profile): Promise<any> {
    return ProfileModel.create(profile);
  }

  /**
   * find all profile
   * @returns all profile
   */
  async findAllProfile(): Promise<Profile[]> {
    return await ProfileModel.find();
  }

  /**
   * find one profile by user id
   * @returns profile found
   * @param uid
   */
  async findProfileByUserId(uid: string): Promise<any> {
    return await ProfileModel.findOne({ userId: uid });
  }
  /**
   * Update profile by user id
   * @return update status
   * @param uid
   * @param profile
   */
  async updateProfileByUserId(uid: string, profile: Profile): Promise<any> {
    return await ProfileModel.findOneAndUpdate({ userId: uid }, profile);
  }

  /**
   * Delete profile by user id
   * @return delete status
   * @param uid
   */
  async deleteProfileByUserId(uid: string): Promise<any> {
    return await ProfileModel.deleteOne({ userId: uid });
  }
}
