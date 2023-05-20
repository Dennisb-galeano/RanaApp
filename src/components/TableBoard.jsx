

import React from 'react'

export const TableBoard = ({ setCurrentPage, tablePoints }) => {

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

      <div> <br /><br />
        <span>
          Chico Jugado a: 111 Puntos
        </span>
      </div>

      <div className='TittleTablePoints'>
        <h1> Tabla de puntos </h1>
      </div>

      {/* TABLE */}

      <table className=" table table-success table-hover ">
        <thead>
          <tr>
            <th scope="col">Nombre del jugador</th>
            <th scope="col">Acumulado de puntos</th>
          </tr>
        </thead>
        <tbody>
          {tableBody}
        </tbody>
      </table>

      {/* Name Player */}
      <div> <br /><br />
        <h1>
          Carlos Yara !! <br />
          Estas a 30 puntos de ganar
        </h1>
      </div>

      {/* Boton  */}
      <div className='startButton'>
        <button type="button" className='btn btn-secondary btn-lg' onClick={changePage} > Siguiente Jugador </button>
      </div>

    </>
  )
}


