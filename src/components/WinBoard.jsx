import { Header } from "./Header";


export const WinBoard = ({  returnFirstPage, resumeGame, namePlayer, chicoPoints }) => {  // recibe prop de current page creada en game


  const changePage = (event) => {
    event.preventDefault();
    returnFirstPage(3);
  }


  const winGame = resumeGame;
  const winName = namePlayer;
  const chicoPointGame = chicoPoints;
  // console.log(chicoPoints);


  return (
    <>
      <Header />

      <h2 className=" win-text animate__animated animate__tada animate__delay-3s animate__infinite animate__slower	3s
      text-center title-config display-3 mb-4">
        Felicitaciones {winName}  <br/> Ganaste !!
      </h2>
      <h2 className="text-center">Llegaste a los {chicoPointGame} puntos antes que los demás !! </h2>


      <div className="text-center">
        <button type="button" className='btn btn-warning btn-lg, principal-buttons' onClick={ changePage} > Volver al Inicio </button>
      </div>



    </>
  )
}
