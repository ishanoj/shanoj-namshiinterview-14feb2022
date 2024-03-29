import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Product from './Products'

export default class CartItem extends Component {
  render() {
    const { price, quantity, title, onRemove } = this.props;

    return (
      <Product
        price={price}
        quantity={quantity}
        title={title}
        button={
          <button onClick={onRemove}>
            {' X '}
          </button>
      }/>
  );
  }
}

CartItem.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
  onRemove: PropTypes.func.isRequired
};