import '@testing-library/jest-dom';

import { store } from '@store/store';
import { render, renderHook, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { ITheme, THEME } from '../../../constants/theme';
import { ThemeSelector } from './ThemeSelector';

describe('Testing the ThemeSelector component', () => {
  test('ThemeSelector component should be in document', () => {
    const setThemFunc = renderHook(() => {
      const state = React.useState<ITheme>(THEME);
      return state[1];
    });
    render(
      <ThemeProvider theme={THEME}>
        <Provider store={store}>
          <ThemeSelector
            data-testid="theme-selector-element"
            setThemFunc={setThemFunc.result.current}
          />
        </Provider>
      </ThemeProvider>,
    );
    const themeSelector = screen.getByTestId('theme-selector-element');
    expect(themeSelector).toBeInTheDocument();
  });
});
