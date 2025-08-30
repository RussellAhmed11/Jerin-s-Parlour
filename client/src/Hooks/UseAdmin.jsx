import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import { axiosPrivate } from "./useAxiosPrivate";


const UseAdmin = () => {
    const {user,loading}=useAuth();
    const {data:isAdmin='',isPending:isAdminPending}=useQuery({
        queryKey:['isAdmin',user?.email,],
        enabled:!loading && !!user?.email,
        queryFn:async()=>{
           const res=await axiosPrivate.get(`/user/admin/${user?.email}`)
          return res?.data?.admin;
        }
    });
    return [isAdmin,isAdminPending]
};

export default UseAdmin;