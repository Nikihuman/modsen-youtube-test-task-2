import { Dispatch, HTMLAttributes, SetStateAction } from 'react';
import { IMovieInfo } from 'src/types/responseTypes';

export interface MovieCardProps extends HTMLAttributes<HTMLDivElement> {
  info: IMovieInfo;
  setMovieId: Dispatch<SetStateAction<number | undefined>>;
}
