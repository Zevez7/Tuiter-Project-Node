import Tuit from "../models/Tuit";
import Comment from "../models/Comment";
import User from "../models/User";

/**
 * @file This file is an interface for using comments collections
 */
export default interface CommentDao {
   /**
    * Like a comment
    * @param comment
    */
   commentATuit(comment: Comment): Promise<any>;
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
