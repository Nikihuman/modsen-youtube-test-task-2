import { useEffect, useMemo } from 'react';
import { ModalWindowProps } from './ModalWindow.props';
import {
  ModalWindowWrapper,
  StyledButton,
  StyledDescription,
  StyledDirectorAvatar,
  StyledDirectorAvatarDefault,
  StyledDirectorInfo,
  StyledDirectorName,
  StyledModalWindow,
  StyledMovieInfo,
  StyledParagraph,
  StyledRipple,
} from './Styles';
import { useLazyGetMovieByIdQuery } from '@store/moviesApi';
import { VideoEmbed } from '@components/VideoEmbed/VideoEmbed';
import { PROFESSIONS } from '@constants/others';
import { INFO_MESSAGES } from '@constants/infoMessages';

export function ModalWindow({ movieIdStateController, ...props }: ModalWindowProps) {
  const [getMovieByIdQuery, { data, isFetching }] = useLazyGetMovieByIdQuery();

  const directorInfo = useMemo(
    () =>
      data && !isFetching
        ? data.persons.find(
            el =>
              el.profession === PROFESSIONS.director.rus ||
              el.enProfession === PROFESSIONS.director.eng,
          )
        : undefined,
    [isFetching],
  );

  useEffect(() => {
    if (typeof movieIdStateController[0] !== 'undefined') {
      getMovieByIdQuery(movieIdStateController[0], true);
    }
  }, [movieIdStateController[0]]);

  return (
    <ModalWindowWrapper {...props} $active={typeof movieIdStateController[0] !== 'undefined'}>
      <StyledButton
        onClick={() => {
          movieIdStateController[1](undefined);
        }}
      >
        X
      </StyledButton>
      <StyledModalWindow>
        <VideoEmbed
          isActive={typeof movieIdStateController[0] !== 'undefined'}
          sources={data && !isFetching ? data.videos ?? { trailers: [] } : null}
        />
        <StyledMovieInfo>
          <StyledDirectorInfo>
            {!isFetching && directorInfo ? (
              <StyledDirectorAvatar src={directorInfo?.photo} />
            ) : (
              <StyledDirectorAvatarDefault />
            )}
            <StyledDirectorName>
              {!isFetching && directorInfo
                ? directorInfo.enName ?? directorInfo.name
                : 'Director Name'}
            </StyledDirectorName>
          </StyledDirectorInfo>
          <StyledDescription>
            <StyledParagraph>DESCRIPTION:</StyledParagraph>
            {data && !isFetching ? (
              <StyledParagraph>{data.description ?? INFO_MESSAGES.description}</StyledParagraph>
            ) : (
              <StyledRipple />
            )}
          </StyledDescription>
        </StyledMovieInfo>
      </StyledModalWindow>
    </ModalWindowWrapper>
  );
}
