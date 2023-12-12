

import React from 'react'
import { useState } from 'react'
import { Board } from "./Board";
import { TableBoard } from "./TableBoard";
import { WinBoard } from './WinBoard';
import { FirstPage } from './FirstPage';


export const Game = ({ players, points }) => {

  const table = players.map((player) => { return { name: player, points: 0 } });
  const [tablePoints, setTablePoints] = useState(table)
  const [currentPlayer, setCurrentPlayer] = useState(0)
  const [currentGamePage, setCurrentGamePage] = useState(0)

  // console.log(tablePoints);
  //  0 = Board
  //  1 = tableBoard
  //  2 = WinBoard
  //  3 = FirstPage

   const chicoPoints = (points);
  console.log(chicoPoints);

  function RenderGame({ currentGamePage }) {
    if (currentGamePage == 0) {
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
          setCurrentPage={nextPlayer}
          tablePoints={tablePoints}
          chicoPoints={chicoPoints }
        />
      )
    }
    else if (currentGamePage == 2){
      return(
        <WinBoard
         resumeGame ={ resumeGame}
         namePlayer={players[currentPlayer]}
         chicoPoints={chicoPoints}
        />
      )
    }
    else if (currentGamePage == 3){
      return (
        <FirstPage/>
      )
    }
  }


  const nextPlayer = () => {
    let nextPlayer = currentPlayer + 1;
    if (nextPlayer == players.length) {
      nextPlayer = 0;
    }
    setCurrentPlayer(nextPlayer);
    setCurrentGamePage(0);
  }

  const resumeGame = (sumPoints) => {
    let playerPoints = tablePoints[currentPlayer].points += sumPoints;
    if (playerPoints >= points) {
      setCurrentGamePage(2);
        // GANO
    } 
    else {
      setCurrentGamePage(1);
    }
  }

  return (
    <>
    <RenderGame
      currentGamePage={currentGamePage}
    />

    </>
  )
}
