
import Image from '../models/Image';
import ImageDaoI from '../interfaces/ImageDaoInterface';
import ImageModel from '../mongoose/ImageModel';


export default class ImageDao implements ImageDaoI {

    private static imageDao: ImageDao | null = null;

    public static getInstance = (): ImageDao => {
        if(ImageDao.imageDao === null) {
            ImageDao.imageDao = new ImageDao();
        }
        return ImageDao.imageDao;
    }
    private constructor() {}

     async findImageById(imageId: string): Promise<any> {
           return await ImageModel
           .find({_id:imageId})
           .populate("uploadedBy")
           .exec();
       }


     async uploadImage(image: any): Promise<any> {
            return await ImageModel.bulkSave([...image]);
        }

     async deleteImageById(imageId: string): Promise<any> {
            return await ImageModel.deleteOne({_id: imageId});
        }

     async updateImage(imageId: string,image: Image): Promise<any> {
                 return await  ImageModel.findOneAndUpdate({ _id: imageId },image);
             }
     async findImagesPresentInATuit(tid: string): Promise<any> { //modify to get array of tuit
       //  return await LikeModel.find({likedBy:uid})
              return  await ImageModel
                 .find({presentInWhichTuit: tid})
                 .populate("likedTuit")
                 .exec();
     }


  }