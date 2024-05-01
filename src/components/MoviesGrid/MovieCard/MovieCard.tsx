import { COUNT_OF_GENRES_IN_MOVIE_CARD } from '@constants/others';
import { useState } from 'react';

import { MovieCardProps } from './MovieCard.props';
import {
  StyledDefaultLogo,
  StyledHover,
  StyledMovieCard,
  StyledMovieGenres,
  StyledMovieImage,
  StyledMovieImageWrapper,
  StyledMovieInfo,
  StyledMovieName,
  StyledSelectorItem,
} from './Styles';

export function MovieCard({ info, setMovieId, ...props }: MovieCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <StyledMovieCard {...props} data-test-id="movie-card-id">
      <StyledHover
        onClick={() => {
          setMovieId(info.id);
        }}
      />
      <StyledMovieImageWrapper>
        <StyledMovieImage
          alt={`${info.alternativeName ?? info.name} poster`}
          $isLoaded={isLoaded}
          src={info.poster.url}
          onLoad={() => {
            setIsLoaded(true);
          }}
        />
        <StyledDefaultLogo $isLoaded={isLoaded} />
      </StyledMovieImageWrapper>
      <StyledMovieInfo>
        <StyledMovieName data-test-id="movie-name-id">
          {info.alternativeName ?? info.name} &#183; {info.year}
        </StyledMovieName>
        <StyledMovieGenres data-test-id="movie-genres-id">
          {info.genres.map((el, i) =>
            i < COUNT_OF_GENRES_IN_MOVIE_CARD ? (
              <StyledSelectorItem genre_name={el.name} key={el.name}>
                {el.name.toUpperCase()}
              </StyledSelectorItem>
            ) : null,
          )}
        </StyledMovieGenres>
      </StyledMovieInfo>
    </StyledMovieCard>
  );
}
