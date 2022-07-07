import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import App from './App';

it('renders if there is Navigation component', () => {
  const three = renderer
    .create(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    )
    .toJSON();
  expect(three).toMatchSnapshot();
});
