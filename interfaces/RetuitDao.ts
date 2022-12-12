
/**
 * @file This file is an interface for using retuits collections
 */
export default interface RetuitDao {
   /**
    * Retuit a tuit
    * @param tid tuit id which is Retuited
    * @param uid user id which is Retuited the tuit
    */
   RetuitATuit(tid: string, uid: string): Promise<any>;
   /**
    * Find users that Retuited a tuit
    * @param tid tuit that is Retuited
    */
   findUsersThatRetuitATuid(tid: string): Promise<any>;
}
