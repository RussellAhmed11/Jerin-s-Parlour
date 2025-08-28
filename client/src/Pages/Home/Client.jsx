import clientImage from '../../../public/images/client.png'
import { Smile, Star } from "lucide-react"
const Client = () => {
    return (
        <div className="py-20 bg-gradient-to-r from-pink-50 via-white to-pink-50">
      <div className="w-11/12 mx-auto container mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
        
        {/* Left Side - Image with card effect */}
        <div className="relative group">
          <div className="rounded-3xl overflow-hidden shadow-2xl transform transition duration-500 group-hover:scale-105">
            <img
              src={clientImage}
              alt="Facial Treatment"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative blob */}
          <div className="absolute -z-10 -bottom-6 -left-6 w-72 h-72 bg-pink-200 rounded-full opacity-30 blur-3xl"></div>
        </div>

        {/* Right Side - Content */}
        <div className="space-y-6">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold leading-snug">
            Let us handle your <br />
            screen{" "}
            <span className="text-pink-500 drop-shadow">
              Professionally.
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-lg leading-relaxed">
            With well-written codes and a passion for design, we build
            beautiful and scalable apps for all platforms – mobile, web, and
            desktop. Your satisfaction is our priority, and we deliver with
            perfection.
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-8 mt-6">
            <div className="flex items-center space-x-3">
              <div className="p-4 bg-pink-100 text-pink-600 rounded-2xl shadow">
                <Smile size={28} />
              </div>
              <div>
                <p className="text-3xl font-bold text-pink-500">500+</p>
                <p className="text-gray-700 font-medium">Happy Customers</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="p-4 bg-pink-100 text-pink-600 rounded-2xl shadow">
                <Star size={28} />
              </div>
              <div>
                <p className="text-3xl font-bold text-pink-500">16+</p>
                <p className="text-gray-700 font-medium">Total Services</p>
              </div>
            </div>
          </div>

          {/* Call to Action Button */}
          <div className="pt-4">
            <button className="btn bg-pink-500 text-white rounded-full px-8 py-3 shadow-lg hover:bg-pink-600 transition">
              Book an Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
)};

export default Client;