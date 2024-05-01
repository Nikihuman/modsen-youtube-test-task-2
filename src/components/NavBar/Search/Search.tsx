import { INFO_MESSAGES } from '@constants/infoMessages';
import { MovieContext } from '@context/movie.context';
import { useLazyGetMovieNamesQuery } from '@store/moviesApi';
import { FormEvent, useCallback, useContext, useState } from 'react';

import { MovieShortInfo } from './MovieShortInfo/MovieShortInfo';
import { SearchProps } from './Search.props';
import {
  StyledInfo,
  StyledInput,
  StyledLoupeImg,
  StyledMoviesNames,
  StyledRipple,
  StyledSearchWrapper,
  StyledSubmitButton,
  StyledUl,
} from './Styles';

export function Search({ placeholder, ...props }: SearchProps) {
  const { setQueryParams } = useContext(MovieContext);
  const [searchValue, setSearchValue] = useState('');
  const [getMoviesNamesQuery, { data, isFetching }] = useLazyGetMovieNamesQuery({});

  const submit = useCallback((e: FormEvent) => {
    e.preventDefault();
    const { search } = e.target as typeof e.target & { search: { value: string } };
    if (setQueryParams) {
      setQueryParams(state => ({ genre: state.genre, pageNum: 1, movie_name: search.value }));
    }
  }, []);

  const getMoviesName = (e: FormEvent<HTMLInputElement>) => {
    const { value } = e.target as typeof e.target & { value: string };
    setSearchValue(value);
    if (value.length <= 1) {
      return;
    }
    getMoviesNamesQuery({ movie_name: value }, true);
  };

  const getListOfNames = () => {
    if (isFetching) {
      return <StyledRipple />;
    }
    return (
      <StyledUl>
        {data?.docs.map(el => (
          <MovieShortInfo
            setSearchValue={setSearchValue}
            name={el.alternativeName || el.name}
            year={el.year}
            poster={el.poster.url}
            key={el.id}
          />
        ))}
      </StyledUl>
    );
  };

  return (
    <StyledSearchWrapper onSubmit={submit} {...props}>
      <StyledInput
        placeholder={placeholder}
        value={searchValue}
        onInput={getMoviesName}
        name="search"
      />
      <StyledSubmitButton type="submit">
        <StyledLoupeImg />
      </StyledSubmitButton>
      <StyledMoviesNames>
        {searchValue.length > 1 ? (
          getListOfNames()
        ) : (
          <StyledInfo>{INFO_MESSAGES.namesSearch}</StyledInfo>
        )}
      </StyledMoviesNames>
    </StyledSearchWrapper>
  );
}
