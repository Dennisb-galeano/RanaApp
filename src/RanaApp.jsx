import { useState } from "react";
import { FirstPage } from "./components/FirstPage";
import { Header } from "./components/Header";
import { ConfigBoard } from "./components/ConfigBoard";
import { Board } from "./components/Board";
import { BoardTablePoints } from "./components/BoardTablePoints";



// el componente padre, ranaApp hace referencia a tooda la pagina.. 
export const RanaApp = () => {

    const [currentPage,setCurrentPage] = useState(0);
    /*
    0 = FirstPage (Inicio)
    1 = ConfigBoard
    2 = Board
    3 = BoardTablePoints
    4 = 
    */
      
  function RenderPage({currentPage}) {
    // console.log(currentPage);
    if (currentPage == 0){
      return <FirstPage
        setCurrentPage={setCurrentPage}
      />;
    }
    else if(currentPage == 1) { 
      return (
        <>
        <Header/>
        <ConfigBoard
          setCurrentPage={setCurrentPage}
        />
        </>
      )
    }
    else if (currentPage == 2){
      return (
        <>
        <Board
        setCurrentPage={setCurrentPage}
        />
        </>
       )
    }

    else if ( currentPage == 3 ){
      return(
        <>
        <BoardTablePoints
        setCurrentPage={setCurrentPage}
        />
        
        
        </>
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


 

