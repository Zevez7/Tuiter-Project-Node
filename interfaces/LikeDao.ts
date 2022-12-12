import Tuit from "../models/Tuit";
import Like from "../models/Like";

/**
 * @file This file is an interface for using likes collections
 */
export default interface LikeDao {
   /**
    * Like a tuit
    * @param tid tuit id which is disliked
    * @param uid user id which is dislikes the tuit
    */
   likeATuit(tid: string, uid: string): Promise<any>;
   /**
    * Tuit that is disliked
    * @param tid tuit id which is disliked
    * @param uid user id which is dislikes the tuit
    */
   dislikeATuit(tid: string, uid: string): Promise<any>;
   /**
    * Find tuits that likes a tuit
    * @param uid user who likes the tuit
    */
   findTuitsLikedByAUser(uid: string): Promise<Tuit[]>;
   /**
    * Find users that liked a tuit
    * @param tid tuit that is liked
    */
   findUsersThatLikedATuid(tid: string): Promise<Like[]>;
}
