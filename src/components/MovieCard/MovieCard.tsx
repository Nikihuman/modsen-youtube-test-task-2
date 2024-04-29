import { useCallback, useState } from 'react';
import { MovieCardProps } from './MovieCard.props';
import {
  StyledHover,
  StyledMovieCard,
  StyledMovieGenres,
  StyledMovieImage,
  StyledMovieImageWrapper,
  StyledMovieInfo,
  StyledMovieName,
  StyledSelectorItem,
} from './Styles';
import { Ripple } from '@components/Ripple/Ripple';

export function MovieCard({ info, setMovieId, ...props }: MovieCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const modalWindowController = useCallback(() => {
    setMovieId(info.id);
  }, []);

  const onLoadImage = useCallback(() => {
    setIsLoaded(true);
  }, []);

  return (
    <StyledMovieCard {...props} data-test-id="movie-card-id">
      <StyledHover onClick={modalWindowController} />
      <StyledMovieImageWrapper>
        <StyledMovieImage $isLoaded={isLoaded} src={info.poster.url} onLoad={onLoadImage} />
        <Ripple $isLoaded={isLoaded} />
      </StyledMovieImageWrapper>
      <StyledMovieInfo>
        <StyledMovieName>
          {info.alternativeName ?? info.name} &#183; {info.year}
        </StyledMovieName>
        <StyledMovieGenres>
          {info.genres.map((el, i) =>
            i < 6 ? (
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
