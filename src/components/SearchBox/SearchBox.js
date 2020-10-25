import React from 'react';
import './SearchBox.style.css';

export default function SearchBox({ placeholder, handleSearch }) {
  return (
    <input
      type="search"
      placeholder={placeholder}
      onChange={handleSearch}
      className="searchBar"
      autoFocus={true}
    />
  );
}
