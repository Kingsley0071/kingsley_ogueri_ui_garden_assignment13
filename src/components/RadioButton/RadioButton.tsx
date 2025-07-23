import React from 'react';
import { RadioButtonProps } from './RadioButton.types';

const RadioButton: React.FC<RadioButtonProps> = ({
  checked,
  onChange,
  disabled,
  label,
  ...rest
}) => (
  <label>
    <input
      type="radio"
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      {...rest}
    />
    {label}
  </label>
);

export default RadioButton;
