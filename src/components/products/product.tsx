import React from 'react';
import { ProductType } from '../../App';
import { Card, CardMedia, CardContent, Button } from '@mui/material';

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
        <h3>${product.price}</h3>
      </CardContent>
      <Button>Add to cart</Button>
    </Card>
  );
};

export default Product;
