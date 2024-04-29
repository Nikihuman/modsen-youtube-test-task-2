import { render, renderHook, screen } from '@testing-library/react';
import { NavBar } from './NavBar';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import { ITheme, THEME } from '../../constants/theme';
import React from 'react';

describe('Testing the NavBar component', () => {
  test('MovieCard component should be in document', () => {
    const setTheme = renderHook(() => {
      const state = React.useState<ITheme>(THEME);
      return state[1];
    });
    render(
      <ThemeProvider theme={THEME}>
        <NavBar data-testid="navBar-element" setTheme={setTheme.result.current} />
      </ThemeProvider>,
    );
    const navBar = screen.getByTestId('navBar-element');
    expect(navBar).toBeInTheDocument();
  });
});
