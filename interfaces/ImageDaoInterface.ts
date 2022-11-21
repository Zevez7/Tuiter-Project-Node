
import Image from "../../models/Image";

export default interface ImageDaoInterface {

   //findAllImages(req: Request, res: Response): void;

   findImageById(imageId: string): Promise<Image>;

   uploadImage(image: Image): Promise<Image>;

   deleteImageById(imageId: string): any;

   updateImage(imageId: string): any;

   findImagesPresentInATuit(tid: string): any;
}