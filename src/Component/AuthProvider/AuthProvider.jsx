

import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, TwitterAuthProvider, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebaseone/Firebase.init";

export const AuthContext = createContext(null)
const Googleprovider = new GoogleAuthProvider();
const Twitterprovider = new TwitterAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setuser] = useState(null)
    const [loading,setloading] = useState(true)

    // createUser
    const Createuser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //  SignUser
    const SignUser = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Logout
    const Logout = () => {
        setloading(true)
        signOut(auth)
    }

    // Google User 
    const googleuser = () => {
        setloading(true)
        signInWithPopup(auth, Googleprovider)
    }
    //  twiiter user
    const twitteruser = () => {
        setloading(true)
        signInWithPopup(auth, Twitterprovider)
    }

    // UpdateProfile 
    const UpdateUserProfile =(name,image)=>{
        setloading(true)
     return   updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:image
        })
    } 

    // Obsavartion 
    useEffect(() => {
        const UnSubscription = onAuthStateChanged(auth, CurrentUser => {
            console.log("Current User is ", CurrentUser)
                setuser(CurrentUser)
                setloading(false)
       

            return () => {
                UnSubscription()
            }
        })
    }, [])


    const authInfo = {
        user, Createuser, SignUser, Logout, googleuser,twitteruser,UpdateUserProfile,loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
