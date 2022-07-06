import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from './Calculator';

it('renders if there is Navigation component', () => {
  const three = renderer.create(<Calculator />).toJSON();
  expect(three).toMatchSnapshot();
});
