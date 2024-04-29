import { useEffect, useMemo, useState } from 'react';
import {
  StyledIframe,
  StyledVideoEmbed,
  VideoSelectorButton,
  VideoSelectorWrapper,
} from './Styles';
import { VideoEmbedProps } from './VideoEmbed.props';
import { Ripple } from '@components/Ripple/Ripple';

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
    sources && sources.trailers && sources.trailers.length > 0 && isActive
      ? setCurrentSource(sources.trailers[0].url)
      : setCurrentSource(null);
  }, [sources, isActive]);

  return (
    <>
      <StyledVideoEmbed>
        {sources ? (
          currentSource ? (
            <StyledIframe
              width="100%"
              height="100%"
              src={isActive ? `${currentSource}?autoplay=1` : currentSource}
              allow="accelerometer; autoplay; clipboard-write;"
              allowFullScreen
              {...props}
            />
          ) : (
            <div style={{ fontSize: '16px' }}>Sorry, we couldn`t load the video 😢 </div>
          )
        ) : (
          <Ripple style={{ margin: 'auto' }} />
        )}
      </StyledVideoEmbed>
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
