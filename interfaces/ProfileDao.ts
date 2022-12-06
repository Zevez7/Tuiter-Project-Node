/**
 * @file This file is the dao inferface for profile collection
 */
import Profile from "../models/Profile";

export default interface ProfileDao {
  /**
   * Create a profile
   * @param profile to be created
   */
  createProfile(profile: Profile): Promise<Profile>;

  /**
   * Find all Profile
   */
  findAllProfile(): Promise<Profile[]>;

  /**
   * Find profile by user id
   * @param uid user id for which we need to find the data
   */
  findProfileByUserId(uid: string): Promise<any>;

  /**
   * Update Profile by user id
   * @param uid user id
   */
  updateProfileByUserId(uid: string, profile: Profile): Promise<any>;

  /**
   * Delete Profile by user id
   * @param uid user id
   */
  deleteProfileByUserId(uid: string, profile: Profile): Promise<any>;
}
