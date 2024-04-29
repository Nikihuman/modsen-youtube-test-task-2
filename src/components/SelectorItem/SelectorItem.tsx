import { useCallback, useContext } from 'react';
import { SelectorItemProps } from './SelectorItem.props';
import { StyledSelectorItem } from './Styles';
import { MovieContext } from '@context/movie.context';

export function SelectorItem({ children, genre_name, ...props }: SelectorItemProps) {
  const { setQueryParams, originalArgs } = useContext(MovieContext);
  const setGenre = useCallback(() => {
    if (setQueryParams) {
      setQueryParams({ genre: genre_name, pageNum: 1, movie_name: undefined });
    }
  }, []);
  return (
    <StyledSelectorItem onClick={setGenre} $active={originalArgs?.genre === genre_name} {...props}>
      {children}
    </StyledSelectorItem>
  );
}
