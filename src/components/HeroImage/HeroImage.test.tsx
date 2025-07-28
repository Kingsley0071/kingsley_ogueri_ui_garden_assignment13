import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeroImage from './HeroImage';

describe('HeroImage', () => {
  it('renders and is visible', () => {
    const { getByAltText } = render(<HeroImage src="test.jpg" alt="Hero" />);
    expect(getByAltText('Hero')).toBeVisible();
  });

  it('renders children', () => {
    const { getByText } = render(
      <HeroImage src="test.jpg" alt="Hero">
        Hero Content
      </HeroImage>,
    );
    expect(getByText('Hero Content')).toBeInTheDocument();
  });
});
