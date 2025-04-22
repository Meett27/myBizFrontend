// src/components/common/FilterPanel.jsx
import React from 'react';
import PropTypes from 'prop-types';

const FilterPanel = ({ filters, onChange }) => {
  return (
    <div className="filter-panel">
      {filters.map(({ label, name, type = 'text', options = [] }) => (
        <div className="filter-item" key={name}>
          <label>{label}</label>
          {type === 'select' ? (
            <select onChange={(e) => onChange(name, e.target.value)}>
              <option value="">All</option>
              {options.map((opt) => (
                <option value={opt.value} key={opt.value}>{opt.label}</option>
              ))}
            </select>
          ) : (
            <input
              type={type}
              onChange={(e) => onChange(name, e.target.value)}
            />
          )}
        </div>
      ))}
    </div>
  );
};

FilterPanel.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    options: PropTypes.array
  })).isRequired,
  onChange: PropTypes.func.isRequired
};

export default FilterPanel;
