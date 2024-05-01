import { render, renderHook, screen } from '@testing-library/react';
import { NavBar } from './NavBar';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import { ITheme, THEME, THEME_KEY } from '../../constants/theme';
import React from 'react';
import { loadState } from '@store/storage';
import { Provider } from 'react-redux';
import { store } from '@store/store';

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
