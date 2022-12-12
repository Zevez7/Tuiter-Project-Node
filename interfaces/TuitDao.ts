import Tuit from "../models/Tuit";

/**
 * @file This file acts an interface for tuits collections
 */
export default interface TuitDao {
  /**
   * Gets All tuit.
   */
  findAllTuits(): Promise<Tuit[]>;
  /**
   * Get all tuits for a user
   * @param uid uid for which we have to get all tuits
   */
  findTuitsByUser(uid: string): Promise<Tuit[]>;
  /**
   * Get tuit by its id
   * @param tid represents the tuit id
   */
  findTuitById(tid: string): Promise<Tuit>;
  /**
   * Create a tuit
   * @param tuit represents the tuit to be created
   */
  createTuit(tuit: Tuit): Promise<any>;

  /**
   * Create a tuit by userId
   * @param uid represents user for which tuit is created
   * @param tuit represents the tuit to be created
   */
  createTuitByUserId(uid: string, tuit: Tuit): Promise<any>;
  /**
   * Tuit to be updated
   * @param tid tid for which tuit is to be update
   * @param tuit updated tuit
   */
  updateTuit(tid: string, tuit: Tuit): Promise<any>;
  /**
   * Delete tuit
   * @param tid tuit id for which tuit is to be deleted
   */
  deleteTuit(tid: string): Promise<any>;

  /**
   * Delete tuit by user id
   * @param uid user id for which tuit is to be deleted
   */
  deleteTuitByUserId(uid: string): Promise<any>;
}
