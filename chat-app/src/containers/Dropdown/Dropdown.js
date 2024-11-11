import React from 'react';

const Dropdown = ({ options, onChange, value, placeholder = "Select an option" }) => {
  return (
    <select  value={value} onChange={onChange}>
      <option value="" disabled>{placeholder}</option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
