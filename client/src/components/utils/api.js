import axios from 'axios';

export const api = axios.create({
  baseURL: '/graphql',
  headers: {
    'Content-Type': 'application/json',
  },
});

// api.interceptors

api.graphql = (requestString) => {
  return api.post(
    '/',
    JSON.stringify({
      query: requestString,
    })
  );
};
