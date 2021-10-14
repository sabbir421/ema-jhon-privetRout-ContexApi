import { useEffect, useState } from "react"
import {getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";
import initializetionAuthentication from "../components/firebase/Firebase.init";
initializetionAuthentication()
const useFirebase=()=>{
    const[user,setUser]=useState({});
    const googleProvider = new GoogleAuthProvider();
    const auth=getAuth();

    const singinUsingGoogle=()=>{
     return   signInWithPopup(auth,googleProvider)
        
    }
    const logOut=()=>{
        signOut(auth).then(() => {
            setUser({})
          })
    }
    useEffect(()=>{
        const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    
    setUser(user)
  
  } 
});
    },[])

    return{
        user,
        singinUsingGoogle,
        logOut,
    }
    
}
export default useFirebase;