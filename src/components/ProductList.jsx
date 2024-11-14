import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div style={styles.productList}>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.searchInput}
      />
      <div style={styles.productsGrid}>
        {products
          .filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
          .map(product => (
            <ProductItem key={product.id} product={product} addToCart={addToCart} />
          ))}
      </div>
    </div>
  );
};

const styles = {
  productList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  searchInput: {
    padding: '10px',
    width: '80%',
    maxWidth: '400px',
    marginBottom: '20px',
    borderRadius: '5px',
    border: '1px solid #ddd',
  },
  productsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px',
    width: '100%',
  },
};

export default ProductList;