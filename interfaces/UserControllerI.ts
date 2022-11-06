import {Request, Response} from "express";

/**
 * @file This file acts an interface for user api.
 */
export default interface UserControllerI {
   /**
    * Get all tuits
    * @param req request object
    * @param res response object
    */
   findAllUsers(req: Request, res: Response): void;
    /**
    * Get tuit by its id
    * @param req request object
    * @param res response object
    */
   findUserById(req: Request, res: Response): void;
    /**
    * Create tuit
    * @param req request object
    * @param res response object
    */
   createUser(req: Request, res: Response): void;
    /**
    * Delete tuit
    * @param req request object
    * @param res response object
    */
   deleteUser(req: Request, res: Response): void;
    /**
    * Update tuit
    * @param req request object
    * @param res response object
    */
   updateUser(req: Request, res: Response): void;
}
