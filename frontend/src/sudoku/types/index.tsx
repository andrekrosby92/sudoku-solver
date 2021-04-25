import type { Dispatch, SetStateAction } from 'react';

export interface BoardState {
  [key: string]: string;
}

export interface Context {
  isSolving: boolean;
  willSolveAsync: boolean;
  didSolve: boolean | null;
  state: BoardState;
  setIsSolving: Dispatch<boolean>;
  setWillSolveAsync: Dispatch<boolean>;
  setDidSolve: Dispatch<boolean | null>;
  setState: Dispatch<SetStateAction<BoardState>>;
  setDefaultBoardToState: () => void;
  clearBoard: () => void;
}