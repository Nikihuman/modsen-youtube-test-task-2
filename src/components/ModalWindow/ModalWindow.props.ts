import { HTMLAttributes } from 'react';

export interface ModalWindowProps extends HTMLAttributes<HTMLDivElement> {
  movieIdStateController: [
    number | undefined,
    React.Dispatch<React.SetStateAction<number | undefined>>,
  ];
}
