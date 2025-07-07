// src/setupTests.ts
import '@testing-library/jest-dom';

// Extend Jest matchers globally
declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
      toBeDisabled(): R;
      toBeEnabled(): R;
      toHaveBeenCalledTimes(expected: number): R;
    }
  }
}