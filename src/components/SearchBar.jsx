import React from 'react';

const SearchBar = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search products..."
      className="search-bar"
    />
  );
};

export default SearchBar;