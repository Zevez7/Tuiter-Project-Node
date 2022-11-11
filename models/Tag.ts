import Tuit from "./Tuit";

/**
 * @file This entity class represents the Tag tuit covers
 * @property {string} name represents the name of the Tag
 * @property {ObjectId} tuit represents the tuit for which this Tag is associated
 */
export default class Tag {
    private name: string = '';
    private tuit: Tuit |null= null;
 }