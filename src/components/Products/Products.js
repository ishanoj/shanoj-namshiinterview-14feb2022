import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./Products.css";


const Products = ({productItems}) => {
  return (
    <div className='products'>
      {productItems.map((productItem) => (
        <div class="card">
          <div className='image-wrapper'>
            <img className='product-image' src={productItem.image} alt={productItem.title}/>
          </div>
          <div className='title-price'>
            <h3 className='products-title'>{productItem.title}</h3>
            <h2 className='products-price'>${productItem.price}</h2>
            <button className='products-add'>Add</button>
          </div>
        </div>
        
      ))}
    </div>
    
  )
};
 

export default Products;