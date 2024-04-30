import { NavBar } from '@components/NavBar/NavBar';
import { Global, StyledButton, StyledMainPage, StyledMessage } from './Styled';
import { Footer } from '@components/Footer/Footer';
import { ThemeProvider } from 'styled-components';
import { ITheme, THEME } from '@constants/theme';
import { useCallback, useContext, useState } from 'react';
import { MoviesGrid } from '@components/MoviesGrid/MoviesGrid';
import { ErrorBoundary } from '@components/ErrorBoundary/ErrorBoundary';
import { MovieContext } from '@context/movie.context';
import { ModalWindow } from '@components/ModalWindow/ModalWindow';
import { INFO_MESSAGES } from '@constants/infoMessages';

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
    <ThemeProvider theme={theme}>
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
