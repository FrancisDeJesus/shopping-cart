import React from 'react';

const ProductItem = ({ product, addToCart }) => {
  return (
    <div style={styles.productItem}>
      <img src={product.images[0]} alt={product.title} style={styles.productImage} />
      <div style={styles.productDetails}>
        <h4 style={styles.productTitle}>{product.title}</h4>
        <p style={styles.productPrice}>${product.price}</p>
        <button style={styles.addToCartButton} onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const styles = {
  productItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#f9f9f9',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  productImage: {
    width: '100%',
    maxHeight: '150px',
    objectFit: 'cover',
    borderRadius: '10px',
    marginBottom: '10px',
  },
  productDetails: {
    textAlign: 'center',
  },
  productTitle: {
    fontSize: '1.2em',
    margin: '0',
    color: 'black',
  },
  productPrice: {
    fontSize: '1em',
    margin: '0',
    color: 'black',
  },
  addToCartButton: {
    padding: '10px 20px',
    background: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default ProductItem;