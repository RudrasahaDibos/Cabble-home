import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";



const Navbar = () => {
     const {user,Logout } = useContext(AuthContext)
     const handleLogout =()=>{
                Logout()
                .then(result =>{
                    console.log(result.user)
                })
                .catch(error =>{
                    console.log(error)
                })
     }

    const link = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
        <li><NavLink to='/ourservice'>OurService</NavLink></li>
        <li><NavLink to='/ourteam'>Ourteam</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
        <li><NavLink to='/register'>Register</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100  fixed w-full top-0 left-0 ">
            <div className="navbar-start max-w-7xl mx-auto">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {link}
                    </ul>
                </div>
            
                <a className="btn btn-ghost text-xl">
                <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
                
                Skyroof</a>
            </div>
            <div className="navbar-center  hidden  lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
            <div className="navbar-end w-full">
                {
                    user? <p className="lg:mr-2 text-sm ">{user.displayName}</p> : ''
                }
                {
                    user ? <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className=" drop btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src={user.photoURL}/>
                            
                    </div>  
                    <div className="">
                    <button tabIndex={0} onClick={handleLogout} className="btn mt-2  border-red-400 dropdown-content">sign Out </button>
                    </div>
                    </div>
                   </div> : <Link className="btn ">Login</Link>
                }

               
                 
            </div>
        </div>
    );
};

export default Navbar;