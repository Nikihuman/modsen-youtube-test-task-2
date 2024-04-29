import { HTMLAttributes, ReactNode } from 'react';

export interface LinkProps extends HTMLAttributes<HTMLElement> {
  href: string;
  children: ReactNode;
}
