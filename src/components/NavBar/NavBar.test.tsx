import '@testing-library/jest-dom';

import { loadState } from '@store/storage';
import { store } from '@store/store';
import { render, renderHook, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { ITheme, THEME, THEME_KEY } from '../../constants/theme';
import { NavBar } from './NavBar';

describe('Testing the NavBar component', () => {
  test('MovieCard component should be in document', () => {
    const setTheme = renderHook(() => {
      const state = React.useState<ITheme>(THEME);
      return state[1];
    });
    render(
      <Provider store={store}>
        <ThemeProvider theme={loadState<ITheme>(THEME_KEY) ?? THEME}>
          <NavBar data-testid="navBar-element" setTheme={setTheme.result.current} />
        </ThemeProvider>
      </Provider>,
    );
    const navBar = screen.getByTestId('navBar-element');
    expect(navBar).toBeInTheDocument();
  });
});
