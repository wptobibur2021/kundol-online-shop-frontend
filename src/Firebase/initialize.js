import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";
const userAuthentication = () =>{
    initializeApp(firebaseConfig);
}
export default userAuthentication