import User from "./User";
import Tuit from "./Tuit";
/**
 * @file Retuit represents the tuit retuited by a user
 * @property {string} retuitedBy represents the person who retuited the tuit
 * @property {string} retuitTuit represents the tuit which got retuited
 * @property {string} postedOn represents date when tuit was liked by that person
 */
export default class Retuit {
    private retuitedBy: User | null = null;
   private retuitTuit: Tuit | null = null;
   private postedOn: Date = new Date(); 
} 