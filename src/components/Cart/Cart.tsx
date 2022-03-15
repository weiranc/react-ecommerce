import React from 'react';
import { ProductType } from '../../App';
import CartItem from './CartItem';

type CartProps = {
  cartItems: ProductType[];
};

const Cart: React.FC<CartProps> = ({cartItems}) => {
  return (
    <div className='cart'>
      <h2>Selected items:</h2>
      {cartItems && cartItems.map(cartItem => (
        <CartItem cartItem={cartItem} />
      ))}
    </div>
  );
}

export default Cart;