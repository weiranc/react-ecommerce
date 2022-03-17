import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';

const PUBLIC_KEY: string = process.env.REACT_APP_PUBLIC_KEY!;
const stripeTestPromise = loadStripe(PUBLIC_KEY);

type checkoutProps = {
  getTotalPrice: () => void;
};

const Checkout: React.FC<checkoutProps> = ({ getTotalPrice }) => {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm getTotalPrice={getTotalPrice} />
    </Elements>
  );
};

export default Checkout;
