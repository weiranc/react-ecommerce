import React from 'react';
import { ProductType } from '../../App';
import { Button } from '@mui/material';

type CartItemProps = {
  cartItem: ProductType;
};

const CartItem: React.FC<CartItemProps> = ({ cartItem }) => {
  return (
    <div>
      <h3>{cartItem.title}</h3>
      <img src={cartItem.image} alt={cartItem.title} />
      <div className='cart_item_info'>
        <p>Price: ${cartItem.price}</p>
        <p>Total: ${(cartItem.price * cartItem.amount).toFixed(2)}</p>
      </div>
      <div>
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
