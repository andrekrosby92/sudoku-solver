import Board from './sudoku/components/Board';
import BoardProvider from './sudoku/context/BoardProvider';


export default function App() {
  return (
    <div className="app">
      <nav className="navbar">
        Sudoku-solver
      </nav>
      <div className="main">
        <BoardProvider>
          <Board />
        </BoardProvider>
      </div>
    </div>
  );
}
