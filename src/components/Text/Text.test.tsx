import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Text from './Text';

describe('Text Component', () => {
  it('renders the content correctly', () => {
    render(<Text content="Hello, World!" />);
    expect(screen.getByText('Hello, World!')).toBeInTheDocument();
  });

  it('applies the correct styles', () => {
    render(<Text content="Styled Text" style={{ color: 'red' }} />);
    const textElement = screen.getByText('Styled Text');
    expect(textElement).toHaveStyle('color:rgb(255, 0, 0);');
  });

  it('renders without crashing', () => {
    render(<Text content="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
