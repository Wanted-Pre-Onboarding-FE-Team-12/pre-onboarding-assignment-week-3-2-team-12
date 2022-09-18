import React from 'react';
import { createRoot } from 'react-dom/client';
import { store } from '@redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import App from './App';
import theme from '@styles/theme';
import GlobalStyle from '@styles/globalStyle';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  </Provider>,
);
