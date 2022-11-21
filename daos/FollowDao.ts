/**
 * @file Implements DAO managing data storage of follows. Uses mongoose TuitModel
 * to integrate with MongoDB
 */
import Follow from "../models/Follow";
import FollowModel from "../mongoose/FollowModel";
import FollowDaoI from "../interfaces/FollowDao";

/**
 * @class FollowDao Implements Data Access Object managing data storage
 * of follows
 * @property {FollowDao} UserDao Private single instance of FollowDao
 */
export default class FollowDao implements FollowDaoI { 

    private static followDao: FollowDao | null = null;

    /**
     * Gets a single instance of FollowDao
     * @returns return follow object
     */
    public static getInstance = (): FollowDao => {
        if(FollowDao.followDao === null) {
            FollowDao.followDao = new FollowDao();
        }
        return FollowDao.followDao;
    }
    private constructor() {}


  async createFollow(follow: Follow): Promise<Follow> {
    return await FollowModel.create(follow);
}

async deleteFollow(userFollowed: string, userFollowing: string): Promise<any> {
    return await FollowModel.deleteOne({userFollowed:userFollowed, userFollowing: userFollowing});
}

async getFollowingOfAUser(uid: string): Promise<any> { //modify to get array of tuit
    return  await FollowModel
            .find({userFollowing: uid})
            .populate("userFollowed")
            .exec();
}

async getFollowersOfAUser(uid: string): Promise<any> { //modify to get array of tuit
    return  await FollowModel
            .find({userFollowed: uid})
            .populate("userFollowing")
            .exec();
}



async removeAllPeopleWhoWereFollowingAUser(uid: string): Promise<any> {
    return await FollowModel.deleteOne({userFollowed:uid});
}

async removeAllPeopleWhoWereFollowedByAUser(uid: string): Promise<any> {
    return await FollowModel.deleteOne({userFollowing:uid});
}


}