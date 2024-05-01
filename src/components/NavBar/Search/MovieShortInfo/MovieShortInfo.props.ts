import { Dispatch, LiHTMLAttributes, SetStateAction } from 'react';

export interface MovieShortInfoProps extends LiHTMLAttributes<HTMLLIElement> {
  name: string;
  year: number;
  poster: string | undefined;
  setSearchValue: Dispatch<SetStateAction<string>>;
}
