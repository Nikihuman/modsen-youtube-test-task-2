import { Dispatch, HTMLAttributes, SetStateAction } from 'react';

export interface MoviesGridProps extends HTMLAttributes<HTMLDivElement> {
  movieIdStateController: [number | undefined, Dispatch<SetStateAction<number | undefined>>];
}
