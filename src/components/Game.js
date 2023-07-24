import React from 'react'
import Board from './Board'
import ActionButtons from './ActionButtons'
import './Game.css'

export default function Game() {
  return (
    <div className='game'>
        <Board />
        <ActionButtons />
    </div>
  )
}
