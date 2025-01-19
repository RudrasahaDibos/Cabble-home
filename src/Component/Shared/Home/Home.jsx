import Banner from "../Banner/Banner";
import Bannersecond from "../Banner/Bannersecond";


const Home = () => {
    return (
        <div>
            <h1>This is home</h1>
            <div>  <Banner></Banner></div>
            <div className="lg:mt-0 mt-8 container mx-auto">
            <Bannersecond></Bannersecond>
            </div>
        </div>
    );
};

export default Home;
