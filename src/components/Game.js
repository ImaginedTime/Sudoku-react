import React from 'react'
import Board from './Board'
import ActionButtons from './ActionButtons'
import './Game.css'

import { useState } from 'react';
import { GameData } from './GameData';

import { solveSudoku } from '../SudokuSolver.js';


export default function Game({ sudoku }) {

	const [gameBoard, setGameBoard] = useState(sudoku.mat.flat(1));
	const [solvedSudokuBoard, setSolvedSudokuBoard] = useState(solveSudoku(sudoku).flat(1));
	const [board, setBoard] = useState([...gameBoard]);
	const [selectedCell, setSelectedCell] = useState(null);
	const [selectedNumber, setSelectedNumber] = useState(null);

	const restart = () => {
		sudoku.fillZeroes();
		sudoku.fillValues();

		setGameBoard(sudoku.mat.flat(1));
		setSolvedSudokuBoard(solveSudoku(sudoku).flat(1));
		setBoard(sudoku.mat.flat(1));
		setSelectedCell(null);
		setSelectedNumber(null);
	}

	return (
		<div className='game'>
			<GameData.Provider value={{ gameBoard, board, setBoard, selectedNumber, setSelectedNumber, selectedCell, setSelectedCell }}>
				<Board />
				<ActionButtons restart={ restart } />
			</GameData.Provider>
		</div>
	)
}
