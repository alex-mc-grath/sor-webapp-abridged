import React from 'react';
import renderer from 'react-test-renderer'
import ReactDOM from 'react';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});