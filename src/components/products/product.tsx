import React from 'react';
import { ProductType } from '../../App';

type ProductProps = {
  product: ProductType;
};

const Product: React.FC<ProductProps> = ({product}) => {
  return (
    <div></div>
  );
}

export default Product;