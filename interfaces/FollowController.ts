import {Request, Response} from "express";
/**
 * @file This file is an interface for Follow api
 */
export default interface FollowController {
    /**
    * Follow the tuit
    * @param req request object 
    * @param res response object
    */
    createFollow(req: Request, res: Response): void;
    /**
    * unFollow the tuit
    * @param req request object
    * @param res response object
    */
    deleteFollow(req: Request, res: Response): void;
    /**
    * Get following of a user
    * @param req request object
    * @param res response object
    */
    getFollowingOfAUser(req: Request, res: Response): void;
    /**
    * Get followers of a user
    * @param req request object
    * @param res response object
    */
    getFollowersOfAUser(req: Request, res: Response): void;

    /**
    * Remove all the people who were following a user
    * @param req request object
    * @param res response object
    */
   removeAllPeopleWhoWereFollowingAUser(req: Request, res: Response): void;

   /**
    * Remove all the people who were followed by a user
    * @param req request object
    * @param res response object
    */
   removeAllPeopleWhoWereFollowedByAUser(req: Request, res: Response): void;
}
