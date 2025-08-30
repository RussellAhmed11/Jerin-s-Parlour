
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useServices } from "../../Hooks/useServices";
import Swal from "sweetalert2";
import { axiosPrivate } from "../../Hooks/useAxiosPrivate";

const Services = () => {
    const navigate = useNavigate();
    const location=useLocation();
    const { user } = useAuth()
    const { data: services = [], isLoading, error, refetch } = useServices()
    if (isLoading) return <p>Loading</p>
    if (error) return <p>Somethink went wrong</p>
    const handleAddToCart = async ({ title, price, _id, image_url }) => {
        if (user && user.email) {
            const cartItem = {
                cartItemId: _id,
                email: user?.email,
                title, price, image_url,
            }
            try {
                const res = await axiosPrivate.post('/cart', cartItem)
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Add to cart success",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

            } catch (error) {
                console.log(error.message)
            }
        } else {
            Swal.fire({
                title: "You are not logged in",
                text: "please login to add to the cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes,Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    // send the user to the log in page
                    navigate("/login", { state: { from: location } })
                }
            })
        }
    }
    return (
        <div className="py-16 bg-gray-50">
            {/* Section Heading */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold">
                    Our Awesome <span className="text-pink-500">Services</span>
                </h2>
                <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                    We provide a wide range of beauty and wellness services tailored to your needs.
                </p>
            </div>

            {/* Service Cards */}
            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto px-4">
                {services?.map((service, index) =>
                    <div
                        key={index}
                        className="relative p-8 rounded-2xl transition-all duration-300 bg-white shadow-md hover:scale-105 shadow-xl"
                    >
                        {/* image */}
                        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-pink-100 text-pink-600 text-3xl mx-auto -mt-12 shadow-md">
                            <img src={service?.image_url} alt="" className="w-12 h-12 rounded-full object-cover" />
                        </div>

                        {/* Title */}
                        <div className="flex items-center justify-center">
                            <h3 className="text-xl font-semibold mt-6">{service?.title}</h3>
                        </div>

                        {/* Price */}
                        <div className="flex items-center justify-center">
                            <p className="text-pink-500 font-bold my-3">{service?.price}</p>
                        </div>
                        {/* Description */}
                        <div className="flex items-center justify-center">
                            <p className="text-gray-600 text-sm leading-relaxed">{service?.description}</p>
                        </div>
                        <div className="flex justify-center items-center">
                            <button onClick={() => handleAddToCart(service)} className="btn btn-seceondry p-3 bg-pink-500 text-white font-medium rounded-md hover:bg-pink-600 transition">
                                Add to cart
                            </button>
                        </div>
                    </div>
                )
                }
            </div>
            <div className="flex justify-center">
                <button className="btn bg-pink-500 text-white mt-6 rounded-full px-8 hover:bg-pink-600 transition">
                    Explore More
                </button>
            </div>
        </div>
    );
};

export default Services;