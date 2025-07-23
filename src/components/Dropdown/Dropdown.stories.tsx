import React, { useState } from 'react';
import Dropdown from './Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
};

const options = [
  { value: '', label: 'Select...' },
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
];

export const Default = () => {
  const [value, setValue] = useState('');
  return (
    <Dropdown
      options={options}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      disabled={false}
    />
  );
};
