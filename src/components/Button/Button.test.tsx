import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

// Jest globals are available via @types/jest; no need for explicit declarations.

describe('Button Component', () => {
  it('renders the button with the correct label', () => {
    render(<Button label="Click Me" onClick={() => {}} />);
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it('calls the onClick function when clicked', () => {
    const handleClick = jest.fn();
    render(<Button label="Click Me" onClick={handleClick} />);
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when the disabled prop is true', () => {
    render(<Button label="Click Me" onClick={() => {}} disabled={true} />);
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeDisabled();
  });

  it('is not disabled when the disabled prop is false', () => {
    render(<Button label="Click Me" onClick={() => {}} disabled={false} />);
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeEnabled();
  });
});