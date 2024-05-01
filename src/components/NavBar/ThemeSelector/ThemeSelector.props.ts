import { ITheme } from '@constants/theme';
import { ButtonHTMLAttributes, Dispatch, SetStateAction } from 'react';

export interface ThemeSelectorProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  setThemFunc: Dispatch<SetStateAction<ITheme>>;
}
