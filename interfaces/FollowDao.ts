import Follow from "../models/Follow";

/**
 * @file This file is an interface for using follow collections
 */
export default interface FollowDao { 
   /**
    * A user follows another user
    * @param follow follow object to be saved
    */ 
   createFollow(follow: Follow): Promise<Follow>;
    /**
    * A user unfollows another user
    * @param userFollowed user to be followed
    * @param userFollowing user to who is following
    */
   deleteFollow(userFollowed: string, userFollowing: string): Promise<any>;
    /**
    * Get people who user is following
    * @param uid user id of whom we need to find following
    */
   getFollowingOfAUser(uid: string): Promise<Follow[]>;
    /**
    * Get people who user is a follower
    * @param uid user id of whom we need to find follower
    */
   getFollowersOfAUser(uid: string): Promise<Follow[]>;

    /**
    * Remove all the people who were following a user
    * @param uid user id 
    */
   removeAllPeopleWhoWereFollowingAUser(uid: string): Promise<Follow[]>;

    /**
    * Remove all the people who were followed by a user
    * @param uid user id 
    */
   removeAllPeopleWhoWereFollowedByAUser(uid: string): Promise<Follow[]>;
}