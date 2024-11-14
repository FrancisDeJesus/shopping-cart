import React from 'react';
import ProductList from '../components/ProductList';
import CartItem from '../components/CartItem';
import { useCart } from '../hooks/useCart';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const { cart, addToCart, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.12;
  const total = subtotal + tax;

  return (
    <div style={styles.mainPage}>
      <h1>Shopping Cart App</h1>
      <div style={styles.container}>
        <ProductList addToCart={addToCart} />
        <div style={styles.cart}>
          <h2>Cart</h2>
          <ul style={styles.cartItems}>
            {cart.map(item => (
              <CartItem key={item.id} item={item} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
            ))}
          </ul>
          <div style={styles.cartSummary}>
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <p>Tax (12%): ${tax.toFixed(2)}</p>
            <p>Total: ${total.toFixed(2)}</p>
            <button style={styles.checkoutButton} onClick={() => navigate('/checkout')}>Check Out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  mainPage: {
    width: '80%',
    maxWidth: '1200px',
    background: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    padding: '20px',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cart: {
    width: '30%',
    background: '#f9f9f9',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  cartItems: {
    listStyle: 'none',
    padding: '0',
  },
  cartSummary: {
    textAlign: 'right',
    marginTop: '20px',
  },
  checkoutButton: {
    padding: '10px 20px',
    background: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
    width: '100%',
  },
};

export default Products;