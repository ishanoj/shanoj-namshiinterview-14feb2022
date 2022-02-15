import React, { useState } from 'react';
import data from './services/products'
import Header from './components/Header';
import Routes from "./components/Routes/Routes";
import {BrowserRouter as Router} from 'react-router-dom';

const App = () => {
  const { productItems } = data;
  const [cartItems, setCartItems] = useState([]);
  return (
    <div className="container">
      <Router>
        <Header />
        <Routes productItems={productItems} cartItems={cartItems} />
      </Router>
    </div>
    
    
  );
}

export default App;
