export interface IGetMoviesRequest {
  pageNum: number;
  genre: string;
  movie_name: string | undefined;
}

export type IGetMovieByIdRequest = number;
