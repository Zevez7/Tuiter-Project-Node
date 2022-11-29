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
 * @property {string} interest1 name of the user interest1
 * @property {string} interest2 name of the user interest2
 * @property {string} interest3 name of the user interest3
 * @property {string} friends the userId of the user's friends
 */

export default class Profile {
  private userId: User | null = null;
  private profileImage: String = "";
  private personalWebsite: String = "";
  private linkedIn: String = "";
  private github: String = "";
  private instagram: String = "";
  private company: String = "";
  private interest1: String = "";
  private interest2: String = "";
  private interest3: String = "";
  private biography: String = "";
  private firstName: String = "";
  private lastName: String = "";
  private friends: User[] = [];
}
