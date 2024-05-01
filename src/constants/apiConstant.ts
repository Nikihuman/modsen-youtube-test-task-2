export const SEARCH_BY_GENRE_PATH = (pageNum: number, genre: string, limit: number): string => {
  return `movie?page=${pageNum}&limit=${limit}&selectFields=id&selectFields=name&selectFields=alternativeName&selectFields=year&selectFields=poster&selectFields=genres&type=movie${genre !== 'все' ? `&genres.name=${encodeURI(genre)}` : ''}`;
};

export const SEARCH_BY_NAME_PATH = (pageNum: number, name: string, limit: number): string => {
  return `movie/search?page=${pageNum}&limit=${limit}&query=${encodeURI(name)}`;
};

export const SEARCH_BY_ID_PATH = (movieId: number): string => {
  return `movie/${movieId}`;
};

export const X_API_KEY = 'K2DWFBZ-ZDX45AZ-JBFZGKR-H82FQQR';
// export const X_API_KEY = 'BHHGG58-1VHMFRG-GNC0P54-16A61X6';  MY
export const BASE_URL = 'https://api.kinopoisk.dev/v1.4/';
