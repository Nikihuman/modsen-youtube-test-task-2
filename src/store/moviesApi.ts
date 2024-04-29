import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IGetMovieByIdRequest, IGetMoviesRequest } from 'src/types/requestTypes';
import { IGetMovieByIdResponse, IGetMoviesResponse } from 'src/types/responseTypes';

const prepareHeadersConf = (headers: Headers) => {
  headers.set('accept', 'application/json');
  headers.set('X-API-KEY', 'BHHGG58-1VHMFRG-GNC0P54-16A61X6');
  return headers;
};
export const movieApi = createApi({
  reducerPath: 'filmsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: ' https://api.kinopoisk.dev/v1.4/',
    prepareHeaders: prepareHeadersConf,
  }),
  keepUnusedDataFor: 60,
  endpoints: build => ({
    getMovies: build.query<IGetMoviesResponse, IGetMoviesRequest>({
      query: ({ pageNum, genre, movie_name }: IGetMoviesRequest) => {
        if (movie_name) {
          return `movie/search?page=${pageNum}&limit=16&query=${encodeURI(movie_name)}`;
        }
        return `movie?page=${pageNum}&limit=16&selectFields=id&selectFields=name&selectFields=alternativeName&selectFields=year&selectFields=poster&selectFields=genres&type=movie${genre !== 'all' ? `&genres.name=${encodeURI(genre)}` : ''}`;
      },
      keepUnusedDataFor: 30,
    }),
    getMovieById: build.query<IGetMovieByIdResponse, IGetMovieByIdRequest>({
      query: (movieId: IGetMovieByIdRequest) => `movie/${movieId}`,
    }),
  }),
});

export const { useLazyGetMovieByIdQuery, useLazyGetMoviesQuery } = movieApi;
