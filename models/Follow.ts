import User from "./User";

/**
 * @file Follow represents the follow relationship betweent the user
 * @property {string} userFollowed represents the person who got followed
 * @property {string} userFollowing represents the person who was following
 * @property {string} followedOn represents date user started following another user
 */
export default class Follow {
    private userFollowed:  User | null = null;
    private userFollowing: User | null = null;
    private followedOn: Date = new Date();
 } 