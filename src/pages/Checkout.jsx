import React from 'react';
import { useCart } from '../hooks/useCart';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Cart state at Checkout:', cart); 
  }, [cart]);

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.12;
  const total = subtotal + tax;

  const handlePayment = () => {
    alert('Payment successful!');
    clearCart();
    navigate('/');
  };

  return (
    <div style={styles.checkoutPage}>
      <h2>Checkout</h2>
      <ul style={styles.checkoutItems}>
        {cart.map(item => (
          <li key={item.id} style={styles.checkoutItem}>
            <img src={item.images[0]} alt={item.title} style={styles.checkoutItemImage} />
            <div>
              <h4>{item.title}</h4>
              <p>${item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          </li>
        ))}
      </ul>
      <div style={styles.checkoutSummary}>
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
        <p>Tax (12%): ${tax.toFixed(2)}</p>
        <p>Total: ${total.toFixed(2)}</p>
        <div style={styles.buttonContainer}>
          <button style={styles.cancelButton} onClick={() => navigate('/')}>Cancel</button>
          <button style={styles.payButton} onClick={handlePayment}>Pay</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  checkoutPage: {
    width: '80%',
    maxWidth: '800px',
    background: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    padding: '20px',
  },
  checkoutItems: {
    listStyle: 'none',
    padding: '0',
  },
  checkoutItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #ddd',
    padding: '10px 0',
  },
  checkoutItemImage: {
    width: '50px',
    height: '50px',
    objectFit: 'cover',
    borderRadius: '5px',
  },
  checkoutSummary: {
    textAlign: 'right',
    marginTop: '20px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  cancelButton: {
    padding: '10px 20px',
    background: '#ccc',
    color: '#333',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  payButton: {
    padding: '10px 20px',
    background: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Checkout;