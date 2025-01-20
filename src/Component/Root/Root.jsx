import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";


const Root = () => {

    return (
        <div className="">
             <div className="">
             <Navbar></Navbar>
             </div>
             <div className="min-h-[calc(100vh-116px)] ">
                
              <Outlet></Outlet>
             </div>

             <div className="">
                <Footer></Footer>
             </div>
        </div>
    );
};

export default Root;