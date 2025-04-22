import React from 'react';

const TextArea = ({ label, name, value, onChange, ...rest }) => (
  <div className="mb-4">
    <label className="block text-gray-700">{label}</label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      className="w-full border rounded px-3 py-2"
      {...rest}
    />
  </div>
);
export default TextArea;