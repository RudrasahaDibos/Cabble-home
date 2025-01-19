

import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, TwitterAuthProvider, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebaseone/Firebase.init";

export const AuthContext = createContext(null)
const Googleprovider = new GoogleAuthProvider();
const Twitterprovider = new TwitterAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setuser] = useState(null)

    // createUser
    const Createuser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //  SignUser
    const SignUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Logout
    const Logout = () => {
        signOut(auth)
    }

    // Google User 
    const googleuser = () => {
        signInWithPopup(auth, Googleprovider)
    }
    //  twiiter user
    const twitteruser = () => {
        signInWithPopup(auth, Twitterprovider)
    }

    // UpdateProfile 
    const UpdateUserProfile =(name,image)=>{
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
          
       

            return () => {
                UnSubscription()
            }
        })
    }, [])


    const authInfo = {
        user, Createuser, SignUser, Logout, googleuser,twitteruser,UpdateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
