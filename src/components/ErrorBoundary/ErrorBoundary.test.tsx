import { render, screen } from '@testing-library/react';
import { ErrorBoundary } from './ErrorBoundary';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import { THEME } from '../../constants/theme';

test('Testing the ErrorBoundary component', () => {
  const ThrowError = () => {
    throw new Error('Test');
  };
  render(
    <ThemeProvider theme={THEME}>
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    </ThemeProvider>,
  );
  const textElement = screen.getByText(/sorry.. there was an error/i);
  expect(textElement).toBeInTheDocument();
});
