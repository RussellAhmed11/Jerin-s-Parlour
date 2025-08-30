
import { useForm } from "react-hook-form";
import { imageUpload } from "../../Hooks/UseImage";
import { axiosPrivate } from "../../Hooks/useAxiosPrivate";
import { axiosPublic } from "../../Hooks/useAxiosPublic";


const AddServices = () => {
    const { register, formState: { errors }, handleSubmit, reset, } = useForm();
    const handleSubmitform = async (data) => {
        const title = data.title;
        const price=data.price
        const description = data.description;
        const image = data.image[0];
        const image_url = await imageUpload(image);
        const serviceInfo = {
            title, description,price, image_url
        }
        try {
          await axiosPrivate.post('/service',serviceInfo )
        }
        catch (error) { console.log(error.message) }
    }

    return (
        <div className="md:w-full md:p-5 mx-auto">
            <form
                onSubmit={handleSubmit(handleSubmitform)}
                className="bg-white p-6 rounded-2xl shadow-md w-full max-w-lg space-y-4"
            >
                {/* Title */}
                <div>
                    <label className="block text-gray-600 font-medium mb-1">
                        Service Title
                    </label>
                    <input
                        type="text"
                        placeholder="Enter title"
                        {...register("title", { required: "Title is required" })}
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                    />
                    {errors.title && (
                        <p className="text-sm text-red-500 mt-1">{errors.title.message}</p>
                    )}
                </div>
                <div>
                    <label className="block text-gray-600 font-medium mb-1">
                        Price
                    </label>
                    <input
                        type="number"
                        placeholder="Enter Price"
                        {...register("price", { required: "Price is required" })}
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                    />
                    {errors.title && (
                        <p className="text-sm text-red-500 mt-1">{errors.title.message}</p>
                    )}
                </div>

                {/* Description */}
                <div>
                    <label className="block text-gray-600 font-medium mb-1">
                        Description
                    </label>
                    <textarea
                        placeholder="Enter Designation"
                        {...register("description", { required: "Description is required" })}
                        rows="3"
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                    />
                    {errors.description && (
                        <p className="text-sm text-red-500 mt-1">
                            {errors.description.message}
                        </p>
                    )}
                </div>

                {/* Image Upload */}
                <div>
                    <label className="block text-gray-600 font-medium mb-1">Upload Image</label>
                    <input
                        type='file'
                        id='image'
                        name='image'
                        accept='image/*'
                        {...register("image", { required: true })}
                        className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-pink-500 bg-gray-200 text-gray-900'
                    />

                    {errors.image && (
                        <p className="text-sm text-red-500 mt-1">{errors.image.message}</p>
                    )}
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddServices;