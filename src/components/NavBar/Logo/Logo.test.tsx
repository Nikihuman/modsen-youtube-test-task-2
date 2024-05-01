import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { THEME } from '../../../constants/theme';
import { Logo } from './Logo';

test('Testing the Link component', () => {
  render(
    <ThemeProvider theme={THEME}>
      <Logo data-testid="logo-element" />
    </ThemeProvider>,
  );
  const link = screen.getByTestId('logo-element');
  expect(link).toBeInTheDocument();
});
