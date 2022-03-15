import React from 'react';
import { ProductType } from '../../App';
import CartItem from './CartItem';

type CartProps = {
  cartItems: ProductType[];
  handleAddToCart: (selectedProduct: ProductType) => void;
};

const Cart: React.FC<CartProps> = ({ cartItems, handleAddToCart }) => {
  return (
    <div className='cart'>
      <h2>Selected items:</h2>
      {cartItems &&
        cartItems.map((cartItem) => (
          <CartItem cartItem={cartItem} handleAddToCart={handleAddToCart} />
        ))}
    </div>
  );
};

export default Cart;
