import { HTMLAttributes, ReactNode } from 'react';

export interface SelectorItemProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  genre_name: string;
}
