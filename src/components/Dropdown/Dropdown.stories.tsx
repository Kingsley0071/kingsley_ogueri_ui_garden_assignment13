import React from 'react';
import Dropdown from './Dropdown';

const story = {
  title: 'Components/Dropdown',
  component: Dropdown,
};
export default story;

const options = [
  { value: '', label: 'Select...' },
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
];

export const Default = () => (
  <Dropdown
    options={options}
    value=""
    onChange={() => {}}
    disabled={false}
  />
);