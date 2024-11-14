import React from 'react';

const CartItem = ({ item, updateQuantity, removeFromCart }) => {
  return (
    <div style={styles.cartItem}>
      <img src={item.images[0]} alt={item.title} style={styles.cartItemImage} />
      <div>
        <h4>{item.title}</h4>
        <p>${item.price}</p>
        <div style={styles.quantityControl}>
          <button style={styles.quantityButton} onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
          <span>{item.quantity}</span>
          <button style={styles.quantityButton} onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
        </div>
      </div>
      <button style={styles.removeButton} onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  );
};

const styles = {
  cartItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #ddd',
    padding: '10px 0',
  },
  cartItemImage: {
    width: '50px',
    height: '50px',
    objectFit: 'cover',
    borderRadius: '5px',
  },
  quantityControl: {
    display: 'flex',
    alignItems: 'center',
    color: 'black',
  },
  quantityButton: {
    background: '#ddd',
    border: 'none',
    padding: '5px',
    cursor: 'pointer',
  },
  removeButton: {
    background: '#ff6b6b',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
    borderRadius: '5px',
  },
};

export default CartItem;