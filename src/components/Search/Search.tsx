import { FormEvent, useCallback, useContext } from 'react';
import { SearchProps } from './Search.props';
import { StyledInput, StyledLoupeImg, StyledSearchWrapper, StyledSubmitButton } from './Styles';
import { MovieContext } from '@context/movie.context';

export function Search({ placeholder, ...props }: SearchProps) {
  const { setQueryParams } = useContext(MovieContext);
  const submit = useCallback((e: FormEvent) => {
    e.preventDefault();
    const { search } = e.target as typeof e.target & { search: { value: string } };
    if (setQueryParams) {
      setQueryParams(state => ({ genre: state.genre, pageNum: 1, movie_name: search.value }));
    }
  }, []);

  return (
    <StyledSearchWrapper onSubmit={submit} {...props}>
      <StyledInput placeholder={placeholder} name="search" />
      <StyledSubmitButton type="submit">
        <StyledLoupeImg />
      </StyledSubmitButton>
    </StyledSearchWrapper>
  );
}
