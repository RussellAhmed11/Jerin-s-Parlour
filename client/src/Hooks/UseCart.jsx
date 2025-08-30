import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import { axiosPrivate } from './useAxiosPrivate';

const UseCart = () => {
     const {user,loading}=useAuth()
    const { data: carts = [], Isloading, refetch } = useQuery({
        queryKey: ['cart', user?.email],
        enabled:!loading ,
        queryFn: async () => {
            const { data } = await axiosPrivate.get(`/cart?email=${user.email}`)
            return data;
        }
        
    })
    return [carts,Isloading,refetch]
   
  
};

export default UseCart;