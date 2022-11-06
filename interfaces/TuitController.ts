import {Request, Response} from "express";

/**
 * @file This file acts an interface for tuit api
 */
export default interface TuitController {
   /**
    * Gets all tuit for a user
    * @param req request object
    * @param res response object
    */
   findAllTuits(req: Request, res: Response): void;
   /**
    * Gets tuit by tuit id
    * @param req request object
    * @param res response object
    */
   findTuitById(req: Request, res: Response): void;
    /**
    * Gets tuits of a user by user id
    * @param req request object
    * @param res response object
    */
   findTuitsByUser(req: Request, res: Response): void;

    /**
    * Create tuit
    * @param req request object
    * @param res response object
    */
   createTuit(req: Request, res: Response): void;
    /**
    * Update tuit
    * @param req request object
    * @param res response object
    */
   updateTuit(req: Request, res: Response): void;
    /**
    * Delete tuit
    * @param req request object
    * @param res response object
    */
   deleteTuit(req: Request, res: Response): void;
}
