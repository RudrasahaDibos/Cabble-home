import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { sendEmailVerification } from "firebase/auth";






const Register = () => {
    const { Createuser,UpdateUserProfile } = useContext(AuthContext)
    const [passwordeye, setpassword] = useState(false)
    const [confirmpassword, setconfirmpassword] = useState(false)
    const handlepasswordClick = () => {
        setpassword(!passwordeye)
    }
    const handleconfirpassword = () => {
        setconfirmpassword(!confirmpassword)
    }


    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        mode: "onTouched"
    })
              // checked password 

             const password = watch("password");
                console.log(password)

    const onSubmit = (data) => {
        const { email, password,name,image } = data

        Createuser(email, password)
            .then(result => {
                UpdateUserProfile(name,image)
                .then(()=>{
                    console.log(result.user)
                    console.log(toast.success('Successfully login'))
                })
                .catch(error =>{
                    console.log(error)
                })
            //   sendemail verification 
                sendEmailVerification(result.user)
                .then(() => {
                    toast.success('Please check you gmail . we Send message Please Response Other wise No Registetion')
                });
              

            })
            .catch(error => {
                console.log(error)
                console.log(toast.error(error))
            })
    }
 

    return (
        <div>
            <section className=" bg-gray-100 mt-10">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 max-w-7xl ">

                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign Up
                            </h1>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                    <input type="text" name="name" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"

                                        {...register("name")}
                                        {...register("name", { required: true })}
                                    />
                                    {errors.name && <span className="text-red-800">This field is required</span>}
                                </div>

                                <div>
                                    <label htmlFor="PhotoURL" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Photo</label>
                                    <input type="text" name="image" id="PhotoURL" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"

                                        {...register("image")}
                                        {...register("image", { required: true })}
                                    />
                                    {errors.image && <span className="text-red-800">This field is required</span>}
                                </div>

                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"

                                        {...register("email")}
                                        {...register("email", { required: true })}
                                    />
                                    {errors.email && <span className="text-red-800">This field is required</span>}
                                </div>
                                <div className="relative">
                                    <label htmlFor="password" className={`block mb-2 text-sm font-medium text-white`}>Password</label>
                                    <input type={passwordeye ? "password" : "text"} name="password" id="password" placeholder="••••••••" className={`bg-gray-50 border ${errors.password && "bg-red-700"} border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                                        {...register("password")}
                                        {...register("password", {
                                            required: "password is Required",
                                            // pattern: {
                                            //     value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                            //     message: "Must include at least one uppercase letter, one lowercase letter, and one number May include special characters (!@#$%^&*)"
                                            // },
                                            minLength: {
                                                value: 8,
                                                message: 'minimum Required length is 8'
                                            },
                                            maxLength: {
                                                value: 20,
                                                message: "maximum length is 20"
                                            }

                                        })}
                                    />
                                    {errors.password && <span className="text-red-600">{errors.password.message}</span>}
                                    <div className="text-2xl  absolute text-black top-9 right-5 ">
                                        {
                                            (passwordeye === false) ? <IoEye onClick={handlepasswordClick} /> : <IoEyeOff onClick={handlepasswordClick} />
                                        }

                                    </div>
                                </div>
                                <div className="relative">
                                    <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                    <input type={confirmpassword ? 'password' : 'text'}
                                
                                    name="confirmpassword" id="confirmpassword" placeholder="••••••••" className={`bg-gray-50 border ${errors.confirmpassword && "bg-red-700"} border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                                        {...register("confirmpassword")}
                                        {...register("confirmpassword", {
                                            required: "confirmpassword is Required",
                                           validate:(value)=>{
                                           
                                           if(value !== password){
                                            return 'This password not match'
                                           }
                                             
                                           }

                                        })}

                                    />
                                    {errors.confirmpassword && <span className="text-red-700">{errors.confirmpassword.message}</span>}
                                    <div className="text-2xl  absolute text-white top-9 right-5 ">
                                        {
                                            (confirmpassword === false) ? <IoEye onClick={handleconfirpassword} /> : <IoEyeOff onClick={handleconfirpassword} />
                                        }

                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="terms" aria-describedby="terms" name="checked" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                            {...register("checked")}
                                            {...register("checked", { required: true })}

                                        />
                                        {errors.checked && <span>This field is required</span>}
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                    </div>
                                </div>
                                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 bg-primary dark:focus:ring-primary-800">Create an account</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account? <Link to='/login' className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;