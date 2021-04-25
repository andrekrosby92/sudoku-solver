import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


// TODO: TESTING
// board = [
//   [5, 0, 1, 6, 2, 7, 0, 0, 0],
//   [8, 2, 0, 0, 9, 0, 0, 1, 3],
//   [6, 4, 0, 0, 0, 0, 0, 0, 0],
//   [9, 6, 0, 4, 0, 1, 3, 0, 0],
//   [0, 8, 0, 7, 3, 0, 4, 2, 9],
//   [0, 0, 4, 9, 0, 0, 5, 0, 0],
//   [0, 0, 6, 0, 7, 5, 0, 3, 0],
//   [2, 0, 0, 3, 6, 9, 0, 0, 5],
//   [0, 5, 0, 0, 0, 0, 1, 9, 0]
// ]

// [
// [5, 3, 1, 6, 2, 7, 9, 8, 4],
// [8, 2, 7, 5, 9, 4, 6, 1, 3],
// [6, 4, 9, 8, 1, 3, 2, 5, 7],
// [9, 6, 2, 4, 5, 1, 3, 7, 8],
// [1, 8, 5, 7, 3, 6, 4, 2, 9],
// [3, 7, 4, 9, 8, 2, 5, 6, 1],
// [4, 9, 6, 1, 7, 5, 8, 3, 2],
// [2, 1, 8, 3, 6, 9, 7, 4, 5],
// [7, 5, 3, 2, 4, 8, 1, 9, 6]
// ]