import User from './User'
import Tuit from './Tuit'

export default class Image {
    private fileName : string = '';
    private fileExtension : string = '';
    private base64OfImage : string = '';
    private dateOfUpload : Date = new Date();
    private uploadedBy : User | null = null;
    private presentInWhichTuit : Tuit | null =null;

}