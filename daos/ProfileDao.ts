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

  async createProfile(profile: Profile): Promise<any> {
    return ProfileModel.create(profile);
  }

  async findAllProfile(): Promise<Profile[]> {
    return await ProfileModel.find();
  }

  async findProfileByUserId(uid: string): Promise<any> {
    return await ProfileModel.find({ userId: uid });
  }

  async updateProfileByUserId(uid: string, profile: Profile): Promise<any> {
    return await ProfileModel.findOneAndUpdate({ userId: uid }, profile);
  }
}
