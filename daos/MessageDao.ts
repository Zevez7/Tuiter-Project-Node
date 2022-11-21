/**
 * @file Implements DAO managing data storage of messages. Uses mongoose TuitModel
 * to integrate with MongoDB
 */
import Message from "../models/Message";
import MessageModel from "../mongoose/MessageModel";
import MessageDaoI from "../interfaces/MessageDao";

/**
 * @class MessageDao Implements Data Access Object managing data storage
 * of messages
 * @property {MessageDao} UserDao Private single instance of MessageDao
 */
export default class MessageDao implements MessageDaoI { 

    private static messageDao: MessageDao | null = null;

    /**
     * Gets a single instance of MessageDao
     * @returns return Messages object
     */
    public static getInstance = (): MessageDao => {
        if(MessageDao.messageDao === null) {
            MessageDao.messageDao = new MessageDao();
        }
        return MessageDao.messageDao;
    }
    private constructor() {}


  async createMessage(message: Message): Promise<Message> {
    return await MessageModel.create(message); 
}

async deleteAMessage(messageId: string): Promise<any> {
    return await MessageModel.deleteOne({_id:messageId});
}

async getSentMessages(senderId: string): Promise<any> { //modify to get array of tuit
   // return await MessageModel.find({to:senderId});
   return  await MessageModel
            .find({from:senderId})
            .populate("to")
            .exec();
}

async getReceivedMessage(receiverId: string): Promise<any> { //modify to get array of tuit
    return  await MessageModel
            .find({to:receiverId})
            .populate("from")
            .exec();
}


async removeAllSendMessage(senderId: string): Promise<any> {
    return await MessageModel.deleteOne({from:senderId});
}


async removeAllReceivedMessage(receiverId: string): Promise<any> {
    return await MessageModel.deleteOne({to:receiverId});
}

}