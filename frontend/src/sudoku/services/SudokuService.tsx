import type { Dispatch, SetStateAction } from 'react';
import type { BoardState } from '../types';
import { ROWS, COLS } from '../index';
import { range } from '../../range';

/**
 * Class for handling sudoku-board operations.
 * @param {BoardState} state State from the Board-component.
 * 
 * @property {number[][]} initialBoard: The initial board. Will not be modified.
 * @property {number[][]} board: The main board. Will be modified.
 */
export default class SudokuService {

  initialBoard: number[][];
  board: number[][];

  constructor(state: BoardState) {
    this.initialBoard = this._parseStateToBoard(state);
    this.board = this._parseStateToBoard(state);
  }

  /**
   * Check if the sudoku-board is valid. 
   * @return {boolean} Return true if the board is valid, else false.
   */
  isValid(): boolean {
    let state = new Set();

    for (let row of range(ROWS)) {
      for (let col of range(COLS)) {
        const value = this.board[row][col];

        if (value === 0) continue;

        const rowRecord = `row ${row} value ${value}`;
        const colRecord = `col ${col} value ${value}`;
        const boxRecord = `box ${Math.floor(row / 3)} / ${Math.floor(col / 3)} value ${value}`;

        if (state.has(rowRecord) || state.has(colRecord) || state.has(boxRecord)) {
          return false;
        }

        state.add(rowRecord);
        state.add(colRecord);
        state.add(boxRecord);
      }
    }

    return true;
  }

  /**
   * Recursive function.
   * Solve the sudoku-board by trying values and then backtrack if the value is not "legal".
   * Also, update state of the displayed board.
   * @param {SetStateAction<BoardState>} setState Update function for displayed board state.
   * @return {boolean} Return true if solved or closer to solving, else false.
   */
  solve(setState: Dispatch<SetStateAction<BoardState>>): boolean {
    for (let row of range(ROWS)) {
      for (let col of range(COLS)) {
        if (this.board[row][col] === 0) {
          for (let n of range(1, 10)) {
            if (this._isPossible(row, col, n)) {

              this.board[row][col] = n;
              setState!(prev => ({ ...prev, [`r${row}c${col}`]: String(n) }));

              if (this.solve(setState)) {
                return true;
              } else {
                this.board[row][col] = 0;
                setState!(prev => ({ ...prev, [`r${row}c${col}`]: '' }));
              }
            }
          }

          return false;
        }
      }
    }

    return true;
  }

  /**
   * Recursive function. Async implementation of solve(). 
   * This allows for the displayed board to update through each iteration. 
   * @return {boolean} Return true if solved or closer to solving, else false.
   */
  async solveAsync(setState: Dispatch<SetStateAction<BoardState>>): Promise<boolean> {
    await this._sleep(1);

    for (let row of range(ROWS)) {
      for (let col of range(COLS)) {
        if (this.board[row][col] === 0) {
          for (let n of range(1, 10)) {
            if (this._isPossible(row, col, n)) {

              this.board[row][col] = n;
              setState!(prev => ({ ...prev, [`r${row}c${col}`]: String(n) }));

              if (await this.solveAsync(setState)) {
                return Promise.resolve(true);
              } else {
                this.board[row][col] = 0;
                setState!(prev => ({ ...prev, [`r${row}c${col}`]: '' }));
              }
            }
          }

          return Promise.resolve(false);
        }
      }
    }

    return Promise.resolve(true);
  }

  /**
   * Compare initialBoard to board. 
   * If the boards are the same, the puzzle was not solved.
   * @return {boolean} Return true if the boards are not equal, else false.
   */
  didSolve(): boolean {
    return JSON.stringify(this.initialBoard) !== JSON.stringify(this.board);
  }

  /**
   * Check if {value} can be placed in {x} row and {y} column.
   * @param {number} x Row of the board.
   * @param {number} y Column of the board.
   * @param {number} value The number to check.
   * @return {boolean} Return true if {value} is "legal", else false.
   */
  _isPossible = (x: number, y: number, value: number): boolean => {
    for (let i of range(3)) {
      for (let j of range(3)) {
        if (this.board[x][i * 3 + j] === value) return false;
        if (this.board[i * 3 + j][y] === value) return false;

        const squareX = Math.floor(x / 3) * 3;
        const squareY = Math.floor(y / 3) * 3;

        if (this.board[squareX + i][squareY + j] === value) return false;
      }
    }

    return true;
  }

  /**
   * Parse board-state to a 9x9 matrix.
   * @param {BoardState} state The state of the board.
   * @return {number[][]} The sudoku-board as a 9x9 matrix.
   */
  _parseStateToBoard(state: BoardState): number[][] {
    const board = []

    for (let row of range(ROWS)) {
      const rows = []

      for (let col of range(COLS)) {
        if (state[`r${row}c${col}`]) {
          rows.push(parseInt(state[`r${row}c${col}`]))
        } else {
          rows.push(0)
        }
      }

      board.push(rows)
    }

    return board
  }

  /**
   * Helper-function for solveAsync().
   * @param {number} milliseconds How long the function should sleep.
   * @return {Promise} A promise that resolves with a setTimeout.
   */
  async _sleep(milliseconds: number): Promise<typeof setTimeout> {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }
}
