import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import { THEME } from '../../constants/theme';

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
