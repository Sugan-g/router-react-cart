import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Product from './pages/Product';
import ProductCart from './pages/ProductCart';
import CartProvider from './context/CartContext';
import './App.css'

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/cart" element={<ProductCart />} />
        </Routes>
      </Router>
    </CartProvider >
  )
}

export default App
