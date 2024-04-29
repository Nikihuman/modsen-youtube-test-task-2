import { useLazyGetMoviesQuery } from '@store/moviesApi';
import { ReactNode, createContext, useEffect, useState } from 'react';
import { IGetMoviesRequest } from 'src/types/requestTypes';
import { IMovieInfo } from 'src/types/responseTypes';

export const MovieContext = createContext<{
  movies: IMovieInfo[];
  originalArgs: IGetMoviesRequest | undefined;
  isFetching: boolean;
  setQueryParams?: React.Dispatch<React.SetStateAction<IGetMoviesRequest>>;
}>({
  movies: [],
  originalArgs: undefined,
  isFetching: false,
});

export function MovieContextProvider({ children }: { children: ReactNode }) {
  const [queryParams, setQueryParams] = useState<{
    pageNum: number;
    genre: string;
    movie_name: string | undefined;
  }>({
    pageNum: 1,
    genre: 'all',
    movie_name: undefined,
  });
  const [moviesInfo, setMoviesInfo] = useState<IMovieInfo[]>([]);
  const [getMoviesQuery, { data, isFetching, originalArgs }] = useLazyGetMoviesQuery({});

  useEffect(() => {
    if (
      queryParams.genre !== originalArgs?.genre ||
      queryParams.movie_name !== originalArgs.movie_name
    ) {
      setMoviesInfo([]);
    }
    getMoviesQuery(queryParams, true);
  }, [queryParams.pageNum, queryParams.genre, queryParams.movie_name]);

  useEffect(() => {
    if (!isFetching && data) {
      setMoviesInfo(state => state.concat(data.docs));
    }
  }, [isFetching, data]);

  return (
    <MovieContext.Provider value={{ movies: moviesInfo, originalArgs, isFetching, setQueryParams }}>
      {children}
    </MovieContext.Provider>
  );
}
