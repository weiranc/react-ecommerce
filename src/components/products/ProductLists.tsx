import React from 'react';
import { ProductType } from '../../App';
import { Grid } from '@mui/material';
import Product from './Product';

type ProductProps = {
  data: ProductType[];
  handleAddToCart: (selectedProduct: ProductType) => void;
};

const ProductList: React.FC<ProductProps> = ({ data, handleAddToCart }) => {
  return (
    <div>
      <Grid container spacing = {3}>
        {data && data.map((product => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Product
              product={product}
              handleAddToCart={handleAddToCart}
            />
          </Grid>
        )))}
      </Grid>
    </div>
  );
};

export default ProductList;
