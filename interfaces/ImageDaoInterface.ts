
import Image from "../models/Image";

export default interface ImageDaoInterface {

   //findAllImages(req: Request, res: Response): void;

   findImageById(imageId: string): Promise<any>;

   uploadImage(image: any): Promise<any>;

   deleteImageById(imageId: string): any;

   updateImage(imageId: string,image: any): any;

   findImagesPresentInATuit(tid: string): any;
}