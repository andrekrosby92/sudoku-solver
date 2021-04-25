import type { Dispatch, SetStateAction } from 'react';
import type { BoardState } from '../types';
import { ROWS, COLS } from '../index';
import { range } from '../../range';

export default class SudokuService {
  initialBoard: number[][];
  board: number[][];

  constructor(state: BoardState) {
    this.initialBoard = this._parseStateToBoard(state);
    this.board = this._parseStateToBoard(state);
  }

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

  didSolve() {
    return JSON.stringify(this.initialBoard) !== JSON.stringify(this.board);
  }

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

  async _sleep(milliseconds: number): Promise<typeof setTimeout> {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }
}
