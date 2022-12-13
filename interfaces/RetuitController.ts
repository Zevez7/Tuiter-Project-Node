import {Request, Response} from "express";
/**
 * @file This acts an interface for retuit api
 */
export default interface RetuitController {
    /**
     * Retuit a tuit
     * @param req request object
     * @param res response object
     */
    retuitATuit(req: Request, res: Response): void;
     /**
     * Get users who retuited a tuit
     * @param req request object
     * @param res response object
     */
    findUsersThatRetuitATuid(req: Request, res: Response): void;
}


