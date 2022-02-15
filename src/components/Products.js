import React, { Component } from 'react';
import PropTypes from 'prop-types';



const Products = ({productItems}) => {
  return (
    <div className='products'>
      {productItems.map((productItem) => (
        <div className='card'>
          <div>
            <img src={productItems.image} alt={productItems.title}/>
          </div>
        </div>
      ))}
    </div>
  )
};
 

export default Products;