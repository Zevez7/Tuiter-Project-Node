"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TuitDao_1 = __importDefault(require("../daos/TuitDao"));
class TuitController {
    constructor() {
        this.findAllTuits = (req, res) => TuitController.tuitDao.findAllTuits()
            .then(tuits => res.json(tuits));
        this.findTuitById = (req, res) => TuitController.tuitDao.findTuitById(req.params.tid)
            .then(tuit => res.json(tuit));
        this.createTuit = (req, res) => TuitController.tuitDao.createTuit(req.params.uid, req.body)
            .then(tuit => res.json(tuit));
        this.deleteTuit = (req, res) => TuitController.tuitDao.deleteTuit(req.params.tid)
            .then(status => res.json(status));
        this.updateTuit = (req, res) => TuitController.tuitDao.updateTuit(req.params.tid, req.body)
            .then(tuit => res.json(tuit));
        this.findTuitsByUser = (req, res) => TuitController.tuitDao.findTuitsByUser(req.params.uid)
            .then(tuits => res.json(tuits));
    }
}
exports.default = TuitController;
TuitController.tuitDao = TuitDao_1.default.getInstance();
TuitController.tuitController = null;
/**
 * Creates singleton controller instance
 * @param {Express} app Express instance to declare the RESTful Web service
 * API
 * @returns TuitController
 */
TuitController.getInstance = (app) => {
    if (TuitController.tuitController === null) {
        TuitController.tuitController = new TuitController();
        app.get("/tuits", TuitController.tuitController.findAllTuits);
        app.get("/users/:uid/tuits", TuitController.tuitController.findTuitsByUser);
        app.get("/tuits/:tid", TuitController.tuitController.findTuitById);
        app.post("/users/:uid/tuits", TuitController.tuitController.createTuit);
        app.put("/tuits/:tid", TuitController.tuitController.updateTuit);
        app.delete("/tuits/:tid", TuitController.tuitController.deleteTuit);
    }
    return TuitController.tuitController;
};
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
