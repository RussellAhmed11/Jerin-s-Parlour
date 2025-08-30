import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import { FcGoogle } from 'react-icons/fc';
import { axiosPublic } from '../../../Hooks/useAxiosPublic';
import { useLocation, useNavigate } from 'react-router-dom';

const SocislLogin = () => {
    const {googleLogIn}=useAuth();
    const navigate=useNavigate()
    const location=useLocation();
    const from=location.state?.from?.pathname || "/";
     const handleGoogleLogin=async()=>{
       const {user}= await googleLogIn();
       const userInfo={
        name:user.displayName,
        email:user.email,
        image:user.photoURL
       }
       await axiosPublic.post('/user',userInfo)
       navigate(from,{replace:true})
    }
    return (
             <button onClick={handleGoogleLogin} className='disabled:cursor flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
                    <FcGoogle size={32} />

                    <p>Continue with Google</p>
                </button>
    );
};

export default SocislLogin;