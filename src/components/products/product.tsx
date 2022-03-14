import React from 'react';
import { ProductType } from '../../App';
import { Card, CardMedia, CardContent } from '@mui/material';

type ProductProps = {
  product: ProductType;
};

const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <Card className='product' sx={{ maxWidth: 350 }}>
      <CardMedia>
        <img
          className='product_img'
          src={product.image}
          alt={product.title}
        ></img>
      </CardMedia>
      <CardContent>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <h3>${product.price}</h3>
      </CardContent>
    </Card>
  );
};

export default Product;
