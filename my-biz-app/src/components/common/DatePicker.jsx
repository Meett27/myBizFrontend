import React from 'react';

const DatePicker = ({ label, name, value, onChange }) => (
  <InputField label={label} name={name} value={value} onChange={onChange} type="date" />
);
export default DatePicker;