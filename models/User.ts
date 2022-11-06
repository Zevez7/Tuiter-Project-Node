import AccountType from "./AccountType";
import MaritalStatus from "./MaritalStatus";
import Location from "./Location";
/**
 * @file UserSchema represents users collections
 * @property {string} username represents username of a user
 * @property {string} password represents password of a user
 * @property {string} firstname represents first name of a user
 * @property {string} lastName represents last name of a user
 * @property {string} email represents email of a user
 * @property {string} profilePhoto email represents profile photo of a user
 * @property {string} headerImage represents header image of a user
 * @property {string} accountType represents enum of account type of a user
 * @property {string} maritalStatus represents enum of marital status of a user
 * @property {string} biography represents biography of a user
 * @property {Date} dateOfBirth represents birthday of the user
 * @property {Date} joined represents when user joined the application
 * @property {ObjectId} location  represents location of the user
 */
export default class User {
           username: string = '';
   private password: string = ''; 
   private firstName: string | null = null;
   private lastName: string | null = null;
   private email: string = ''; 
   private profilePhoto: string | null = null;
   private headerImage: string | null = null;
   private accountType: AccountType = AccountType.Personal;
   private maritalStatus: MaritalStatus = MaritalStatus.Single;
   private biography: string | null = null;
   private dateOfBirth: Date | null = null;
   private joined: Date = new Date();
   private location: Location | null = null;
   private followers: User[] =[];
   private following: User[] =[];
   private chatRoomUsers: User[] = [];
}
