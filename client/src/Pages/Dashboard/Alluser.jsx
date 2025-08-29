import { useQuery } from "@tanstack/react-query";
import { axiosPrivate } from "../../Hooks/useAxiosPrivate";
import { FaMale } from "react-icons/fa";


const Alluser = () => {
    const { data: Allusers = [], isloading, error,refetch } = useQuery({
        queryKey: ['allUsers'],
        queryFn: async () => {
            const res = await axiosPrivate.get('/user')
            return res.data
        }
    })
        const HandleMakeAdmin=async(id)=>{
        //   await axiosPrivate.patch(`/user/admin/${id}`)
        }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            Allusers.map(user=> <tr>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={user?.image}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {user?.name}
                            </td>
                            <td>{user?.email}</td>
                            <th>
                                <button onClick={()=>HandleMakeAdmin(user._id)} className="btn btn-ghost"><FaMale className="text-"></FaMale>Make Admin</button>
                            </th>
                        </tr> )
                        }
                        
                     
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Alluser;