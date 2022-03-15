import React from 'react';
import { ProductType } from '../../App';
import { Box, Grid, Rating } from '@mui/material';

type ProductProps = {
  product: ProductType;
  handleAddToCart: (selectedProduct: ProductType) => void;
};

const ProductInfo: React.FC<ProductProps> = ({ product, handleAddToCart }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className='product_info'>
      <Box sx={style}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <img
              className='product_img'
              src={product.image}
              alt={product.title}
            ></img>
          </Grid>
          <Grid item xs={6}>
            <h3>{product.title}</h3>
            <h5>Category: {product.category}</h5>
            <div className='rating'>
              <Rating name='read-only' value={product.rating.rate} readOnly />
              <span>{product.rating.count} ratings</span>
            </div>
            <h3>${product.price}</h3>
            <span>Description: {product.description}</span>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default ProductInfo;
