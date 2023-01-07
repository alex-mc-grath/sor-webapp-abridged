import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App/index';
import { BrowserRouter as Router } from 'react-router-dom';

import store from './App/context/store'
import { Provider } from 'react-redux';

import { ThemeProvider } from 'styled-components';
import { themeSettings } from './App/Theme/theme-settings';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <ThemeProvider theme={themeSettings}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </Provider>
);
