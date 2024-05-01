import { render, screen, renderHook } from '@testing-library/react';
import { MovieCard } from './MovieCard';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import { THEME } from '../../../constants/theme';
import React from 'react';
import { IMovieInfo } from 'src/types/responseTypes';

describe('Testing the MovieCard component', () => {
  test('MovieCard component should be in document', () => {
    const setMovieId = renderHook(() => {
      const state = React.useState<number | undefined>(undefined);
      return state[1];
    });
    const info: IMovieInfo = {
      id: 535341,
      name: '1+1',
      year: 2011,
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/1946459/bf93b465-1189-4155-9dd1-cb9fb5cb1bb5/orig',
        previewUrl:
          'https://image.openmoviedb.com/kinopoisk-images/1946459/bf93b465-1189-4155-9dd1-cb9fb5cb1bb5/x1000',
      },
      genres: [
        {
          name: 'драма',
        },
        {
          name: 'комедия',
        },
        {
          name: 'биография',
        },
      ],
      alternativeName: 'Intouchables',
    };
    render(
      <ThemeProvider theme={THEME}>
        <MovieCard
          data-testid="movie-card-element"
          info={info}
          setMovieId={setMovieId.result.current}
        />
      </ThemeProvider>,
    );
    const movieCard = screen.getByTestId('movie-card-element');
    expect(movieCard).toBeInTheDocument();
  });
});
