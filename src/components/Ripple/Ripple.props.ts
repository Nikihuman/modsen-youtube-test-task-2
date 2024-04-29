import { HTMLAttributes } from 'react';

export interface RippleProps extends HTMLAttributes<HTMLDivElement> {
  $isLoaded?: boolean;
}
