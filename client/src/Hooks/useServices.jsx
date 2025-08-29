
import { useQuery } from '@tanstack/react-query';
import { axiosPublic } from './useAxiosPublic';

 export const useServices = () => {
    return useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const { data } = await axiosPublic.get('/service')
            return data
        }
    })
   
};

