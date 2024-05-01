import { MovieContextProvider } from '@context/movie.context';
import { MainPage } from '@pages/Main/MainPage';
import { store } from '@store/store';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

const rootElement = document.querySelector('#root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MovieContextProvider>
        <MainPage />
      </MovieContextProvider>
    </Provider>
  </React.StrictMode>,
);
