import { useEffect, useState } from "react";
import { axiosPublic } from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Services = () => {
    const { data: services = [], isLoading, error } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const { data } = await axiosPublic.get('/service')
            return data
        }
    })
    if (isLoading) return <p>Loading</p>
    if (error) return <p>Somethink went wrong</p>
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