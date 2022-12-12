/**
 * @file Controller RESTful Web service API for retuits resource
 */
import {Request, Response, Express} from "express";
import RetuitDao from "../daos/RetuitDao";
import RetuitControllerI from "../interfaces/RetuitController";

/**
 * @class RetuitController Implements RESTful Web service API for users resource.
 * Defines the following HTTP endpoints:
 * <ul>
 *     <li>POST /users/:uid/retuit/:tid to create tuit</li>
 *     <li>GET /tuits/:tid/retuits get users who like a specific tuit</li>
 * </ul>
 * @property {RetuitDao} RetuitDao Singleton DAO implementing user CRUD operations
 * @property {RetuitController} retuitController Singleton controller implementing
 * RESTful Web service API
 */
export default class RetuitController implements RetuitControllerI {

    private static retuitDao: RetuitDao = RetuitDao.getInstance();
    private static retuitController: RetuitController | null = null;

     /**
     * Creates singleton controller instance
     * @param {Express} app Express instance to declare the RESTful Web service
     * API
     * @returns LikeController
     */
    public static getInstance = (app: Express): RetuitController => {

        if(RetuitController.retuitController === null) {
            RetuitController.retuitController = new RetuitController();
            app.post("/users/:uid/retuits/:tid", RetuitController.retuitController.retuitATuit);
            app.get("/tuits/:tid/retuits", RetuitController.retuitController.findUsersThatRetuitATuid);
        }
        return RetuitController.retuitController;
    }

    private constructor() {}


    retuitATuit = (req: Request, res: Response) => RetuitController.retuitDao.retuitATuit(req.params.tid,req.params.uid)
           .then(retuit => res.json(retuit)); 

           findUsersThatRetuitATuid = (req: Request, res: Response)=> RetuitController.retuitDao.findUsersThatRetuitATuid(req.params.tid)
           .then(retuits => res.json(retuits));

}
