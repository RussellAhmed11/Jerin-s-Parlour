import React from 'react';

const ContactForm = () => {
    return (
        <div className="py-16 bg-gradient-to-r from-pink-50 via-white to-pink-50">
            <div className="max-w-4xl mx-auto px-6 text-center">
                {/* Heading */}
                <h2 className="text-2xl md:text-3xl font-bold mb-10">
                    Let us handle your <br /> Screen, professionally.
                </h2>

                {/* Form */}
                <form className="space-y-6 bg-white p-4 rounded-md">
                    <div className="grid md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full p-3 rounded-md border border-gray-200 focus:ring-2 focus:ring-pink-400 outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="w-full p-3 rounded-md border border-gray-200 focus:ring-2 focus:ring-pink-400 outline-none"
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full p-3 rounded-md border border-gray-200 focus:ring-2 focus:ring-pink-400 outline-none"
                        />
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className="w-full p-3 rounded-md border border-gray-200 focus:ring-2 focus:ring-pink-400 outline-none"
                        />
                    </div>

                    <textarea
                        rows="5"
                        placeholder="Your Message"
                        className="w-full p-3 rounded-md border border-gray-200 focus:ring-2 focus:ring-pink-400 outline-none"
                    ></textarea>

                    {/* Button */}
                    <button
                        type="submit"
                        className="px-6 py-3 bg-pink-500 text-white rounded-md font-medium hover:bg-pink-600 transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;