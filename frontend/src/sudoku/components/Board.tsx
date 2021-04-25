import React, { useContext } from 'react';
import Button from './Button';
import ButtonCheck from './ButtonCheck';
import SudokuService from '../services/SudokuService';
import { BoardContext } from '../context/BoardProvider';
import { ROWS, COLS, SQUARES } from '../index';
import { range } from '../../range';

export default function Board() {
  const {
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
  } = useContext(BoardContext);

  const handleOnClick = async () => {
    setDidSolve!(null);

    if (Object.values(state!).every(val => val)) {
      return;
    }

    const sudokuBoard = new SudokuService(state!);

    if (!sudokuBoard.isValid()) {
      setDidSolve!(false);
      return;
    }

    // We can only show loading indicators when solving asynchronously.
    if (willSolveAsync) {
      setIsSolving!(true);
      await sudokuBoard.solveAsync(setState!);
      setIsSolving!(false);
    } else {
      sudokuBoard.solve(setState!);
    }

    if (sudokuBoard.didSolve()) {
      setDidSolve!(true);
    } else {
      setDidSolve!(false);
    }
  }

  return (
    <div className="board-container">
      <h1>Solve a sudoku-puzzle.</h1>
      <p>Enter a valid sudoku puzzle below and I will solve it for you.</p>
      <ButtonCheck value={willSolveAsync!} onChange={setWillSolveAsync!} />
      <small className="note">
        NOTE: Solving asynchronously will repeatedly update the board as it is solving.
        For tougher boards, this could take quite some time.
      </small>

      <div className="board">
        {range(ROWS).map(row => <Row key={row} row={row} />)}
        <div className="overlay">
          {range(SQUARES).map(num => <div key={num} />)}
        </div>
      </div>

      <Button
        disabled={isSolving!}
        loading={isSolving!}
        text="Solve sudoku"
        onClick={handleOnClick}
      />

      <Button
        disabled={isSolving!}
        loading={isSolving!}
        text="Clear board"
        onClick={() => clearBoard!()}
        optionalClassName={'blue'}
      />

      <Button
        disabled={isSolving!}
        loading={isSolving!}
        text="Set default board"
        onClick={() => setDefaultBoardToState!()}
        optionalClassName={'orange'}
      />

      {didSolve !== null && didSolve && (
        <h2 className="message success">Board is solved.</h2>
      )}

      {didSolve !== null && !didSolve && (
        <h2 className="message error">There is no solution.</h2>
      )}
    </div>
  )
}

interface RowProps {
  row: number;
}

function Row({ row }: RowProps) {
  return (
    <div className="row">
      {range(COLS).map(col => (
        <Box key={col} name={`r${row}c${col}`} />
      ))}
    </div>
  )
}

interface BoxProps {
  name: string;
}

function Box({ name }: BoxProps) {
  const { state, setState, isSolving } = useContext(BoardContext);


  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const validValues = range(1, 10).map(num => String(num)) + ' '
    const value = event.target.value

    if (validValues.includes(value)) {
      setState!(prev => ({ ...prev, [event.target.name]: value }));
    }
  }

  return (
    <div className="box">
      <input
        name={name}
        maxLength={1}
        autoComplete="off"
        disabled={isSolving}
        value={state![name]}
        onChange={handleOnChange}
      />
    </div>
  )
}