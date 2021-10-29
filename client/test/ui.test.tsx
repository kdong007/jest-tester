import Button from '@component/Button';
import React from 'react';
import renderer from 'react-test-renderer';

import Page from '../Page';

test('Button test', () => {
  const tree = renderer.create(<Button />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('page test', () => {
  const tree = renderer.create(<Page />).toJSON();
  expect(tree).toMatchSnapshot();
});
