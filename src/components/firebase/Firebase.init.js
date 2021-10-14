import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initializetionAuthentication=()=>{
    initializeApp(firebaseConfig);
}
export default initializetionAuthentication;