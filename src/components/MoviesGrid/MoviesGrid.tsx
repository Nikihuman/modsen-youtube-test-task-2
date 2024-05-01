import { useContext } from 'react';
import { MoviesGridProps } from './MoviesGrid.props';
import { StyledMoviesGrid } from './Styles';
import { MovieCard } from '@components/MovieCard/MovieCard';
import { MovieSkeletonCards } from '@components/MovieSkeletonCards/MovieSkeletonCards';
import { MovieContext } from '@context/movie.context';

export function MoviesGrid({ movieIdStateController, ...props }: MoviesGridProps) {
  const { movies, isFetching } = useContext(MovieContext);

  return (
    <StyledMoviesGrid {...props}>
      {movies.length != 0
        ? movies.map((el, i) => (
            <MovieCard setMovieId={movieIdStateController[1]} key={el.id + i} info={el} />
          ))
        : null}
      {isFetching ? <MovieSkeletonCards /> : null}
    </StyledMoviesGrid>
  );
}
