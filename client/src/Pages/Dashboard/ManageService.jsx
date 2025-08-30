import { useQuery } from "@tanstack/react-query";
import { useServices } from "../../Hooks/useServices";
import { axiosPrivate } from "../../Hooks/useAxiosPrivate";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageService = () => {
    const { data: services = [], isLoading, error, refetch } = useServices();
    if (isLoading) return <p>Loading</p>
    if (error) return <p>Somethink went wrong</p>
    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await axiosPrivate.delete(`/service/${id}`)
                    console.log(res)
                    if (res.data.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                    refetch()
                } catch (error) {
                    console.log(error.message)
                }

            }
        });

    }
   
    return (
        <div>
            <div className="md:w-full md:p-5">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>list</th>
                            <th>Service title</th>
                            <th>price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            services.map((service, index) => <tr key={service._id}>
                                <th>{index + 1}</th>
                                <td>{service.title}</td>
                                <td>{service.price}</td>
                                <td>
                                   <button link className="btn btn-secondary"><Link to={`/dashboard/updateservice/${service._id}`}>Update</Link></button> 
                                </td>
                                <td><button onClick={() => handleDelete(service._id)} className="btn btn-outline btn-error">Delete</button></td>
                            </tr>)
                        }
                        {/* row 1 */}


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageService;