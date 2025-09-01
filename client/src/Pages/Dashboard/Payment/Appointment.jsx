
import { CardElement, Elements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import UseCart from "../../../Hooks/useCart";
import { useEffect, useState } from "react";
import { axiosPrivate } from "../../../Hooks/useAxiosPrivate";
import useAuth from "../../../Hooks/useAuth";


const Appointment = () => {
    const [clientSecret, setClientSerct] = useState();
    const [error, setEror] = useState('')
    const [transictionId, setTransictionId] = useState();
    const [carts, refetch] = UseCart();
    const { user } = useAuth();
    const totalPrice = carts.reduce((total, item) => total + parseFloat(item.price), 0);
    useEffect(() => {
        if (totalPrice > 0) {
            try {
                axiosPrivate.post('/create-payment-intent', { price: totalPrice })
                    .then(res => {
                        setClientSerct(res.data.clientSecret)
                    })
            } catch (error) {
                console.log(error, message)
            }
        }
    }, [totalPrice, axiosPrivate])
    const handleSubmitPymentForm =async (e) => {
        e.preventDefault();
    }
    return (
        <div className='mt-20 w-8/10 mx-auto'>
            <form onSubmit={handleSubmitPymentForm}>
                <CardElement className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                />
            </form>
        </div>

    );
};

export default Appointment;