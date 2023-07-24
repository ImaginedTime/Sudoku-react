import React from 'react'
import './Board.css'
import { useState } from 'react'

import { Sudoku } from '../Sudoku.js'

import {solveSudoku} from '../SudokuSolver.js'


export default function Board() {
    let sudoku = new Sudoku(9, 40);
    sudoku.fillValues();
    const [board, setBoard] = useState(sudoku.mat.flat(1));
    const solvedSudokuBoard = solveSudoku(sudoku).flat(1);

    const [selectedCell, setSelectedCell] = useState(null);

    const cellClicked = (index) => 
    {
        if(selectedCell == index)
        {
            setSelectedCell(null);
        }
        else if(board[index] !== 0)
        {
            setSelectedCell(null);
        }
        else
        {
            setSelectedCell(index);
        }
    }

    return (
        <div className='board'>
            {board.map((value, index) => {
                return (
                    <div 
                        onClick={() => cellClicked(index)}
                        className={`cell ${selectedCell == index && 'selected-cell'}`} 
                        key={index}>
                        {value === 0 ? '' : value}
                    </div>
                )
            })}
        </div>
    )
}
