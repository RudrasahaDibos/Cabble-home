import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";


const Root = () => {

    return (
        <div className="">
             <div className="">
             <Navbar></Navbar>
             </div>
             <div>
                
              <Outlet></Outlet>
             </div>
        </div>
    );
};

export default Root;