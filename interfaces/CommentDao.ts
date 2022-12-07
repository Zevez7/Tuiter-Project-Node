import Tuit from "../models/Tuit";
import Like from "../models/Like";
import User from "../models/Like";

/**
 * @file This file is an interface for using comments collections
 */
export default interface CommentDao {
   /**
    * Like a comment
    * @param tid tuit id which is commented
    * @param uid user id which is commented the tuit 
    */
   commentATuit(tid: string, uid: string): Promise<any>;
   /**
    * Tuit that is uncommented
    * @param tid tuit id which is uncommented
    * @param uid user id which is uncommented the tuit
    */
   unCommentATuit(tid: string, uid: string): Promise<any>;
   /**
    * Find tuits that commented a tuit
    * @param uid user who likes the tuit
    */
   findTuitscommentedByAUser(uid: string): Promise<Tuit[]>;
   /**
    * Find users that commented a tuit
    * @param tid tuit that is commented
    */
   findUsersThatcommentedATuid(tid: string): Promise<User[]>;
}
