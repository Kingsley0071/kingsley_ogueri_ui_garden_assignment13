import React from 'react';
import { DropdownProps } from './Dropdown.types';

const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  disabled,
}) => (
  <select value={value} onChange={onChange} disabled={disabled}>
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

export default Dropdown;
