
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

     async findImageById(imageId: string): Promise<Image> {
           return await ImageModel
           .find({_id:imageId})
           .populate("uploadedBy")
           .exec();
       }


     async uploadImage(image: Image): Promise<Image> {
            return await ImageModel.save(image);
        }

     async deleteImageById(imageId: string): Promise<Image> {
            return await ImageModel.deleteOne({_id: imageId});
        }

     async updateImage(imageId: string,image: Image): Promise<Image> {
                 return await  ImageModel.findOneAndUpdate({ _id: imageId },image);
             }
     async findImagesPresentInATuit(tid: string): Promise<any> { //modify to get array of tuit
       //  return await LikeModel.find({likedBy:uid})
              return  await LikeModel
                 .find({presentInWhichTuit: tid})
                 .populate("likedTuit")
                 .exec();
     }


  }








/*

import User from "../models/User";
import UserModel from "../mongoose/UserModel";
import UserDaoI from "../interfaces/UserDao";

export default class UserDao implements UserDaoI {
    private static userDao: UserDao | null = null;

    public static getInstance = (): UserDao => {
        if(UserDao.userDao === null) {
            UserDao.userDao = new UserDao();
        }
        return UserDao.userDao;
    }
    private constructor() {}

   async findAllUsers(): Promise<User[]> {
       return await UserModel.find();
   }
   async findUserById(uid: string): Promise<any> {
       return await UserModel.findById(uid);
   }
   async createUser(user: User): Promise<any> {
       UserModel.create(user);
        return await UserModel.findOne({username:user.username});
   }
   async deleteUser(uid: string):  Promise<any> {
       return await UserModel.deleteOne({_id: uid});
   }
   async updateUser(uid: string, user: User): Promise<any> {
    return await  UserModel.findOneAndUpdate({ _id: uid },user);
   }
}







*/