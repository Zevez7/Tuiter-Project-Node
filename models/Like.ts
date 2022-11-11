import User from "./User";
import Tuit from "./Tuit";
/**
 * @file Like represents the tuit liked by a user
 * @property {string} likedBy represents the person who liked the tuit
 * @property {string} likedTuit represents the tuit which got liked
 * @property {string} postedOn represents date when tuit was liked by that person
 */
export default class Like {
    private likedBy: User | null = null;
   private likedTuit: Tuit | null = null;
   private postedOn: Date = new Date(); 
} 