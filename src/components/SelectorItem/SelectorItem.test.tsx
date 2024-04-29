import { render, screen } from '@testing-library/react';
import { SelectorItem } from './SelectorItem';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import { THEME } from '../../constants/theme';
import { Provider } from 'react-redux';
import { store } from '@store/store';
import { MovieContextProvider } from '@context/movie.context';
import { GENRES } from '@constants/genres';

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
