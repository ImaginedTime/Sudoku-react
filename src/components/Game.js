import React from 'react'
import Board from './Board'
import ActionButtons from './ActionButtons'
import './Game.css'

import { useState } from 'react';
import { GameData } from './GameData';


export default function Game({ gameBoard, solvedSudokuBoard }) {
	const [board, setBoard] = useState([...gameBoard]);
	const [selectedCell, setSelectedCell] = useState(null);
	const [selectedNumber, setSelectedNumber] = useState(null);

	return (
		<div className='game'>
			<GameData.Provider value={{ gameBoard, board, setBoard, selectedNumber, setSelectedNumber, selectedCell, setSelectedCell }}>
				<Board />
				<ActionButtons/>
			</GameData.Provider>
		</div>
	)
}
