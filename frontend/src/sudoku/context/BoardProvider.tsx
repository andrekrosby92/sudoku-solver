import type { BoardState, Context } from '../types';
import { createContext, useEffect, useState } from 'react';
import { ROWS, COLS, DEFAULT_BOARD } from '../index';
import { range } from '../../range';

export const BoardContext = createContext<Partial<Context>>({})

interface BoardProviderProps {
  children: JSX.Element;
}

export default function BoardProvider(props: BoardProviderProps) {
  const [state, setState] = useState({});
  const [willSolveAsync, setWillSolveAsync] = useState(false);
  const [isSolving, setIsSolving] = useState(false);
  const [didSolve, setDidSolve] = useState<boolean | null>(null);

  useEffect(() => { setDefaultBoardToState(); }, [])

  function setDefaultBoardToState(): void {
    setDidSolve(null);
    setState(() => {
      const obj: BoardState = {};

      for (let row of range(ROWS)) {
        for (let col of range(COLS)) {
          obj[`r${row}c${col}`] = DEFAULT_BOARD[row][col] ? String(DEFAULT_BOARD[row][col]) : '';
        }
      }

      return obj;
    })
  }

  function clearBoard(): void {
    setDidSolve(null);
    setState(() => {
      const obj: BoardState = {};

      for (let row of range(ROWS)) {
        for (let col of range(COLS)) {
          obj[`r${row}c${col}`] = '';
        }
      }

      return obj;
    })
  }

  const context = {
    state,
    willSolveAsync,
    isSolving,
    didSolve,
    setState,
    setWillSolveAsync,
    setIsSolving,
    setDidSolve,
    setDefaultBoardToState,
    clearBoard
  }

  return (
    <BoardContext.Provider value={context}>
      {props.children}
    </BoardContext.Provider>
  )
}
