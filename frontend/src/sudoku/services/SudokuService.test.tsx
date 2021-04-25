import type { BoardState } from '../types';
import SudokuService from './SudokuService';
import { ROWS, COLS } from '../index';
import { range } from '../../range';

function mapBoardToMockState(board: number[][]) {
  const obj: BoardState = {};

  for (let row of range(ROWS)) {
    for (let col of range(COLS)) {
      obj[`r${row}c${col}`] = board[row][col] ? String(board[row][col]) : '';
    }
  }

  return obj;
}

test('check if valid board passes', () => {
  // Create mock state
  const validBoard = [
    [5, 0, 1, 6, 2, 7, 0, 0, 0],
    [8, 2, 0, 0, 9, 0, 0, 1, 3],
    [6, 4, 0, 0, 0, 0, 0, 0, 0],
    [9, 6, 0, 4, 0, 1, 3, 0, 0],
    [0, 8, 0, 7, 3, 0, 4, 2, 9],
    [0, 0, 4, 9, 0, 0, 5, 0, 0],
    [0, 0, 6, 0, 7, 5, 0, 3, 0],
    [2, 0, 0, 3, 6, 9, 0, 0, 5],
    [0, 5, 0, 0, 0, 0, 1, 9, 0]
  ]

  const mockState = mapBoardToMockState(validBoard)
  const sudokuBoard = new SudokuService(mockState)
  const isValid = sudokuBoard.isValid()
  expect(isValid).toBeTruthy();
});

test('check if invalid board fails', () => {
  // Create mock state
  const invalidBoard = [
    [5, 0, 1, 6, 2, 7, 0, 0, 0],
    [8, 2, 0, 0, 9, 0, 0, 1, 3],
    [6, 4, 0, 0, 0, 0, 0, 0, 0],
    [9, 6, 0, 4, 0, 1, 3, 0, 0],
    [0, 8, 0, 7, 3, 0, 4, 2, 9],
    [0, 0, 4, 9, 0, 0, 5, 0, 0],
    [0, 0, 6, 0, 7, 5, 0, 3, 0],
    [2, 0, 0, 3, 6, 9, 0, 0, 5],
    [0, 5, 0, 0, 6, 0, 1, 9, 0]]

  const mockState = mapBoardToMockState(invalidBoard)
  const sudokuBoard = new SudokuService(mockState)
  const isValid = sudokuBoard.isValid()
  expect(isValid).toBeFalsy();
});

test('check if board solves successfully', () => {
  // Create mock state
  const initialBoard = [
    [5, 0, 1, 6, 2, 7, 0, 0, 0],
    [8, 2, 0, 0, 9, 0, 0, 1, 3],
    [6, 4, 0, 0, 0, 0, 0, 0, 0],
    [9, 6, 0, 4, 0, 1, 3, 0, 0],
    [0, 8, 0, 7, 3, 0, 4, 2, 9],
    [0, 0, 4, 9, 0, 0, 5, 0, 0],
    [0, 0, 6, 0, 7, 5, 0, 3, 0],
    [2, 0, 0, 3, 6, 9, 0, 0, 5],
    [0, 5, 0, 0, 0, 0, 1, 9, 0]]

  const solvedBoard = [
    [5, 3, 1, 6, 2, 7, 9, 8, 4],
    [8, 2, 7, 5, 9, 4, 6, 1, 3],
    [6, 4, 9, 8, 1, 3, 2, 5, 7],
    [9, 6, 2, 4, 5, 1, 3, 7, 8],
    [1, 8, 5, 7, 3, 6, 4, 2, 9],
    [3, 7, 4, 9, 8, 2, 5, 6, 1],
    [4, 9, 6, 1, 7, 5, 8, 3, 2],
    [2, 1, 8, 3, 6, 9, 7, 4, 5],
    [7, 5, 3, 2, 4, 8, 1, 9, 6]]

  const mockState = mapBoardToMockState(initialBoard)
  const sudokuBoard = new SudokuService(mockState)
  sudokuBoard.solve()
  const didSolve = JSON.stringify(sudokuBoard.board) === JSON.stringify(solvedBoard);
  expect(didSolve).toBeTruthy();
});