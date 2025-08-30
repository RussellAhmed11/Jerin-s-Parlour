import { useForm } from "react-hook-form";
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { imageUpload } from "../../Hooks/UseImage";
import { axiosPublic } from "../../Hooks/useAxiosPublic";
import SocislLogin from "../Shared/Sociel/SocislLogin";
const SignUp = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { user, createUser, updateUserProfile, googleLogIn, loading } = useAuth();
    const handleSignUp = async (data) => {
        const name = data.name;
        const email = data.email;
        const password = data.password;
        const image = data.image[0]
        try {
            // image url create 
            const image_url = await imageUpload(image);
            //    user create
            await createUser(email, password)

            // user info update
            await updateUserProfile(name, image_url)
           
            const userInfo = {
                name: name,
                email: email,
                image: image_url
            }
            const result = await axiosPublic.post('/user', userInfo);
            console.log(result)
            reset();
            navigate(from,{replace:true})
        } catch (error) {
            console.log(error.message)
        }
    }


    return (
        <div className='flex justify-center items-center md:min-h-screen'>
            <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                <div className='mb-8 text-center'>
                    <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
                    <p className='text-sm text-gray-400'>Welcome to Jerin's Parlour</p>
                </div>
                <form onSubmit={handleSubmit(handleSignUp)}
                    className='space-y-6'
                >
                    <div className='space-y-4'>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Name
                            </label>
                            <input
                                type='text'

                                id='name'
                                {...register("name", { required: true })}
                                placeholder='Enter Your Name Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-pink-500 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                            {errors.name?.type == 'required' && <span className="text-red-600">Name is required</span>}
                        </div>
                        <div>
                            <label htmlFor='image' className='block mb-2 text-sm'>
                                Select Image:
                            </label>
                            <input
                                type='file'
                                id='image'
                                name='image'
                                accept='image/*'
                                {...register("image", { required: true })}
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-pink-500 bg-gray-200 text-gray-900'
                            />
                            {errors.image?.type == 'required' && <span className="text-red-600">image is required</span>}
                        </div>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Email address
                            </label>
                            <input
                                type='email'
                                id='email'
                                {...register("email", { required: true })}
                                placeholder='Enter Your Email Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-pink-500 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                            {errors.email?.type == 'required' && <span className="text-red-600">Email is required</span>}
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <label htmlFor='password' className='text-sm mb-2'>
                                    Password
                                </label>
                            </div>
                            <input
                                type='password'
                                autoComplete='new-password'
                                id='password'
                                {...register("password", {
                                    required: true, minLength: 6,
                                    pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])/
                                })}
                                placeholder='*******'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-pink-500 bg-gray-200 text-gray-900'
                            />
                            {errors.password?.type == 'required' && <span className="text-red-600">password is required</span>}
                            {errors.password?.type == 'pattern' || errors.password?.type == 'minLength' && <span className="text-red-600">password must be 6 charecter, 1 uppercase,1 lowercase and one number</span>}
                        </div>
                    </div>

                    <div>

                        <input
                            value="SignUp"
                            type='submit'
                            className='bg-pink-500 w-full rounded-md py-3 text-white cursor-pointer'
                        />

                    </div>
                </form>
                <div className='flex items-center pt-4 space-x-1'>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                    <p className='px-3 text-sm dark:text-gray-400'>
                        Signup with social accounts
                    </p>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                </div>
                <SocislLogin></SocislLogin>
                {/* <button onClick={()=>facebookLogIn()} className='disabled:cursor flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
          <FcFacebook size={32} />

          <p>Continue with Facebook</p>
        </button>  */}
                <p className='px-6 text-sm text-center text-gray-400'>
                    Already have an account?{' '}
                    <Link
                        to='/login'
                        className='hover:underline hover:text-pink-500 text-gray-600'
                    >
                        Login
                    </Link>

                </p>
            </div>
        </div>
    );
};

export default SignUp;