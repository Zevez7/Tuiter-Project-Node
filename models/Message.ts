import User from "./User";

/**
 * @file Message represents message posted by user
 * @property {string} message represents the message between the user
 * @property {string} to represents the person who recived the message
 * @property {string} from represents the person who sent the message
 * @property {string} sentOn represents date when user got the message
 */
export default class Message {
    private message: String = '';
    private to: Date = new Date();
    private from: User | null = null;
    private sendOn: User | null = null;
 } 