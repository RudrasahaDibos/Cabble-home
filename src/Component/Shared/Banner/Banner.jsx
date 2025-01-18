
import banner1 from "../../../assets/balcony-resorts-nesebar-town-bulgaria.jpg"
import banner2 from "../../../assets/hotel.jpg"
import banner3 from "../../../assets/modern-residential-building.jpg"
import { FaArrowRight,FaArrowLeft } from "react-icons/fa";

const Banner = () => {
    return (
        
            <div className="carousel w-full mt-20">
                <div id="slide1" className="carousel-item relative w-full ">
                    <img
                        src={banner1}
                        className="w-full h-2/4" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="hover:btn  hover:btn-circle z-10 transform-10 duration-300  ease-in-out"><FaArrowLeft/></a>
                        <a href="#slide2" className="hover:btn  hover:btn-circle z-10 transform-10 duration-300  ease-in-out  "><FaArrowRight /></a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src={banner2}
                        className="w-full h-2/4" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="hover:btn  hover:btn-circle z-10 transform-10 duration-300  ease-in-out"><FaArrowLeft/></a>
                        <a href="#slide3" className="hover:btn  hover:btn-circle z-10 transform-10 duration-300  ease-in-out"><FaArrowRight /></a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src={banner3}
                        className="w-full h-2/4" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="hover:btn  hover:btn-circle z-10 transform-10 duration-300  ease-in-out"><FaArrowLeft/></a>
                        <a href="#slide4" className="hover:btn  hover:btn-circle z-10 transform-10 duration-300  ease-in-out"><FaArrowRight /></a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src={banner3}
                        className="w-full h-2/4" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="hover:btn  hover:btn-circle z-10 transform-10 duration-300  ease-in-out"><FaArrowLeft/></a>
                        <a href="#slide1" className="hover:btn  hover:btn-circle z-10 transform-10 duration-300  ease-in-out"><FaArrowRight /></a>
                    </div>
                </div>
            </div>
      
    );
};

export default Banner;