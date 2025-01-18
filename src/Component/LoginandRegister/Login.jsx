import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";


const Login = () => {
    const {SignUser} = useContext(AuthContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) => {
         const {email,password}= data
        SignUser(email,password)
        .then(result =>{
            console.log(result.user)
            toast.success("Successfully login")
        })
        .then(error =>{
            console.log(error)
            
        })
        
    }

    return (
        <div>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
           
                <div className="max-w-md w-full bg-gray-900 rounded-xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-white mb-6 text-center">Sign In</h2>

                    <form  onSubmit={handleSubmit(onSubmit)}     className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-white mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="w-full px-4 py-2 border text-white border-gray-300 rounded-lg dark:bg-gray-700  focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                                placeholder="your@email.com"
                                {...register("email")}
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span>This field is required</span>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="w-full px-4 py-2 border text-white border-gray-300 rounded-lg focus:ring-2 dark:bg-gray-700 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                                placeholder="••••••••"
                                {...register("password")}
                                {...register("password", { required: true })}
                            />
                             {errors.password && <span>This field is required</span>}
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="flex items-center">
                                <input type="checkbox" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                <span className="ml-2 text-sm text-gray-600">Remember me</span>
                            </label>
                            <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                        </div>

                        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors">
                            Sign In
                        </button>
                    </form>

                    <div className="mt-6 text-center text-sm text-gray-600">
                        Do not have an account?
                        <Link  to='/register' className="text-indigo-600 hover:text-indigo-500 font-medium">Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Login;