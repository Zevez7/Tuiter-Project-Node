import {Request, Response} from "express";
/**
 * @file This acts an interface for comment api
 */
export default interface CommentController {
    /*
     * comment a tuit
     * @param req request object
     * @param res response object
     */
    commentATuit(req: Request, res: Response): void;
     /**
     * uncommented a tuit
     * @param req request object
     * @param res response object
     */
    unCommentATuit(req: Request, res: Response): void;
    /**
     * Get tuits commented by a user
     * @param req request object
     * @param res response object
     */
    findTuitscommentedByAUser(req: Request, res: Response): void;
     /**
     * Get users who commented a tuit
     * @param req request object
     * @param res response object
     */
    findUsersThatcommentedATuid(req: Request, res: Response): void;
}


