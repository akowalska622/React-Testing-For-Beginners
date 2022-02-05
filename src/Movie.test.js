import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Movie from './Movie';

afterEach(cleanup);

console.error = jest.fn();

test('<Movie />', () => {
  render(<Movie />)

  // if we don't mock expected error, we'll got error in test
  expect(console.error).toBeCalled();
})
