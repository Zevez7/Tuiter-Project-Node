import Tuit from "./Tuit";
/**
 * @file This entity class represents the topic tuit covers
 * @property {string} name represents the name of the topic
 * @property {ObjectId} tuit represents the tuit for which this topic is associated
 */
export default class Topic {
    private name: string = ''; 
    private tuit: Tuit |null= null;
 }