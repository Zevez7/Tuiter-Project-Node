
import Image from "../models/Image";

export default interface ImageDaoInterface {

   //findAllImages(req: Request, res: Response): void;

   findImageById(imageId: string): Promise<any>;

   uploadImage(image: Image): Promise<any>;

   deleteImageById(imageId: string): any;

   updateImage(imageId: string,image: Image): any;

   findImagesPresentInATuit(tid: string): any;
}