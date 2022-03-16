import React from 'react';
import Carousel from 'react-material-ui-carousel';

const Intro = () => {

  return (
    <Carousel className='intro_carousel'>
      <img className='carousel_img' src={require('../img/clothes.jpg')} alt='clothes' />
      <img className='carousel_img' src={require('../img/items.jpg')} alt='items' />
    </Carousel>
  );
};

export default Intro;
