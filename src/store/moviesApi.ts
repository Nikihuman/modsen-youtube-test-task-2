import {
  BASE_URL,
  SEARCH_BY_GENRE_PATH,
  SEARCH_BY_ID_PATH,
  SEARCH_BY_NAME_PATH,
  X_API_KEY,
} from '@constants/apiConstant';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IGetMovieByIdRequest, IGetMoviesRequest } from 'src/types/requestTypes';
import { IGetMovieByIdResponse, IGetMoviesResponse } from 'src/types/responseTypes';

const prepareHeadersConf = (headers: Headers) => {
  headers.set('accept', 'application/json');
  headers.set('X-API-KEY', X_API_KEY);
  return headers;
};
export const movieApi = createApi({
  reducerPath: 'filmsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: prepareHeadersConf,
  }),
  keepUnusedDataFor: 60,
  endpoints: build => ({
    getMovies: build.query<IGetMoviesResponse, IGetMoviesRequest>({
      query: ({ pageNum, genre, movie_name }: IGetMoviesRequest) => {
        if (movie_name) {
          return SEARCH_BY_NAME_PATH(pageNum, movie_name, 16);
        }
        return SEARCH_BY_GENRE_PATH(pageNum, genre, 16);
      },
      keepUnusedDataFor: 30,
    }),
    getMovieById: build.query<IGetMovieByIdResponse, IGetMovieByIdRequest>({
      query: (movieId: IGetMovieByIdRequest) => SEARCH_BY_ID_PATH(movieId),
    }),
    getMovieNames: build.query<IGetMoviesResponse, { movie_name: string }>({
      query: ({ movie_name }) => SEARCH_BY_NAME_PATH(1, movie_name, 10),
    }),
  }),
});

export const { useLazyGetMovieByIdQuery, useLazyGetMoviesQuery, useLazyGetMovieNamesQuery } =
  movieApi;
