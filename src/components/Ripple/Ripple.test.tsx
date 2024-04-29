import { render, screen } from '@testing-library/react';
import { Ripple } from './Ripple';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import { THEME } from '../../constants/theme';

describe('Testing the Ripple component', () => {
  test('MovieCard component should be in document', () => {
    render(
      <ThemeProvider theme={THEME}>
        <Ripple data-testid="ripple-element" />
      </ThemeProvider>,
    );
    const navBar = screen.getByTestId('ripple-element');
    expect(navBar).toBeInTheDocument();
  });
});
