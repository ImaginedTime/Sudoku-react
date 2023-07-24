import React from 'react'
import './ActionButtons.css'
import pencil from './pencil.png'
import cross from './cross.png'

import { useState } from 'react'

export default function ActionButtons() {

    const [selectedNumber, setSelectedNumber] = useState(null);

    const numberClicked = (number) => {

        if (number == selectedNumber)
            setSelectedNumber(null);
        else
            setSelectedNumber(number);
        console.log(number);
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
                    <img src={pencil} alt='pencil' width='20px' />
                </button>
                <button className='cross'>
                    <img src={cross} alt="cross" width='20px' />
                </button>
                <button className='new-game'>New Game</button>
            </div>
        </div>
    )
}
