import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Img from './Img';

describe('Img', () => {
  it('renders and is visible', () => {
    const { getByAltText } = render(
      <Img src="test.jpg" alt="Test" />
    );
    expect(getByAltText('Test')).toBeVisible();
  });

  it('renders with correct src', () => {
    const { getByAltText } = render(
      <Img src="test.jpg" alt="Test" />
    );
    expect(getByAltText('Test')).toHaveAttribute('src', 'test.jpg');
  });
});