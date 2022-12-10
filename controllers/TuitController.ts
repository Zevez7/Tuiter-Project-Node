/**
 * @file Controller RESTful Web service API for tuits resource
 */
import { Request, Response, Express } from "express";
import TuitDao from "../daos/TuitDao";
import TuitControllerI from "../interfaces/TuitController";

export default class TuitController implements TuitControllerI {
  private static tuitDao: TuitDao = TuitDao.getInstance();
  private static tuitController: TuitController | null = null;

  /**
   * Creates singleton controller instance
   * @param {Express} app Express instance to declare the RESTful Web service
   * API
   * @returns TuitController
   */
  public static getInstance = (app: Express): TuitController => {
    if (TuitController.tuitController === null) {
      TuitController.tuitController = new TuitController();
      app.get("/tuits", TuitController.tuitController.findAllTuits);
      app.get(
        "/users/:uid/tuits",
        TuitController.tuitController.findTuitsByUser
      );
      app.get("/tuits/:tid", TuitController.tuitController.findTuitById);
      app.post(
        "/users/:uid/tuits",
        TuitController.tuitController.createTuitByUserId
      );

      app.post("/tuits", TuitController.tuitController.createTuit);
      app.put("/tuits/:tid", TuitController.tuitController.updateTuit);
      app.delete("/tuits/:tid", TuitController.tuitController.deleteTuit);
      app.delete(
        "/tuits/user/:uid",
        TuitController.tuitController.deleteTuitByUserId
      );
    }
    return TuitController.tuitController;
  };

  private constructor() {}

  /**
   * Find all the tuits in the database
   * @param req the request to the server
   * @param res the response to the server
   * @returns all tuits
   */
  findAllTuits = (req: Request, res: Response) =>
    TuitController.tuitDao.findAllTuits().then((tuits) => res.json(tuits));

  /**
   * Find tuit by tuit ID
   * @param req the request to the server
   * @param res the response to the server
   * @returns found tuit
   */
  findTuitById = (req: Request, res: Response) =>
    TuitController.tuitDao
      .findTuitById(req.params.tid)
      .then((tuit) => res.json(tuit));
  /**
   * Create Tuit by user id
   * @param req the request to the server
   * @param res the response to the server
   * @returns created tuit
   */
  createTuitByUserId = (req: Request, res: Response) =>
    TuitController.tuitDao
      .createTuitByUserId(req.params.uid, req.body)
      .then((tuit) => res.json(tuit));

  /**
   * Create Tuit
   * @param req the request to the server
   * @param res the response to the server
   * @returns created tuit
   */
  createTuit = (req: Request, res: Response) =>
    TuitController.tuitDao.createTuit(req.body).then((tuit) => res.json(tuit));

  /**
   * Delete Tuits by tuit id
   * @param req the request to the server
   * @param res the response from the server
   * @returns delete status
   */
  deleteTuit = (req: Request, res: Response) =>
    TuitController.tuitDao
      .deleteTuit(req.params.tid)
      .then((status) => res.json(status));

  /**
   * Delete Tuits by user id
   * @param req the request to the server
   * @param res the response from the server
   * @returns delete status
   */
  deleteTuitByUserId = (req: Request, res: Response) =>
    TuitController.tuitDao
      .deleteTuitByUserId(req.params.uid)
      .then((status) => res.json(status));

  /**
   * Update Tuits
   * @param req the request to the server
   * @param res the response from the server
   * @returns update status
   */
  updateTuit = (req: Request, res: Response) =>
    TuitController.tuitDao
      .updateTuit(req.params.tid, req.body)
      .then((tuit) => res.json(tuit));

  /**
   * Find Tuits by userId
   * @param req the request to the server
   * @param res the response from the server
   * @returns Found tuit
   */
  findTuitsByUser = (req: Request, res: Response) =>
    TuitController.tuitDao
      .findTuitsByUser(req.params.uid)
      .then((tuits) => res.json(tuits));
}

/*

    private static tuitDao: TuitDao = TuitDao.getInstance();
    private static tuitController: TuitController | null = null;


    public static getInstance = (app: Express): TuitController => {
        if(TuitController.tuitController === null) {
            TuitController.tuitController = new TuitController();
            app.get("/api/tuits", TuitController.tuitController.findAllTuits);
            app.get("/api/users/:uid/tuits", TuitController.tuitController.findAllTuitsByUser);
            app.get("/api/tuits/:uid", TuitController.tuitController.findTuitById);
            app.post("/api/users/:uid/tuits", TuitController.tuitController.createTuitByUser);
            app.put("/api/tuits/:uid", TuitController.tuitController.updateTuit);
            app.delete("/api/tuits/:uid", TuitController.tuitController.deleteTuit);
        }
        return TuitController.tuitController;
    }

    private constructor() {}

*/
