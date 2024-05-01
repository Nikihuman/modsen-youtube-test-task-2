import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { THEME } from '../../../constants/theme';
import { Link } from './Link';

test('Testing the Link component', () => {
  render(
    <ThemeProvider theme={THEME}>
      <Link href="ConstURL">Click me</Link>
    </ThemeProvider>,
  );
  const link = screen.getByRole('link');
  const linkGetByText = screen.getByText(/click me/i);
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute('href');
  expect(link).toEqual(linkGetByText);
});
