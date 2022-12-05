import User from "./User";
import Tag from "./Tag";
import Topic from "./Topic";

/**
 * @file tuit represents tuits posted by user
 * @property {string} tuit represents tuit of the user
 * @property {string} postedOn represents date when tuit was posted on
 * @property {string} tag represents the tags given to the tuit
 * @property {object} stats the status used for tuits
 */

export default class Tuit {
  private tuit: string = "";
  private postedOn: Date = new Date();
  private postedBy: User | null = null;
  private tag: Tag | null = null;
  private topic: Topic | null = null;
  public stats: {
    replies: number;
    retuits: number;
    likes: number;
    dislikes: number;
  } | null = null;
}
