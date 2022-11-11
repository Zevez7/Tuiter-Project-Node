/**
 * @file Controller RESTful Web service API for follows resource
 */
import {Request, Response, Express} from "express";
import FollowDao from "../daos/FollowDao";
import FollowControllerI from "../interfaces/FollowController";

/**
 * @class FollowController Implements RESTful Web service API for users resource.
 * Defines the following HTTP endpoints:
 * <ul>
 *     <li>POST /follow/userFollowed/:userFollowed/userFollowing/:userFollowing to create a new bookmark instance by users' id</li>
 *     <li>DELETE /follow/userFollowed/:userFollowed/userFollowing/:userFollowing to delete bookmark based on users' id</li>
 *     <li>GET /follow/followers/:uid to get folloers for user'id</li>
 *     <li>GET /follow/following/:uid to get following for user id</li>
 * </ul>
 * @property {UserDao} FollowDao Singleton DAO implementing user CRUD operations
 * @property {FollowController} userController Singleton controller implementing
 * RESTful Web service API
 */
export default class FollowController implements FollowControllerI {

    private static followDao: FollowDao = FollowDao.getInstance();
    private static followController: FollowController | null = null;

      /**
     * Creates singleton controller instance
     * @param {Express} app Express instance to declare the RESTful Web service
     * API
     * @returns FollowController
     */
    public static getInstance = (app: Express): FollowController => {

        if(FollowController.followController === null) {
            FollowController.followController = new FollowController();
            app.post("/follow", FollowController.followController.createFollow);
            app.delete("/follow/userFollowed/:userFollowed/userFollowing/:userFollowing", FollowController.followController.deleteFollow);   
            app.get("/follow/followers/:uid", FollowController.followController. getFollowersOfAUser); 
            app.get("/follow/following/:uid", FollowController.followController.getFollowingOfAUser);
            app.delete("/follow/following/:uid", FollowController.followController. removeAllPeopleWhoWereFollowingAUser); 
            app.delete("/follow/follower/:uid", FollowController.followController.removeAllPeopleWhoWereFollowedByAUser);
        }
        return FollowController.followController;
    }

    private constructor() {}


          createFollow = (req: Request, res: Response) => FollowController.followDao.createFollow(req.body)
           .then(follwer => res.json(follwer)); 

           deleteFollow = (req: Request, res: Response) => FollowController.followDao.deleteFollow(req.params.userFollowed,req.params.userFollowing )
           .then(status => res.json(status));

           getFollowingOfAUser = (req: Request, res: Response) => FollowController.followDao.getFollowingOfAUser(req.params.uid)
           .then(follwers => res.json(follwers));

           getFollowersOfAUser = (req: Request, res: Response)=> FollowController.followDao.getFollowersOfAUser(req.params.uid)
           .then(follwers => res.json(follwers));

           removeAllPeopleWhoWereFollowingAUser = (req: Request, res: Response) => FollowController.followDao.removeAllPeopleWhoWereFollowingAUser(req.params.uid)
           .then(status => res.json(status));

           removeAllPeopleWhoWereFollowedByAUser = (req: Request, res: Response) => FollowController.followDao.removeAllPeopleWhoWereFollowedByAUser(req.params.uid)
           .then(status => res.json(status));
}
