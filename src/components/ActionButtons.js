import React, { useContext } from 'react'
import './ActionButtons.css'

import { GameData } from './GameData';

export default function ActionButtons({ restart }) {

    const { gameBoard, board, setBoard, selectedNumber, setSelectedNumber, selectedCell, setSelectedCell, crossOn, setCrossOn } = useContext(GameData);

    const numberClicked = (number) => {
        if (number === selectedNumber)
            setSelectedNumber(null);
        else {
            setSelectedNumber(number);
            if (selectedCell !== null) {
                let newBoard = [...board];
                newBoard[selectedCell] = number;
                setBoard(newBoard);
                setSelectedCell(null);
            }
        }
        setCrossOn(false);
    }

    const crossClicked = () => {
        setCrossOn(!crossOn);
        selectedNumber !== null && setSelectedNumber(null);
    }

    const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <div className='action-buttons'>
            <div className="numbers">
                {
                    buttons.map((number, index) => {
                        return <button
                            onClick={() => numberClicked(number)}
                            className={`${selectedNumber == number && 'selected-number'}`}
                            key={index} > {number} </button>
                    })
                }
            </div>

            <div className="actions">
                <button className='pencil'>
                    <img src="./images/pencil.png" alt='pencil' width='20px' />
                </button>
                <button className={`cross ${crossOn && 'cross-active'}`} onClick={crossClicked}>
                    <img src="./images/cross.png" alt="cross" width='20px' />
                </button>
                <button className='new-game' onClick={restart}>New Game</button>
            </div>
        </div>
    )
}
