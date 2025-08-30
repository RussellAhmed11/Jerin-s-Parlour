import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import { axiosPrivate } from "../../Hooks/useAxiosPrivate";
import UseCart from "../../Hooks/useCart";



const BookingList = () => {
    const [carts,Isloading,refetch]=UseCart()
    if(Isloading){
         return <progress className="progress w-56"></progress>
    }else{
        refetch()
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
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            carts?.map((cart,index)=>  <tr key={cart._id}>
                            <th>
                               {index +1}
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
                                <button className="btn btn-ghost">DELETE</button>
                            </td>
                        </tr>)
                        }
                      
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BookingList;