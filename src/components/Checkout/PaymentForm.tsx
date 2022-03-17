import React, { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

type paymentProps = {
  getTotalPrice: () => void;
};

const PaymentForm: React.FC<paymentProps> = ({ getTotalPrice }) => {
  const [success, setSuccess] = useState(false);
  const stripe: any = useStripe();
  const elements: any = useElements();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const amount = getTotalPrice();
        const response: any = axios.post(
          `${process.env.REACT_APP_SERVER}/payment`,
          {
            amount,
            id,
          }
        );

        if (response.data.success) {
          console.log('Successful payment');
          setSuccess(true);
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error(error.message);
    }
  };
  return (
    <div className='payment'>
      {!success ? (
        <div>
          <div className='payment_return'>
            <Button variant='contained' sx={{ backgroundColor: 'lightgray' }}>
              <Link to='/' style={{ textDecoration: 'none', color: 'gray' }}>
                Return
              </Link>
            </Button>
          </div>
          <img
            className='payment_img'
            src={require('../img/checkout.jpg')}
            alt='clothes'
          />
          <h2>Checkout</h2>
          <form onSubmit={handleSubmit}>
            <fieldset className='FormGroup'>
              <div className='FormRow'>
                <CardElement />
              </div>
            </fieldset>
            <div className='payment_button'>
              <Button
                variant='contained'
                sx={{ backgroundColor: 'orange', width: '100px' }}
              >
                Pay
              </Button>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <h2>Success</h2>
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
