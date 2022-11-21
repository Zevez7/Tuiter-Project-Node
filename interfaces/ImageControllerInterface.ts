import {Request, Response} from "express";

export default interface ImageControllerInterface {

   //findAllImages(req: Request, res: Response): void;

   findImageById(req: Request, res: Response): void;

   uploadImage(req: Request, res: Response): void;

   deleteImage(req: Request, res: Response): void;

   updateImage(req: Request, res: Response): void;

   findImagesPresentInATuit(req: Request, res: Response): void;
}