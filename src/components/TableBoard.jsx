import { Header } from "./Header";


export const TableBoard = ({ setCurrentPage, tablePoints, chicoPoints }) => {


  const changePage = (event) => {
    event.preventDefault();
    setCurrentPage();
  }


  const chicoPointGame = chicoPoints;  // la prop viene de game, y de rana app

  const tableBody = tablePoints.map((player, key) => {
    return (
      <tr key={key}>
        <td className="text-center">{player.name}</td>
        <td className="text-center">{player.points}</td>
      </tr>
    )
  });

  return (
    <>
      {/* Tittle */}
      <Header />

      <div >
        <h2 className=" text-center title-config display-4 mb-4">TABLA DE PUNTOS</h2>


        <div>
          <div >
            <img className="sapo-tb
               animate__animated animate__heartBeat animate__delay-2s"
              //  animate__infinite
              src="./images/ranaTable.png"
              alt=" RanaTable"
            />
            <div>
              <h2 className="game-points" >
                Chico Jugado a:
              </h2>
              <h2 className="chico-points">{chicoPointGame} puntos</h2>
            </div>

          </div>
        </div>

        {/* TABLE */}

        <div className="m-3">
          <table className="table table-success table-striped">
            <thead>
              <tr className="">
                <th className=" table-color text-center" scope="col">Nombre del jugador</th>
                <th className="table-color text-center" scope="col">Acumulado de puntos</th>
              </tr>
            </thead>

            <tbody>
              {tableBody}
            </tbody>
          </table>

        </div>

        {/* Name Player */}
        <div>
          {/* <h2 className="mt-5 text-center text-light">
            Estas a {} puntos de ganar !!
          </h2> */}
        </div>

        {/* Boton  */}
        <div className="text-center">
          <button type="button" className='btn btn-warning btn-lg, principal-buttons' onClick={changePage} > Siguiente Jugador </button>
        </div>

      </div>
    </>
  )
}


