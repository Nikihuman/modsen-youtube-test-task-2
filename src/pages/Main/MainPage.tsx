import { ErrorBoundary } from '@components/ErrorBoundary/ErrorBoundary';
import { Footer } from '@components/Footer/Footer';
import { ModalWindow } from '@components/ModalWindow/ModalWindow';
import { MoviesGrid } from '@components/MoviesGrid/MoviesGrid';
import { NavBar } from '@components/NavBar/NavBar';
import { INFO_MESSAGES } from '@constants/infoMessages';
import { ITheme, THEME, THEME_KEY } from '@constants/theme';
import { MovieContext } from '@context/movie.context';
import { loadState } from '@store/storage';
import { useCallback, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { Global, StyledButton, StyledMainPage, StyledMessage } from './Styled';

export function MainPage() {
  const [theme, setTheme] = useState<ITheme>(THEME);
  const movieIdStateController = useState<number | undefined>();
  const { setQueryParams, movies, isFetching } = useContext(MovieContext);

  const showMore = useCallback(() => {
    if (setQueryParams) {
      setQueryParams(state => ({
        pageNum: state.pageNum + 1,
        genre: state.genre,
        movie_name: state.movie_name,
      }));
    }
  }, []);

  return (
    <ThemeProvider theme={loadState<ITheme>(THEME_KEY) ?? theme}>
      <ModalWindow movieIdStateController={movieIdStateController} />
      <Global />
      <StyledMainPage>
        <NavBar setTheme={setTheme} />
        <ErrorBoundary>
          {movies.length === 0 && !isFetching ? (
            <StyledMessage>{INFO_MESSAGES.movieSearch}</StyledMessage>
          ) : null}
          <MoviesGrid movieIdStateController={movieIdStateController}></MoviesGrid>
          <StyledButton onClick={showMore}>Show more</StyledButton>
          <Footer />
        </ErrorBoundary>
      </StyledMainPage>
    </ThemeProvider>
  );
}
