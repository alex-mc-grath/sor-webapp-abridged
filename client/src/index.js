import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
// import { Theme } from './App/theme/Theme';
// import { BrowserRouter as Router } from 'react-router-dom';
import store from './app/context/store'
import { Provider } from 'react-redux';

import { ThemeProvider } from 'styled-components';
import { themeSettings } from './app/theme/theme-settings';
import { BrowserRouter as Router } from 'react-router-dom';

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
