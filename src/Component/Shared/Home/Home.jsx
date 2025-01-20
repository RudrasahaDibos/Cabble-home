import Banner from "../Banner/Banner";
import Bannersecond from "../Banner/Bannersecond";
import Industry from "./Industry/Industry";
import Premium from "./Premium/Premium";


const Home = () => {
    return (
        <div>
            <h1>This is home</h1>
            <div className="container mx-auto">  <Banner></Banner></div>
            <div className="lg:mt-0 mt-8 ">
            <Bannersecond></Bannersecond>
            </div>
            <div className="mt-8 mb-8">
                <Premium></Premium>
            </div>
            <div>
                <Industry></Industry>
            </div>
        </div>
    );
};

export default Home;
