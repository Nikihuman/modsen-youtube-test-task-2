import { Ripple } from '@components/Ripple/Ripple';
import { useMemo } from 'react';
import { StyledMovieCard } from './Styles';

export function MovieSkeletonCards() {
  const generatedArray = useMemo<string[]>(() => {
    return new Array(16).fill('movie');
  }, []);

  return (
    <>
      {generatedArray.map((el, i) => (
        <StyledMovieCard key={el + i} data-testid="movie-skelet-card-element">
          <Ripple />
        </StyledMovieCard>
      ))}
    </>
  );
}
