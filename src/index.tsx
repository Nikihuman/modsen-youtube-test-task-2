import React from 'react';
import { createRoot } from 'react-dom/client';
import { MainPage } from '@pages/Main/MainPage';
import { Provider } from 'react-redux';
import { store } from '@store/store';
import { MovieContextProvider } from '@context/movie.context';

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
