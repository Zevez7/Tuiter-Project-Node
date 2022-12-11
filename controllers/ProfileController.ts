/**
 * @file Controller for Profile RESTful Web service API
 */
import { Request, Response, Express } from "express";
import ProfileDao from "../daos/ProfileDao";
import ProfileControllerI from "../interfaces/ProfileController";

/**
 * Class for Controlling Profile Restful Web API
 */
export default class ProfileController implements ProfileControllerI {
  private static profileDao: ProfileDao = ProfileDao.getInstance();
  private static profileController: ProfileController | null = null;

  /**
   *
   * @param {Express}app Express instance to declare the RESTful web service
   * @returns ProfileController
   */
  public static getInstance = (app: Express): ProfileController => {
    if (ProfileController.profileController === null) {
      ProfileController.profileController = new ProfileController();

      app.post("/profiles", ProfileController.profileController.createProfile);
      app.get("/profiles", ProfileController.profileController.findAllProfile);
      app.get(
        "/profiles/:uid",
        ProfileController.profileController.findProfileByUserId
      );

      app.put(
        "/profiles/:uid",
        ProfileController.profileController.updateProfileByUserId
      );

      app.delete(
        "/profiles/:uid",
        ProfileController.profileController.deleteProfileByUserId
      );
    }
    return ProfileController.profileController;
  };
  private constructor() {}

  /**
   * create a new profile controller
   * @param req Request for the API endpoints
   * @param res Response from the node server
   * @returns newly created profile
   */
  createProfile = (req: Request, res: Response) =>
    ProfileController.profileDao
      .createProfile(req.body)
      .then((profile) => res.json(profile));

  /**
   * find all profile controller
   * @param req Request for the API endpoints
   * @param res Response from the node server
   * @returns all profile
   */
  findAllProfile = (req: Request, res: Response) =>
    ProfileController.profileDao
      .findAllProfile()
      .then((profile) => res.json(profile));

  /**
   * find one profile by user id controller
   * @param req Request for the API endpoints
   * @param res Response from the node server
   * @returns profile found
   */
  findProfileByUserId = (req: Request, res: Response) =>
    ProfileController.profileDao
      .findProfileByUserId(req.params.uid)
      .then((profile) => res.json(profile));

  /**
   * Update profile by user id
   * @param req request object
   * @param res response object
   * @return update status
   */
  updateProfileByUserId = (req: Request, res: Response) =>
    ProfileController.profileDao
      .updateProfileByUserId(req.params.uid, req.body)
      .then((status) => res.json(status));

  /**
   * Delete profile by user id
   * @param req request object
   * @param res response object
   * @return delete status
   */
  deleteProfileByUserId = (req: Request, res: Response) =>
    ProfileController.profileDao
      .deleteProfileByUserId(req.params.uid)
      .then((status) => res.json(status));
}
