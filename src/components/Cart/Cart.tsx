import React from 'react';
import { Button } from '@mui/material';
import { ProductType } from '../../App';
import CartItem from './CartItem';

type CartProps = {
  cartItems: ProductType[];
  handleAddToCart: (selectedProduct: ProductType) => void;
  handleRemoveFromCart: (selectedProduct: ProductType) => void;
};

const Cart: React.FC<CartProps> = ({
  cartItems,
  handleAddToCart,
  handleRemoveFromCart,
}) => {

  const getTotalPrice = () => {
    const totalPrice = cartItems.reduce((total, item) => item.price * item.amount + total, 0);
    return totalPrice.toFixed(2);
  }

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
      <div className='cart_subtotal'>Subtotal <b>${getTotalPrice()}</b></div>
      <div className='cart_check_out'>
        <Button variant='contained' sx={{ backgroundColor: 'orange' }}>
          Proceed to checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;
