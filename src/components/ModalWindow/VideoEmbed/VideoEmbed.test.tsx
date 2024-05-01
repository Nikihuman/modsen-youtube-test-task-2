import '@testing-library/jest-dom';

import { store } from '@store/store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Videos } from 'src/types/responseTypes';
import { ThemeProvider } from 'styled-components';

import { THEME } from '../../../constants/theme';
import { VideoEmbed } from './VideoEmbed';

describe('Testing the VideoEmbed component', () => {
  test('VideoEmbed component should be in document', () => {
    const videos: Videos = {
      trailers: [
        {
          url: 'https://www.youtube.com/embed/0RqDiYnFxTk',
          name: 'The Intouchables / Intouchables (2011) - Trailer (English subtitles)',
          site: 'youtube',
          type: 'TRAILER',
        },
        {
          url: 'https://www.youtube.com/embed/34WIbmXkewU',
          name: 'The Intouchables Official Trailer #1 (2012) HD Movie',
          site: 'youtube',
          type: 'TRAILER',
        },
        {
          url: 'https://www.youtube.com/embed/0RqDiYnFxTk',
          name: 'The Intouchables / Intouchables (2011) - Trailer (English subtitles)',
          site: 'youtube',
          type: 'TRAILER',
        },
        {
          url: 'https://www.youtube.com/embed/34WIbmXkewU',
          name: 'The Intouchables Official Trailer #1 (2012) HD Movie',
          site: 'youtube',
          type: 'TRAILER',
        },
      ],
    };
    render(
      <ThemeProvider theme={THEME}>
        <Provider store={store}>
          <VideoEmbed data-testid="video-embed-element" isActive={true} sources={videos} />
        </Provider>
      </ThemeProvider>,
    );
    const videoEmbed = screen.getByTestId('video-embed-element');
    expect(videoEmbed).toBeInTheDocument();
  });
});
