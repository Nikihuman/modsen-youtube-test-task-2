import '@testing-library/jest-dom';

import { store } from '@store/store';
import { render, renderHook, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { THEME } from '../../constants/theme';
import { ModalWindow } from './ModalWindow';

describe('Testing the ModalWindow component', () => {
  test('ModalWindow component should have display: none', () => {
    const movieIdStateController = renderHook(() => {
      const state = React.useState<number | undefined>(undefined);
      return state;
    });
    render(
      <ThemeProvider theme={THEME}>
        <Provider store={store}>
          <ModalWindow
            data-testid="modal-window-element"
            movieIdStateController={movieIdStateController.result.current}
          />
        </Provider>
      </ThemeProvider>,
    );
    const modalWindow = screen.getByTestId('modal-window-element');
    expect(modalWindow).toHaveStyle({ display: 'none' });
  });

  test('ModalWindow component should have display: flex after setting movieId state', () => {
    const movieIdStateController = renderHook(() => {
      const state = React.useState<number | undefined>(535341);
      return state;
    });
    render(
      <ThemeProvider theme={THEME}>
        <Provider store={store}>
          <ModalWindow
            data-testid="modal-window-element"
            movieIdStateController={movieIdStateController.result.current}
          />
        </Provider>
      </ThemeProvider>,
    );
    const modalWindow = screen.getByTestId('modal-window-element');
    expect(modalWindow).toHaveStyle({ display: 'flex' });
  });
});
