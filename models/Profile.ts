/**
 * @file Implements mongoose schema for Profile
 */

import User from "./User";

/**
 * @typedef Profile model represents Profile collections
 * @property {string} userId the user id of the profile user
 * @property {string} profileImage the http address of the profile image
 * @property {string} personWebsite the http address of the user personal website
 * @property {string} linkedIn the http address of the user linkedIn
 * @property {string} github the http address of the user github
 * @property {string} instagram the http address of the user instagram
 * @property {string} company name of the company the user work at
 * @property {string} interests an array of topic the user is interests in
 * @property {string} friends the userId of the user's friends
 */

export default class Profile {
  private userId: User | null = null;
  private profileImage: String = "";
  private personWebsite: String = "";
  private linkedIn: String = "";
  private github: String = "";
  private instagram: String = "";
  private company: String = "";
  private interests: String[] = [];
  private friends: User[] = [];
}
