import React, { Component } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';

export default class App extends Component {
  render() {
    return (
      <div class="pet-shop-header">
        <h2>Pet Shop</h2>
        <hr/>
        <ProductList />
        <hr/>
        <Cart />
      </div>
    );
  }
}