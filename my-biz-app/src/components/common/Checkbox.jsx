import React from 'react';

const Checkbox = ({ label, name, checked, onChange }) => (
  <div className="mb-4 flex items-center">
    <input type="checkbox" name={name} checked={checked} onChange={onChange} />
    <label className="ml-2">{label}</label>
  </div>
);
export default Checkbox;