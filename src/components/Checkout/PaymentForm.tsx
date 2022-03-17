import React, { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

type paymentProps = {
  getTotalPrice: () => void;
};

const PaymentForm: React.FC<paymentProps> = ({ getTotalPrice }) => {
  const [success, setSuccess] = useState(false);
  const stripe: any = useStripe();
  const elements: any = useElements();
  const [billingInfo, setBillingInfo] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipcode: null,
  });

  const insertInfo = (e: any) => {
    setBillingInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      billing_details: billingInfo,
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
            <TextField
              name='name'
              label='Name'
              type='text'
              placeholder='Name'
              fullWidth
              margin='dense'
              size='small'
              required
              onChange={insertInfo}
            />
            <TextField
              name='email'
              label='Email'
              type='email'
              placeholder='Email'
              fullWidth
              margin='dense'
              size='small'
              required
              onChange={insertInfo}
            />
            <TextField
              name='address'
              label='Address'
              type='text'
              placeholder='Address'
              fullWidth
              margin='dense'
              size='small'
              required
              onChange={insertInfo}
            />
            <TextField
              name='city'
              label='City'
              type='text'
              placeholder='City'
              fullWidth
              margin='dense'
              size='small'
              required
              onChange={insertInfo}
            />
            <TextField
              name='state'
              label='State'
              type='text'
              placeholder='State'
              fullWidth
              margin='dense'
              size='small'
              required
              onChange={insertInfo}
            />
            <TextField
              name='zipcode'
              label='Zipcode'
              type='text'
              placeholder='Zipcode'
              fullWidth
              margin='dense'
              size='small'
              required
              onChange={insertInfo}
            />
            <fieldset className='FormGroup'>
              <div className='FormRow'>
                <CardElement />
              </div>
            </fieldset>
            <button className='payment_button'>Pay</button>
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
