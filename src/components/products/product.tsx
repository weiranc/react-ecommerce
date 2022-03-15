import React from 'react';
import { ProductType } from '../../App';
import { Card, CardMedia, CardContent, Button, Rating } from '@mui/material';

type ProductProps = {
  product: ProductType;
  handleAddToCart: (selectedProduct: ProductType) => void;
};

const Product: React.FC<ProductProps> = ({ product, handleAddToCart }) => {
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
        <div className='rating'>
          <Rating name='read-only' value={product.rating.rate} readOnly />
          <span>{product.rating.count} ratings</span>
        </div>
      </CardContent>
      <Button onClick={() => handleAddToCart(product)}>Add to cart</Button>
    </Card>
  );
};

export default Product;
