import { MovieShortInfoProps } from './MovieShortInfo.props';
import {
  StyledImage,
  StyledInfoWrapper,
  StyledLogoWrapper,
  StyledMovieName,
  StyledPoster,
} from './Styles';

export function MovieShortInfo({ setSearchValue, poster, ...props }: MovieShortInfoProps) {
  return (
    <StyledInfoWrapper
      {...props}
      onClick={() => {
        setSearchValue(props.name);
      }}
    >
      <StyledMovieName>
        {props.name} &#183; {props.year}
      </StyledMovieName>
      {poster ? (
        <StyledPoster src={poster} alt={`Poster of ${props.name}`} />
      ) : (
        <StyledLogoWrapper>
          <StyledImage />
        </StyledLogoWrapper>
      )}
    </StyledInfoWrapper>
  );
}
