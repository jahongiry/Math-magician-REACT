import React from 'react';
import renderer from 'react-test-renderer';
import Quote from './Quote';

it('renders if there is Quote', () => {
  const three = renderer.create(<Quote />).toJSON();
  expect(three).toMatchSnapshot();
});
