import React from 'react';
import App from './App/';
import { createRoot } from 'react-dom/client'
import {BrowserRouter as Router} from 'react-router-dom'

import { ThemeProvider } from 'styled-components';
import { themeSettings } from './App/Theme/theme-settings'
import { Provider } from 'react-redux'
import store from './store'
import OnRouteChangeWorker from './components/utils/OnRouteChangeWorker';

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
    <Provider store={store}>
        <ThemeProvider theme={themeSettings}>
            <Router>
                <App />
            </Router>
        </ThemeProvider>
    </Provider>
)
