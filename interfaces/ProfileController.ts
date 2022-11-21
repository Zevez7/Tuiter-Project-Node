/**
 * @file This file is the dao inferface for profile collection
 */
import { Request, Response } from "express";

export default interface ProfileController {
  /**
   * Create profile
   * @param req request object
   * @param res response object
   */
  createProfile(req: Request, res: Response): void;

  /**
   * Find all Profile
   * @param req request object
   * @param res response object
   */
  findAllProfile(req: Request, res: Response): void;

  /**
   * Find all by user id`
   * @param req request object
   * @param res response object
   */
  findProfileByUserId(req: Request, res: Response): void;
}
