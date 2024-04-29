import { render, renderHook, screen } from '@testing-library/react';
import { MoviesGrid } from './MoviesGrid';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import { THEME } from '../../constants/theme';
import React from 'react';
import { MovieContextProvider } from '@context/movie.context';
import { store } from '@store/store';
import { Provider } from 'react-redux';

test('Testing the MoviesGrid component', () => {
  const movieIdStateController = renderHook(() => {
    const state = React.useState<number | undefined>(undefined);
    return state;
  });
  render(
    <ThemeProvider theme={THEME}>
      <Provider store={store}>
        <MovieContextProvider>
          <MoviesGrid
            data-testid="movie-grid-id"
            movieIdStateController={movieIdStateController.result.current}
          />
        </MovieContextProvider>
      </Provider>
    </ThemeProvider>,
  );

  const movieGrid = screen.getByTestId('movie-grid-id');
  expect(movieGrid).toBeInTheDocument();
});
