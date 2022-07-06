import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navigation from './Navigation';

it('renders if there is Navigation component', () => {
  const three = renderer
    .create(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>,
    )
    .toJSON();
  expect(three).toMatchSnapshot();
});
