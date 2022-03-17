import React, { useState } from 'react';
import { ProductType } from '../../App';
import ProductInfo from './ProductInfo';
import {
  Card,
  CardMedia,
  CardContent,
  Button,
  Rating,
  Modal,
  Box,
} from '@mui/material';

type ProductProps = {
  product: ProductType;
  handleAddToCart: (selectedProduct: ProductType) => void;
};

const Product: React.FC<ProductProps> = ({ product, handleAddToCart }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <Card className='product' sx={{ maxWidth: 350 }}>
      <CardMedia>
        <img
          className='product_img'
          src={product.image}
          alt={product.title}
          onClick={handleOpenModal}
        ></img>
      </CardMedia>
      <Modal open={modalOpen} onClose={handleOpenModal}>
        <Box>
          <ProductInfo product={product} handleAddToCart={handleAddToCart} />
        </Box>
      </Modal>
      <CardContent>
        <h3 onClick={handleOpenModal} className='product_title'>{product.title}</h3>
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
