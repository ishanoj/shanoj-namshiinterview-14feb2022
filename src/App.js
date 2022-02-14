import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

function App() {
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

export default App;
