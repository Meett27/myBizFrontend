// src/components/common/SearchBar.jsx
import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ placeholder = "Search...", value, onChange }) => {
  return (
    <input
      type="text"
      className="search-bar"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default SearchBar;
