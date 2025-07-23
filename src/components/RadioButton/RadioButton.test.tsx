import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import RadioButton from './RadioButton';

describe('RadioButton', () => {
  it('renders and is visible', () => {
    const { getByLabelText } = render(
      <RadioButton checked={false} onChange={() => {}} label="Radio" />,
    );
    expect(getByLabelText('Radio')).toBeVisible();
  });

  it('is disabled when disabled prop is true', () => {
    const { getByLabelText } = render(
      <RadioButton
        checked={false}
        onChange={() => {}}
        label="Radio"
        disabled
      />,
    );
    expect(getByLabelText('Radio')).toBeDisabled();
  });
});
