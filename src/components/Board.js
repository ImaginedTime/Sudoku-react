import React, { useContext } from 'react'
import './Board.css'
import { GameData } from './GameData'

export default function Board() {

    const { gameBoard, board, setBoard, selectedNumber, setSelectedNumber, selectedCell, setSelectedCell, crossOn } = useContext(GameData);

    const cellClicked = (index) => {

        if(crossOn)
        {
            let newBoard = [...board];
            newBoard[index] = 0;
            setBoard(newBoard);
            setSelectedCell(null);
            return;
        }

        if (index === selectedCell && selectedNumber === null)
        {
            setSelectedCell(null);
            return;
        }
        
        if(selectedNumber === board[index] && gameBoard[index] === 0)
        {
            let newBoard = [...board];
            newBoard[index] = 0;
            setBoard(newBoard);
            setSelectedCell(null);
            return;
        }

        if(gameBoard[index] !== 0)
        {
            console.log("disabled cell");
            setSelectedCell(null);
            setSelectedNumber(null);
            return;
        }

        if(selectedNumber !== null)
        {
            let newBoard = [...board];
            newBoard[index] = selectedNumber;
            setBoard(newBoard);
            setSelectedCell(index);
            return;
        }

        setSelectedCell(index);
    }

    
    return (
        <div className='board'>
            {board.map((value, index) => {
                return (
                    <div
                        onClick={() => cellClicked(index)}
                        className={`cell ${selectedCell == index && 'selected-cell'} ${gameBoard[index] !== 0 && 'disabled-cell'}`}
                        key={index}>
                        {value === 0 ? '' : value}
                    </div>
                )
            })}
        </div>
    )
}
