import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Label from './Label';

describe('Label Component', () => {
  it('renders the label with the correct text', () => {
    render(<Label text="Test Label" htmlFor="test-id" />);
    const labelElement = screen.getByText(/Test Label/i);
    expect(labelElement).toBeInTheDocument();
  });

  it('has the correct htmlFor attribute', () => {
    render(<Label text="Test Label" htmlFor="test-id" />);
    const labelElement = screen.getByText(/Test Label/i);
    expect(labelElement).toHaveAttribute('for', 'test-id');
  });
});
