import { useState } from "react";
import { FirstPage } from "./components/FirstPage";
import { Header } from "./components/Header";
import { ConfigBoard } from "./components/ConfigBoard";
import { Game } from "./components/Game";


// el componente padre, ranaApp hace referencia a tooda la pagina.. (orquestador)
export const RanaApp = () => {

  const [players, setPlayers] = useState([]);
  const [points, setPoints] = useState(500);
  const [currentPage, setCurrentPage] = useState(0);
  /*
  0 = FirstPage (Inicio)
  1 = ConfigBoard
  2 = Game
 
  */
  const startGame = (names, maxPoints) => {
    setPlayers(names);
    setPoints(maxPoints);
    setCurrentPage(2);
  }

  const RenderPage =({ currentPage }) => {
    if (currentPage == 0) {
      return <FirstPage
        setCurrentPage={setCurrentPage}
      />;
    }
    else if (currentPage == 1) {
      return (
        <>
          <Header />
          <ConfigBoard
            startGame={startGame}
          />
        </>
      )
    }
    else if (currentPage == 2){
      return( 
        <Game
          players={players}
          points={points}
        />        
      )
    }
  }
  
  return (
    <>
      <RenderPage
        currentPage={currentPage}
      />
    </>
  )
}

// regla de oro ! no se pueden condicionar los hooks,
// react trabaja los hooks basados en su posicion,  no con nombres
// reakt pierde la referenciade kos states a uqe state se esratia manejando




