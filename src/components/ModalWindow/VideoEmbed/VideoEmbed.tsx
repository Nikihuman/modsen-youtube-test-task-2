import { INFO_MESSAGES } from '@constants/infoMessages';
import { useEffect, useMemo, useState } from 'react';

import {
  StyledIframe,
  StyledInfo,
  StyledRipple,
  StyledVideoEmbed,
  VideoSelectorButton,
  VideoSelectorWrapper,
} from './Styles';
import { VideoEmbedProps } from './VideoEmbed.props';

export function VideoEmbed({ sources, isActive, ...props }: VideoEmbedProps) {
  const [currentSource, setCurrentSource] = useState<null | string>(null);

  const trailersURLs = useMemo(() => {
    if (sources && sources.trailers && sources.trailers.length > 0) {
      const set = new Set(sources.trailers.map(el => el.url));
      return Array.from(set);
    }
    return null;
  }, [sources]);

  useEffect(() => {
    setCurrentSource(
      !sources?.trailers?.length && !isActive ? null : sources?.trailers[0]?.url ?? null,
    );
  }, [sources, isActive]);

  const getVideoIframe = () => {
    if (!currentSource) {
      return <StyledInfo>{INFO_MESSAGES.video}</StyledInfo>;
    }
    return (
      <StyledIframe
        width="100%"
        height="100%"
        src={isActive ? `${currentSource}?autoplay=1` : currentSource}
        allow="accelerometer; autoplay; clipboard-write;"
        allowFullScreen
        {...props}
      />
    );
  };

  return (
    <>
      <StyledVideoEmbed>{sources ? getVideoIframe() : <StyledRipple />}</StyledVideoEmbed>
      <VideoSelectorWrapper>
        {trailersURLs
          ? trailersURLs.map((el, i) => (
              <VideoSelectorButton
                $active={el === currentSource}
                key={i}
                onClick={() => {
                  setCurrentSource(el);
                }}
              >
                VideoPlayer{` ${i + 1}`}
              </VideoSelectorButton>
            ))
          : null}
      </VideoSelectorWrapper>
    </>
  );
}
