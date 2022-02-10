import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import MovieDetail from './MovieDetail';

global.fetch = require('jest-fetch-mock');

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

const match = {
  params: {
    id: 'fdsgasfadsf',
  },
};

console.error = jest.fn();

test('<MovieDetail />', () => {
  fetch.mockResponseOnce(
    JSON.stringify({
      movie: {
        id: 'hi',
        title: 'level up rules!',
      },
    })
  );
  const { debug } = render(<MovieDetail match={match} />);
  debug();
});
