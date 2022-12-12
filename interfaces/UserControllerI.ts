import { Request, Response } from "express";

/**
 * @file This file acts an interface for user api.
 */
export default interface UserControllerI {
  /**
   * Get all users
   * @param req request object
   * @param res response object
   */
  findAllUsers(req: Request, res: Response): void;
  /**
   * Get user by its id
   * @param req request object
   * @param res response object
   */
  findUserById(req: Request, res: Response): void;
  /**
   * Create user
   * @param req request object
   * @param res response object
   */
  createUser(req: Request, res: Response): void;
  /**
   * Delete user
   * @param req request object
   * @param res response object
   */
  deleteUser(req: Request, res: Response): void;
  /**
   * Update user
   * @param req request object
   * @param res response object
   */
  updateUser(req: Request, res: Response): void;

  /**
   * Delete user by username
   * @param req request object
   * @param res response object
   */
  deleteUsersByUsername(req: Request, res: Response): void;
}
