import React from 'react';

const SelectDropdown = ({ label, name, value, onChange, options = [], ...rest }) => (
  <div className="mb-4">
    <label className="block text-gray-700">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full border rounded px-3 py-2"
      {...rest}
    >
      <option value="">Select</option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>{opt.label}</option>
      ))}
    </select>
  </div>
);
export default SelectDropdown;