import { ITheme } from '@constants/theme';
import { Dispatch, HTMLAttributes, SetStateAction } from 'react';

export interface NavBarProps extends HTMLAttributes<HTMLDivElement> {
  setTheme: Dispatch<SetStateAction<ITheme>>;
}
