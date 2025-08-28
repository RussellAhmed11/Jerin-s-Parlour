
import 'swiper/css';
import 'swiper/css/navigation';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { useQuery } from '@tanstack/react-query';
import { axiosPublic } from '../../Hooks/useAxiosPublic';
const Testimonials = () => {
    const {data:reviews=[],isLoading,error}=useQuery({
        queryKey:['reviews'],
        queryFn:async()=>{
            const {data}=await axiosPublic.get('/review')
            return data
        }
    })
    if(isLoading) return <p>loading.....</p>
    if(error) return <p>Something went wrong</p>
    return (
        <div className="py-16">
            <div className="max-w-6xl mx-auto px-6 text-center">
                {/* Heading */}
                <h2 className="text-3xl font-bold mb-12">Testimonials</h2>

                {/* DaisyUI Carousel */}
                <div className="carousel w-full">
                    {reviews.map((t, index) => (
                        <div
                            key={index}
                            id={`slide${index + 1}`}
                            className="carousel-item relative w-full flex justify-center"
                        >
                            {/* Cards Grid */}
                            <div className="grid md:grid-cols-3 gap-8 p-5">
                                {reviews.map((person, idx) => (
                                    <div
                                        key={idx}
                                        className="relative p-8 rounded-2xl transition-all duration-300 bg-white shadow-md hover:scale-105 shadow-xl"
                                    >
                                        {/* Profile */}
                                        <div className="flex items-center gap-4 mb-4">
                                            <img
                                                src={person.image}
                                                alt={person.name}
                                                className="w-12 h-12 rounded-full object-cover"
                                            />
                                            <div>
                                                <h3 className="font-semibold">{person.name}</h3>
                                                <p className="text-gray-500 text-sm">{person.role}</p>
                                            </div>
                                        </div>

                                        {/* Feedback */}
                                        <p className="text-gray-600 text-sm mb-4">{person.feedback}</p>

                                        {/* Rating */}
                                        <Rating
                                            style={{ maxWidth: 180 }}
                                            value={person.rating}
                                            readOnly
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Navigation buttons */}
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a
                                    href={`#slide${index === 0 ? reviews.length : index
                                        }`}
                                    className="btn btn-circle"
                                >
                                    ❮
                                </a>
                                <a
                                    href={`#slide${index === reviews.length - 1 ? 1 : index + 2
                                        }`}
                                    className="btn btn-circle"
                                >
                                    ❯
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Testimonials;