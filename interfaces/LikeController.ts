import {Request, Response} from "express";
/**
 * @file This acts an interface for like api
 */
export default interface LikeController {
    /**
     * Like a tuit
     * @param req request object
     * @param res response object
     */
    likeATuit(req: Request, res: Response): void;
     /**
     * Dislike a tuit
     * @param req request object
     * @param res response object
     */
    dislikeATuit(req: Request, res: Response): void;
    /**
     * Get tuits liked by a user
     * @param req request object
     * @param res response object
     */
    findTuitsLikedByAUser(req: Request, res: Response): void;
     /**
     * Get users who liked a tuit
     * @param req request object
     * @param res response object
     */
    findUsersThatLikedATuit(req: Request, res: Response): void;
}


