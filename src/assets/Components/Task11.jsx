import React, { useState } from 'react'

export default function Task11() {
    const [board,setBoard]=useState(Array(9).fill(""))
    const [player,setPlayer]=useState("X")

    const handleClick=(index)=>{
        if(board[index]!=="")
            return
        const newBoard=[...board]
        setBoard(newBoard)
        newBoard[index]= player
        setPlayer(player==="X"? "O" : "X")
    }
    const resetgame=()=>{
        setBoard(Array(9),fill(""))
        setPlayer("X")
    }
  return (
    <div className='box'>   
      <h1>Tic Tac Toe</h1>
      <h2>Player:{player}</h2>
      <div className='content'>
        {board.map((curE,index)=>(
            <button key={index} className='smallbox' onClick={handleClick(index)}>{curE}</button>
        ))}
      </div>
      <button className='reset' onClick={resetgame}>Reset Game</button>
    </div>
  )
}
