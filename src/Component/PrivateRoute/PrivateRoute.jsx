import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";




const PrivateRoute = ({children}) => {
  const {user,loading} =  useContext(AuthContext)

  if(loading){
      return <div className="flex justify-center items-center mt-80">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
      </div>
     
  }
  if(user){
    return children
  }
    return  <Navigate to='/login'> </Navigate>
};

export default PrivateRoute;