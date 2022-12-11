/**
 * @file Controller RESTful Web service API for likes resource
 */
import {Request, Response, Express} from "express";
import CommentDao from "../daos/CommentDao";
import CommentControllerI from "../interfaces/CommentController";

/**
 * @class CommentController Implements RESTful Web service API for users resource.
 * Defines the following HTTP endpoints:
 * <ul>
 *     <li>POST /users/:uid/comments/:tid to create tuit</li>
 *     <li>DELETE /users/:uid/comments/:tid to delete tuit</li>
 *     <li>GET /users/:uid/comments get tuits who like a specific user</li>
 *     <li>GET /tuits/:tid/comments get users who like a specific tuit</li>
 * </ul>
 * @property {CommentDao} CommentDao Singleton DAO implementing user CRUD operations
 * @property {CommentController} userController Singleton controller implementing
 * RESTful Web service API
 */
export default class CommentController implements CommentControllerI {

    private static commentDao: CommentDao = CommentDao.getInstance();
    private static commentController: CommentController | null = null;

     /**
     * Creates singleton controller instance
     * @param {Express} app Express instance to declare the RESTful Web service
     * API
     * @returns LikeController
     */
    public static getInstance = (app: Express): CommentController => {

        if(CommentController.commentController === null) {
            CommentController.commentController = new CommentController();
            app.post("/comments", CommentController.commentController.commentATuit);
            app.delete("/users/:uid/comments/:tid", CommentController.commentController.unCommentATuit);   
            app.get("/users/:uid/comments", CommentController.commentController.findTuitscommentedByAUser); 
            app.get("/tuits/:tid/comments", CommentController.commentController.findUsersThatcommentedATuid);
        }
        return CommentController.commentController;
    }

    private constructor() {}


    commentATuit = (req: Request, res: Response) => CommentController.commentDao.commentATuit(req.body)
           .then(comment => res.json(comment)); 

           unCommentATuit = (req: Request, res: Response) => CommentController.commentDao.unCommentATuit(req.params.tid,req.params.uid)
           .then(status => res.json(status));

           findTuitscommentedByAUser = (req: Request, res: Response) => CommentController.commentDao.findTuitscommentedByAUser(req.params.uid)
           .then(comments => res.json(comments));

           findUsersThatcommentedATuid = (req: Request, res: Response)=> CommentController.commentDao.findUsersThatcommentedATuid(req.params.tid)
           .then(comments => res.json(comments));

}
