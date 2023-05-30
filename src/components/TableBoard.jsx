

import React from 'react'

export const TableBoard = ({ setCurrentPage, tablePoints, points }) => {

  const changePage = (event) => {
    event.preventDefault();
    setCurrentPage();
  }

  const tableBody = tablePoints.map((player, key) => {
    return (
      <tr key={key}>
        <td>{player.name}</td>
        <td>{player.points}</td>
      </tr>
    )
  });

  return (
    <>
      {/* Tittle */}

      <div>
      <div className='title-table-points'>
        <h1>Tabla de puntos</h1>
      </div>

      <div className="sapo-tb">
        <img src="./public/images/sapo.png" alt=" BoliRana" />
      </div>

        <span>
          Chico Jugado a: {points} 
        </span>
      </div>
      <br/><br/>
       
    

      {/* TABLE */}

      <table className="table table-success table-striped">
        <thead>
          <tr >
            <th scope="col">Nombre del jugador</th>
            <th scope="col">Acumulado de puntos</th>
          </tr>
        </thead>
        
        <tbody >
          {tableBody}
        </tbody>
      </table>

      {/* Name Player */}
      <div> 
        <h1>
          Carlos Yara !! <br />
          Estas a 30 puntos de ganar
        </h1>
      </div>

      {/* Boton  */}
      <div>
        <button type="button" className='btn btn-warning btn-lg, principal-buttons' onClick={changePage} > Siguiente Jugador </button>
      </div>

    </>
  )
}


