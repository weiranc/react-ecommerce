import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { ProductType } from '../../App';
import CartItem from './CartItem';

type CartProps = {
  cartItems: ProductType[];
  handleAddToCart: (selectedProduct: ProductType) => void;
  handleRemoveFromCart: (selectedProduct: ProductType) => void;
  getTotalPrice: () => void;
};

const Cart: React.FC<CartProps> = ({
  cartItems,
  handleAddToCart,
  handleRemoveFromCart,
  getTotalPrice,
}) => {
  return (
    <div className='cart'>
      <h2>Selected items:</h2>
      {cartItems &&
        cartItems.map((cartItem) => (
          <CartItem
            key={cartItem.id}
            cartItem={cartItem}
            handleAddToCart={handleAddToCart}
            handleRemoveFromCart={handleRemoveFromCart}
          />
        ))}
      <div className='cart_subtotal'>
        Subtotal <b>${getTotalPrice()}</b>
      </div>
      <div className='cart_check_out'>
        <Button variant='contained' sx={{ backgroundColor: 'orange' }}>
          <Link
            to='/payment'
            style={{ textDecoration: 'none', color: 'white' }}
          >
            Proceed to checkout
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Cart;
