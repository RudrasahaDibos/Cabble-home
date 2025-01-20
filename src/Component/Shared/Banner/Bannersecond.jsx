import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Starts from '../Starts/Starts';

const Bannersecond = () => {
     useEffect(()=>{
        AOS.init()
     },[])
    return (
        <div className='lg:flex gap-6'>
        <div data-aos="fade-right" className="flex justify-end items-center mb-4  lg:w-1/3  ">
            <div className="p-6 pb-12  bg-blue-800 text-white  m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-xl rounded-2xl">
                <div className="space-y-2">
                    <a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">Contact our expert today</a>
                   
                </div>
                <div className="flex justify-center items-center">
                <button className="btn bg-blue-800 text-white  "> Get a Qoute</button>
                </div>
            </div>
        </div>
         <Starts></Starts>
        </div>
    );
};

export default Bannersecond;