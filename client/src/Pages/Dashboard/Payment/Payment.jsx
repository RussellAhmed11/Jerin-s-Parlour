import { Elements } from '@stripe/react-stripe-js';
import Appointment from './Appointment';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GAYTWAY)
const Payment = () => {
    return (
       <Elements stripe={stripePromise}>
        <Appointment/>
       </Elements>
    );
};

export default Payment;