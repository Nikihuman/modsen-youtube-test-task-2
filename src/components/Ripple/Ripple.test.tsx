import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { THEME } from '../../constants/theme';
import { Ripple } from './Ripple';

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
