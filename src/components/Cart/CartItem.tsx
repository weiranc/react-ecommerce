import React from 'react';
import { ProductType } from '../../App';
import { Button } from '@mui/material';

type CartItemProps = {
  cartItem: ProductType;
};

const CartItem: React.FC<CartItemProps> = ({ cartItem }) => {
  return (
    <div className='cart_item'>
      <h3>{cartItem.title}</h3>
      <img
        src={cartItem.image}
        alt={cartItem.title}
        className='cart_img'
      />
      <div className='cart_item_info'>
        <p>Price: ${cartItem.price}</p>
        <p>Total: ${(cartItem.price * cartItem.amount).toFixed(2)}</p>
      </div>
      <div className='cart_update_amount'>
        <Button
          size='small'
          disableElevation
          variant='contained'
          // onClick{() => }
        >
          -
        </Button>
        <p>{cartItem.amount}</p>
        <Button
          size='small'
          disableElevation
          variant='contained'
          // onClick{() => }
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
