import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Text from './Text';

describe('Text Component', () => {
  it('applies the correct styles', () => {
    render(<Text content="Styled Text" style={{ color: 'red' }} />);
    const textElement = screen.getByText('Styled Text');
    expect(textElement).toHaveStyle('color: rgb(255, 0, 0)'); // 👈 match actual
  });

  it('renders without crashing', () => {
    render(<Text content="Hello" />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
