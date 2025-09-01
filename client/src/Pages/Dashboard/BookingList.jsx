
import Swal from "sweetalert2";
import { axiosPrivate } from "../../Hooks/useAxiosPrivate";
import UseCart from "../../Hooks/useCart";
import { Link } from "react-router-dom";


const BookingList = () => {
    const [carts, Isloading, refetch] = UseCart()
    if (Isloading) {
        return <progress className="progress w-56"></progress>
    } 
    const handleRemove = (id) => {
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
                    const { data } = await axiosPrivate.delete(`/cart/${id}`)
                    if (data.acknowledged) {
                        refetch()
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                } catch (error) {
                    console.log(error.message)
                }

            }
        })

    }
    return (
        <div>
            <div className="mt-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                No
                            </th>
                            <th>service</th>
                            <th>Name</th>
                            <th>price</th>
                            <th>Apointment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            carts?.map((cart, index) => <tr key={cart._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={cart?.image_url}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {cart?.title}
                                </td>

                                <td>
                                    {cart.price}
                                </td>
                                <td>

                                    <button onClick={() => handleRemove(cart._id)} className="btn btn-ghost">DELETE</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
                <div>
                    <h3 className="text-2xl font-bold ">For service Pay and Take Appointment Date:<Link className="btn btn-ghost" to='/dashboard/appointment'>Get Appointment</Link></h3>
                </div>
            </div>
        </div>
    );
};

export default BookingList;