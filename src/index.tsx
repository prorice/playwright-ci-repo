import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';

import { store } from '@/modules/store';
import { client } from '@/modules/apollo';
import { MainLayout } from '@/layout/main';
import { SnackbarProvider } from 'notistack';

import '@/assets/scss/index.scss';
import { MAX_SNACK } from './components/snackbar';

const rootElement = document.querySelector('#root');

if (!rootElement) throw new Error('Failed to find the root element');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <SnackbarProvider maxSnack={MAX_SNACK}>
            <MainLayout />
          </SnackbarProvider>
        </BrowserRouter>
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
);
