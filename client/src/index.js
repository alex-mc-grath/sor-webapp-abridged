import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './components/containers/App/';

import { ThemeProvider } from 'styled-components';
import { theme } from './components/layouts/theme/theme-settings';

import './index.css'

// import { setContext } from '@apollo/client/link/context';
// import { split } from '@apollo/client';
// import { WebSocketLink } from '@apollo/client/link/ws';
// import { getMainDefinition } from '@apollo/client/utilities';

// import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
// // import {AUTH_TOKEN} from "./constants";

// const AUTH_TOKEN = 'auth-token';
// localStorage.setItem('token', AUTH_TOKEN);

// const httpLink = createHttpLink({
//   uri: 'http://localhost:4000',
// });

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem(AUTH_TOKEN);
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

// const wsLink = new WebSocketLink({
//   uri: `ws://localhost:4000/graphql`,
//   options: {
//     reconnect: true,
//     connectionParams: {
//       authToken: localStorage.getItem(AUTH_TOKEN),
//     },
//   },
// });

// const link = split(
//   ({ query }) => {
//     const { kind, operation } = getMainDefinition(query);
//     return kind === 'OperationDefinition' && operation === 'subscription';
//   },
//   wsLink,
//   authLink.concat(httpLink)
// );

// const client = new ApolloClient({
//   link,
//   cache: new InMemoryCache({
//     typePolicies: {
//       Link: {
//         keyFields: ['id'],
//       },
//     },
//   }),
// });

ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      {/* <ApolloProvider client={client}> */}
      <App />
      {/* </ApolloProvider> */}
    </ThemeProvider>
  </Router>,
  document.getElementById('root')
);
