import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import Counter from './Counter';

test('<Counter />', () => {
  const { debug, getByTestId } = render(<Counter />);
  debug(); // outputs dom as a string
  const counterButton = getByTestId('counter-button');

  // asserts counter-button is a button
  expect(counterButton.tagName).toBe('BUTTON');

  // asserts counter-button starts at 0
  expect(counterButton.textContent).toBe('0');

  fireEvent.click(counterButton);
  expect(counterButton.textContent).toBe('1');

  fireEvent.click(counterButton);
  expect(counterButton.textContent).toBe('2');

  debug();
});
