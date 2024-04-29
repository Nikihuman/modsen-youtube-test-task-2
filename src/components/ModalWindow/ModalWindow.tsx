import { useCallback, useEffect, useMemo } from 'react';
import { ModalWindowProps } from './ModalWindow.props';
import {
  ModalWindowWrapper,
  StyledDescription,
  StyledDirectorAvatar,
  StyledDirectorAvatarDefault,
  StyledDirectorName,
  StyledModalWindow,
  StyledMovieInfo,
  StyledParagraph,
} from './Styles';
import { useLazyGetMovieByIdQuery } from '@store/moviesApi';
import { Button } from '@components/Button/Button';
import { VideoEmbed } from '@components/VideoEmbed/VideoEmbed';
import { Ripple } from '@components/Ripple/Ripple';

export function ModalWindow({ movieIdStateController, ...props }: ModalWindowProps) {
  const [getMovieByIdQuery, { data, isFetching }] = useLazyGetMovieByIdQuery();

  const directorInfo = useMemo(
    () =>
      data && !isFetching
        ? data.persons.find(el => el.profession === 'режиссер' || el.enProfession === 'director')
        : undefined,
    [isFetching],
  );

  useEffect(() => {
    if (typeof movieIdStateController[0] !== 'undefined') {
      getMovieByIdQuery(movieIdStateController[0], true);
    }
  }, [movieIdStateController[0]]);

  const closeVideo = useCallback(() => {
    movieIdStateController[1](undefined);
  }, []);

  return (
    <ModalWindowWrapper {...props} $active={typeof movieIdStateController[0] !== 'undefined'}>
      <Button onClick={closeVideo} style={{ position: 'absolute', top: '15px', right: '15px' }}>
        X
      </Button>
      <StyledModalWindow>
        <VideoEmbed
          isActive={typeof movieIdStateController[0] !== 'undefined'}
          sources={data && !isFetching ? data.videos : null}
        />
        <StyledMovieInfo>
          <div style={{ width: 'fit-content', margin: '0 auto', display: 'flex', gap: '20px' }}>
            {!isFetching && directorInfo ? (
              <StyledDirectorAvatar src={directorInfo?.photo} />
            ) : (
              <StyledDirectorAvatarDefault />
            )}
            {!isFetching && directorInfo ? (
              <StyledDirectorName>{directorInfo.enName ?? directorInfo.name}</StyledDirectorName>
            ) : (
              'Director Name'
            )}
          </div>
          <StyledDescription>
            <StyledParagraph>DESCRIPTION:</StyledParagraph>{' '}
            {data && !isFetching ? (
              data.description ? (
                <StyledParagraph>{data.description}</StyledParagraph>
              ) : (
                <StyledParagraph>{'We`re sorry, we couldn`t find a description😢'}</StyledParagraph>
              )
            ) : (
              <Ripple style={{ margin: 'auto' }} />
            )}
          </StyledDescription>
        </StyledMovieInfo>
      </StyledModalWindow>
    </ModalWindowWrapper>
  );
}
