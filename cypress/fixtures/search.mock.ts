import { IMovieInfo, IGetMoviesResponse } from '../../src/types/responseTypes';

export const AVATAR_MOVIE_INFO: IMovieInfo = {
  id: 251733,
  name: 'Аватар',
  alternativeName: 'Avatar',
  poster: {
    url: 'https://image.openmoviedb.com/kinopoisk-images/1599028/4adf61aa-3cb7-4381-9245-523971e5b4c8/orig',
    previewUrl:
      'https://image.openmoviedb.com/kinopoisk-images/1599028/4adf61aa-3cb7-4381-9245-523971e5b4c8/x1000',
  },
  year: 2009,
  genres: [
    {
      name: 'фантастика',
    },
    {
      name: 'боевик',
    },
    {
      name: 'драма',
    },
    {
      name: 'приключения',
    },
  ],
};

export function GET_SEARCH_MOCK(movieInfo: IMovieInfo, limit: number): IGetMoviesResponse {
  return {
    docs: new Array(limit).fill(movieInfo),
    limit,
    page: 1,
    pages: 1,
    total: limit,
  };
}
