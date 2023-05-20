

import React from 'react'
import { useState } from 'react'
import { Board } from "./Board";
import { TableBoard } from "./TableBoard";


export const Game = ({players, points}) => {

  const table = players.map((player) => { return {name:player, points:0}});
  const [tablePoints, setTablePoints] = useState(table)
  const [currentPlayer, setCurrentPlayer] = useState(0)
  const [currentGamePage, setCurrentGamePage] = useState(0)

  console.log(tablePoints);
  //  0 = Board
  //  1 = tablePoints
  //  2 = WinBoard

  function RenderGame({currentGamePage}) {
    if( currentGamePage == 0){
      return (
        <Board 
          resumeGame={resumeGame}
          namePlayer={players[currentPlayer]}
        />
      )
    }
    else if (currentGamePage == 1) {
      return (
        <TableBoard
          setCurrentPage = {nextPlayer}
          tablePoints = {tablePoints}
        />
      )
    }

  }

  const nextPlayer =() => {
    let nextPlayer = currentPlayer + 1;
    if (nextPlayer == players.length) {
      nextPlayer = 0;
    }
    setCurrentPlayer(nextPlayer);
    setCurrentGamePage(0);
  }

  const resumeGame =(sumPoints) => {
    let playerPoints = tablePoints[currentPlayer].points += sumPoints;
    if (playerPoints >= points) {
      // GANO
    }
    else {
      setCurrentGamePage(1);
    }
  }

  return (
    <RenderGame 
      currentGamePage={currentGamePage}
    />
  )
}
