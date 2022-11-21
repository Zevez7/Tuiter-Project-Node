/**
 * @file Controller RESTful Web service API for messages resource
 */
import {Request, Response, Express} from "express";
import MessageDao from "../daos/MessageDao";
import MessageControllerI from "../interfaces/MessageController";

/**
 * @class LikeController Implements RESTful Web service API for users resource.
 * Defines the following HTTP endpoints:
 * <ul>
 *     <li>POST /messages to create message</li>
 *     <li>DELETE /messages/:messageId to delete message by message id</li>
 *     <li>GET /messages/sender/:senderId get messages based on sender id</li>
 *     <li>GET /messages/recevier/:recevierId get messages based on recevicer id</li>
 * </ul>
 * @property {LikeDao} FollowDao Singleton DAO implementing user CRUD operations
 * @property {LikeController} userController Singleton controller implementing
 * RESTful Web service API
 */
export default class MessageController implements MessageControllerI {

    private static messageDao: MessageDao = MessageDao.getInstance();
    private static messageController: MessageController | null = null;

    /**
     * Creates singleton controller instance
     * @param {Express} app Express instance to declare the RESTful Web service
     * API
     * @returns MessageController
     */
    public static getInstance = (app: Express): MessageController => {

        if(MessageController.messageController === null) {
            MessageController.messageController = new MessageController();
            app.post("/messages", MessageController.messageController.createMessage);
            app.delete("/messages/:messageId", MessageController.messageController.deleteAMessage);   
            app.get("/messages/sender/:senderId", MessageController.messageController.getSentMessages); 
            app.get("/messages/recevier/:recevierId", MessageController.messageController.getReceivedMessage);
            app.delete("/messages/sender/:senderId", MessageController.messageController.removeAllSendMessage);
            app.delete("/messages/recevier/:recevierId", MessageController.messageController.removeAllReceivedMessage);
        }
        return MessageController.messageController;
    }

    private constructor() {}


    createMessage = (req: Request, res: Response) => MessageController.messageDao.createMessage(req.body)
           .then(message => res.json(message)); 

           deleteAMessage = (req: Request, res: Response) => MessageController.messageDao.deleteAMessage(req.params.messageId)
           .then(status => res.json(status));

           getSentMessages = (req: Request, res: Response) => MessageController.messageDao.getSentMessages(req.params.senderId)
           .then(messages => res.json(messages));

           getReceivedMessage = (req: Request, res: Response)=> MessageController.messageDao.getReceivedMessage(req.params.recevierId)
           .then(messages => res.json(messages));


           removeAllReceivedMessage = (req: Request, res: Response) => MessageController.messageDao.removeAllReceivedMessage(req.params.recevierId)
           .then(status => res.json(status));

           removeAllSendMessage = (req: Request, res: Response) => MessageController.messageDao.removeAllSendMessage(req.params.senderId)
           .then(status => res.json(status));

}
