import React from 'react';
import Carousel from 'react-material-ui-carousel';

const Intro = () => {

  return (
    <Carousel>
      <img className='intro_carousel' src={require('../img/clothes.jpg')} alt='clothes' />
      <img className='intro_carousel' src={require('../img/items.jpg')} alt='items' />
    </Carousel>
  );
};

export default Intro;
