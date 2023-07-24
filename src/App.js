import './App.css';
import Game from './components/Game';

import { useState } from 'react';

import { Sudoku } from './Sudoku.js';
import { solveSudoku } from './SudokuSolver.js';



function App() {

	const sudoku = new Sudoku(9, 40);
	sudoku.fillValues();

	return (
		<div className="App">
			<header><p>Sudoku</p></header>
			<Game sudoku={sudoku} />
		</div>
	);
}

export default App;
