import '@testing-library/jest-dom';

import { GENRES } from '@constants/genres';
import { MovieContextProvider } from '@context/movie.context';
import { store } from '@store/store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { THEME } from '../../constants/theme';
import { SelectorItem } from './SelectorItem';

describe('Testing the SelectorItem component', () => {
  test('SelectorItem component should be in document', () => {
    render(
      <ThemeProvider theme={THEME}>
        <Provider store={store}>
          <MovieContextProvider>
            {GENRES.map(el => (
              <SelectorItem data-testid="selector-item-element" genre_name={el.name} key={el.name}>
                {el.name.toUpperCase()}
              </SelectorItem>
            ))}
          </MovieContextProvider>
        </Provider>
      </ThemeProvider>,
    );
    const items = screen.getAllByTestId('selector-item-element');
    expect(items.length).toEqual(GENRES.length);
    items.forEach(el => expect(el).toBeInTheDocument());
  });
});
