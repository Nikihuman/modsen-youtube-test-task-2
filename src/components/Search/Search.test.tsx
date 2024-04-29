import { render, screen } from '@testing-library/react';
import { Search } from './Search';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import { THEME } from '../../constants/theme';
import { Provider } from 'react-redux';
import { store } from '@store/store';
import { MovieContextProvider } from '@context/movie.context';

describe('Testing the Search component', () => {
  test('MovieCard component should be in document', () => {
    render(
      <ThemeProvider theme={THEME}>
        <Provider store={store}>
          <MovieContextProvider>
            <Search data-testid="search-element" placeholder="Search..." />
          </MovieContextProvider>
        </Provider>
      </ThemeProvider>,
    );
    const search = screen.getByTestId('search-element');
    expect(search).toBeInTheDocument();
  });
});
