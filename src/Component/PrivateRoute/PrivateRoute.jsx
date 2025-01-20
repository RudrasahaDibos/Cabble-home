import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";




const PrivateRoute = ({children}) => {
  const {user,loading} =  useContext(AuthContext)
  const location = useLocation()
  console.log(location)
  if(loading){
      return <div className="flex justify-center items-center mt-80">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
      </div>
     
  }
  if(!user){
    return  <Navigate  state={location?.pathname} to='/login'/> 
   
  }
  return <div>
    {children}
  </div>
};

export default PrivateRoute;