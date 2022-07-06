import React from 'react';
import renderer from 'react-test-renderer';
import Welcome from './Welcome';

it('renders if there is Welcome component', () => {
  const three = renderer.create(<Welcome />).toJSON();
  expect(three).toMatchSnapshot();
});
