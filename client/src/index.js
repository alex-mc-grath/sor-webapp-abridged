import React from 'react';
import App from './components/containers/App/';
import { createRoot } from 'react-dom/client'
import {BrowserRouter as Router} from 'react-router-dom'

import { ThemeProvider } from 'styled-components';
import { theme } from './components/layouts/theme/theme-settings';
import { Provider } from 'react-redux'
import store from './store'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <Router>
                <App />
            </Router>
        </ThemeProvider>
    </Provider>
)
