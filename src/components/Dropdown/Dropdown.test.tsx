import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dropdown from './Dropdown';

const options = [
  { value: '', label: 'Select...' },
  { value: '1', label: 'Option 1' },
];

describe('Dropdown', () => {
  it('renders and is visible', () => {
    const { getByRole } = render(
      <Dropdown options={options} value="" onChange={() => {}} />,
    );
    expect(getByRole('combobox')).toBeVisible();
  });

  it('is disabled when disabled prop is true', () => {
    const { getByRole } = render(
      <Dropdown options={options} value="" onChange={() => {}} disabled />,
    );
    expect(getByRole('combobox')).toBeDisabled();
  });
});
