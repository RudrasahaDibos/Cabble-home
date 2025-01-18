

import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../Firebaseone/Firebase.init";

 export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
const {user ,setuser}=useState(null)

// createUser
   const Createuser =(email,password)=>{
    createUserWithEmailAndPassword(auth, email, password)
   }

//  



// Obsarve 


  const authInfo = {
   user,Createuser
  }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
