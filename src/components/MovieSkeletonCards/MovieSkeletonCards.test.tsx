import { render, screen } from '@testing-library/react';
import { MovieSkeletonCards } from './MovieSkeletonCards';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import { THEME } from '../../constants/theme';

describe('Testing the MovieSkeletonCards component', () => {
  test('MovieCard component should be in document', () => {
    render(
      <ThemeProvider theme={THEME}>
        <MovieSkeletonCards />
      </ThemeProvider>,
    );
    const movieSkeletonCards = screen.getAllByTestId('movie-skelet-card-element');
    expect(movieSkeletonCards.length).toEqual(16);
    movieSkeletonCards.forEach(el => expect(el).toBeInTheDocument());
  });
});
