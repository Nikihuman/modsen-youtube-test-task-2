import { HTMLAttributes } from 'react';
import { Videos } from 'src/types/responseTypes';

export interface VideoEmbedProps extends HTMLAttributes<HTMLElement> {
  sources: Videos | null;
  isActive: boolean;
}
