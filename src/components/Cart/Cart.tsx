import React from 'react';
import { ProductType } from '../../App';

type CartProps = {
  cartItems: ProductType[];
};

const Cart: React.FC<CartProps> = ({cartItems}) => {
  return (
    <div>
      <h2>Selected items:</h2>
    </div>
  );
}

export default Cart;