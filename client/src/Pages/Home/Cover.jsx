import coverImage from '../../../public/images/coverImage.png'

const Cover = () => {
    return (
         <div className="bg-pink-50 py-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">
        
        {/* Left Content */}
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            BEAUTY SALON <br /> FOR EVERY WOMEN
          </h1>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum 
            duis laoreet maecenas. Feugiat.
          </p>
          <button className="px-6 py-3 bg-pink-500 text-white font-medium rounded-md hover:bg-pink-600 transition">
            Get an Appointment
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:p-10">
          <img
            src={coverImage}
            alt="Beauty Salon"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
    );
};

export default Cover;