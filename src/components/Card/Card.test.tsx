import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './Card';

describe('Card', () => {
  it('renders and is visible', () => {
    const { getByText } = render(<Card>Card Content</Card>);
    expect(getByText('Card Content')).toBeVisible();
  });

  it('renders children', () => {
    const { getByText } = render(<Card>Card Content</Card>);
    expect(getByText('Card Content')).toBeInTheDocument();
  });
});
