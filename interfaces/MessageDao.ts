import Message from "../models/Message";

/**
 * @file This file acts an interface for message collections
 */
export default interface MessageDao {
   /**
    * Creates message
    * @param message message object to be saved
    */
   createMessage(message: Message): Promise<Message>; 
   /**
    * deletes message
    * @param messageId
    */
   deleteAMessage(messageId: string): Promise<any>;
   /**
    * Gets sent messages by a user
    * @param senderId id of the sender
    */
   getSentMessages(senderId: string): Promise<Message[]>;
    /**
     * Gets received messages by a user
     * @param receiveId
     */
   getReceivedMessage(receiveId: string): Promise<Message[]>;

  /**
    * Gets received messages by a user
    * @param receiveId id of the recevicer
    */
   removeAllReceivedMessage(receiveId: string): Promise<Message[]>;

    /**
    * Gets sender messages by a user
    * @param senderId id of the sender
    */
   removeAllSendMessage(senderId: string): Promise<Message[]>;
}
