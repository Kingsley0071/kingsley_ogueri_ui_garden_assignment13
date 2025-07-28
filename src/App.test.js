import { render } from '@testing-library/react';
import App from './App';
import React from 'react';
import '@testing-library/jest-dom';

test('renders without crashing', () => {
  render(<App />);
});
