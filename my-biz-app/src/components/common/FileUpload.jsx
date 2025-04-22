import React from 'react';

const FileUpload = ({ label, name, onChange }) => (
  <div className="mb-4">
    <label className="block text-gray-700">{label}</label>
    <input type="file" name={name} onChange={onChange} className="w-full" />
  </div>
);
export default FileUpload;