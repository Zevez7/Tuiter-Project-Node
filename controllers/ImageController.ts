import {Request, Response, Express} from "express";
import ImageDao from "../daos/ImageDao";
import ImageControllerI from "../interfaces/ImageControllerInterface";

export default class ImageController implements ImageControllerI {

    private static imageDao: ImageDao = ImageDao.getInstance();
    private static imageController: ImageController | null = null;


    public static getInstance = (app: Express): ImageController => {

        if(ImageController.imageController === null) {
            ImageController.imageController = new ImageController();
            app.post("/image", ImageController.imageController.uploadImage);
            app.delete("/image/:imageId", ImageController.imageController.deleteImage);
            app.get("/image/:imageId", ImageController.imageController.findImageById);
            app.get("/user/:tid/images", ImageController.imageController.findImagesPresentInATuit);
            app.put("/image/:imageId", ImageController.imageController.updateImage);
        }
        return ImageController.imageController;
    }

    private constructor() {}


           findImageById = (req: Request, res: Response) => ImageController.imageDao.findImageById(req.params.imageId)
           .then(image => res.json(image));

           uploadImage = (req: Request, res: Response) => ImageController.imageDao.uploadImage(req.body)
           .then(status => res.json(status));

           deleteImage = (req: Request, res: Response) => ImageController.imageDao.deleteImageById(req.params.imageId)
           .then(images => res.json(images));

           updateImage = (req: Request, res: Response)=> ImageController.imageDao.updateImage(req.params.imageId,req.body )
           .then(bookmarks => res.json(bookmarks));

           findImagesPresentInATuit = (req: Request, res: Response)=> ImageController.imageDao.findImagesPresentInATuit(req.params.tid )
                      .then(images => res.json(images));

}

