import '@testing-library/jest-dom';

import { THEME } from '@constants/theme';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { Button } from './Button';

test('Testing the Button component', () => {
  render(
    <ThemeProvider theme={THEME}>
      <Button>Click me</Button>
    </ThemeProvider>,
  );
  const button = screen.getByRole('button');
  const buttonGetByText = screen.getByText(/click me/i);
  expect(button).toBeInTheDocument();
  expect(button).toEqual(buttonGetByText);
});
