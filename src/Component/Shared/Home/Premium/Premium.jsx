import banner1 from '../../../../assets/hotel.jpg'

import ProgressBar from "@ramonak/react-progress-bar";
const Premium = () => {

    return (
        <div className="lg:flex gap-8  container mx-auto">
            <div className="lg:w-2/4 border-red-600">
                <div className="p-5 3 mx-auto sm:p-10 md:p-16 b  text-gray-100 dark:text-gray-800">
                    <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                        <img src={banner1} alt="" className="w-full h-60 sm:h-96 bg-gray-500 dark:bg-gray-500" />
                        <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-blue-800 dark:bg-blue-700">
                            <div className="space-y-2">
                                <h1 rel="noopener noreferrer" href="#" className=" lg:text-7xl lg:font-extrabold font-bold sm:text-3xl text-white ">  30+  Years of experience</h1>
                               
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:w-2/4 border-red-900" >
                  <h1 className="text-5xl font-semibold lg:mt-20 lg:text-start text-center">Search no more if you are looking <br />  for a premium roof</h1>
                  <p className='mt-4 lg:text-start text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Harum et ipsam debitis, culpa iste pariatur provident, quasi
                      veritatis sunt neque, quam minima repellendus dolore quisquam 
                      quas odit delectus! Ratione, non!</p>
                <div className="flex justify-between mb-1 mt-2">
                    <span className="text-base font-medium text-blue-700 dark:text-blue-900">Repairing</span>
                   
                </div>
                <div className="">
                    <div className=" "><ProgressBar completed={60} /></div>
                </div>
                <div className="flex justify-between mb-1 mt-2">
                    <span className="text-base font-medium text-blue-700 dark:text-blue-900">Build Up</span>
                    
                </div>
                <div className="">
                    <div className=" "><ProgressBar completed={80} /></div>
                </div>
                <div className="flex justify-between mb-1 mt-2">
                    <span className="text-base font-medium text-blue-700 dark:text-blue-900">Cleaning</span>
                 
                </div>
                <div className="">
                    <div className=" "><ProgressBar completed={70} /></div>
                </div>
            </div>
        </div>
    );
};

export default Premium;