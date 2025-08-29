import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

export const axiosPrivate=axios.create({
    baseURL:"http://localhost:8000",
    withCredentials:true
})
const useAxiosPrivate = () => {
    const navigate=useNavigate();
    const {logOutUser}=useAuth()
    axiosPrivate.interceptors.response.use(function(res){
        return res;
    },async(error)=>{
        const status=error.response.status;
        if(status===401 || status===404){
       await logOutUser();
       navigate('/')
        }
        return Promise.reject(error)
    },[logOutUser,navigate]
)
    return axiosPrivate;
};

export default useAxiosPrivate;