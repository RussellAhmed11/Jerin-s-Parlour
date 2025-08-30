import { useQuery } from "@tanstack/react-query";
import { axiosPrivate } from "../../Hooks/useAxiosPrivate";
import { FaMale, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";


const Alluser = () => {
    const { data: Allusers = [], isloading, error, refetch } = useQuery({
        queryKey: ['allUsers'],
        queryFn: async () => {
            const res = await axiosPrivate.get('/user')
            return res.data
        }
    })
    const HandleMakeAdmin = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You wnat to make user admin!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const { data } = await axiosPrivate.patch(`/user/admin/${id}`)
                    refetch();
                    if (data.modifiedCount > 1) {
                        Swal.fire({
                            title: "Admin!",
                            text: "User is remove from admin role",
                            icon: "success"
                        });
                    }
                } catch (error) {
                    console.log(error.message)
                }

            }
        });
    }
    const handleRemoveAdmin = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You wnat to remove user admin role!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const { data } = await axiosPrivate.patch(`/user/admin-remove/${id}`)
                    refetch();
                    if (data.modifiedCount > 1) {

                        Swal.fire({
                            title: "Admin!",
                            text: "User remove from admin role",
                            icon: "success"
                        })
                    }
                } catch (error) {
                    console.log(error.message)
                }

            }
        });
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
                            <th>Role</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            Allusers.map(user => <tr>
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
                                <td>
                                    {user.role ? <button onClick={() => handleRemoveAdmin(user._id)} className="btn btn-sm bg-orange-500 p-2">Remove Admin</button> : <button onClick={() => HandleMakeAdmin(user._id)} className="btn btn-lg bg-orange-500"><FaUsers className="text-white text-2xl"></FaUsers></button>}
                                </td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Alluser;