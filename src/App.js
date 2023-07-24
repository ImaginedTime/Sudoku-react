import './App.css';
import Game from './components/Game';

import { Sudoku } from './Sudoku.js';
import { solveSudoku } from './SudokuSolver.js';

function App() {
	
	let sudoku = new Sudoku(9, 40);
	sudoku.fillValues();
	let gameBoard = sudoku.mat.flat(1);
	let solvedSudokuBoard = solveSudoku(sudoku).flat(1);

	return (
		<div className="App">
			<header><p>Sudoku</p></header>
			<Game gameBoard={ gameBoard } solvedSudokuBoard={ solvedSudokuBoard } />
		</div>
	);
}

export default App;
