import { render, screen } from '@testing-library/react';
import { Logo } from './Logo';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import { THEME } from '../../../constants/theme';

test('Testing the Link component', () => {
  render(
    <ThemeProvider theme={THEME}>
      <Logo data-testid="logo-element" />
    </ThemeProvider>,
  );
  const link = screen.getByTestId('logo-element');
  expect(link).toBeInTheDocument();
});
