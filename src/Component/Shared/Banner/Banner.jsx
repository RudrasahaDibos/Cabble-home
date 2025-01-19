


const Banner = () => {
    return (

        <section className="bg-white dark:bg-gray-900 text-center">
            <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1
                        className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
                       Affordable roofing  <br /> repair &amp; services
                    </h1>

                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">This
                        free and open-source landing page template was built using the utility classNamees from
                        <a target="_blank" className="hover:underline">Tailwind CSS</a> and based on the
                        components from the <a href="#/" className="hover:underline" target="_blank">Flowbite Library</a> and the
                        <a href="https://flowbite.com/blocks/" target="_blank" className="hover:underline">Blocks System</a>.
                    </p>

                    <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4 ">

                       

                            <a href="#_" className="box-border z-30  inline-flex items-center justify-center w-auto px-8   overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-700 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none">
                                <span className=" bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                                <span className=" top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                                <span className=" z-20 flex items-center justify-center text-sm">
                                    <svg className=" w-5 h-5  flex justify-cente items-center  text-center text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                    Get a Qoute
                                </span>
                            </a>
                       
                            <a href="#_" className="box-border  z-30 inline-flex items-center justify-center w-auto px-8  overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-700 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none">
                                <span className=" bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                                <span className=" top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                                <span className=" z-20 flex items-center text-sm">
                                    <svg className=" w-5 h-5  text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                   More About 
                                </span>
                            </a>

                    </div>
                </div>

                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src="https://demo.themesberg.com/landwind/images/hero.png" alt="hero image" />
                </div>

            </div>
        </section>

    );
};

export default Banner;