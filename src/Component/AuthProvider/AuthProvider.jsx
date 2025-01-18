

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebaseone/Firebase.init";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setuser] = useState(null)

    // createUser
    const Createuser = (email, password) => {
       return  createUserWithEmailAndPassword(auth, email, password)
    }

    //  SignUser
    const SignUser = (email,password)=>{
      return  signInWithEmailAndPassword(auth,email,password)
    }



    // Obsarve 
    useEffect(() => {
        const UnSubscription = onAuthStateChanged(auth, CurrentUser => {
            console.log("Current User  is  ", CurrentUser)
                setuser(CurrentUser)
          
            return () => {
                UnSubscription()
            }
        })
    }, [])


    const authInfo = {
        user, Createuser,SignUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
