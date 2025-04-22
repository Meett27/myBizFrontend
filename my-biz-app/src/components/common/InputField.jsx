import React from 'react';

const InputField = ({ label, name, value, onChange, type = 'text', ...rest }) => (
  <div className="mb-4">
    <label className="block text-gray-700">{label}</label>
    <input
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      className="w-full border rounded px-3 py-2"
      {...rest}
    />
  </div>
);
export default InputField;