

import React from 'react'

export const BoardTablePoints = ({ setCurrentPage }) => {
  const changePage = (event) => {
    event.preventDefault();
    setCurrentPage(2);
  }

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
            <th scope="col">#</th>
            <th scope="col">Nombre del jugador</th>
            <th scope="col">Acumulado de puntos</th>
            <th scope="col">Puesto N°</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </table>

      {/* Name Player */}

      <div> <br /><br />
        <h1>
          Carlos Yara !! <br/>
          Estas a 30 puntos de ganar
        </h1>
      </div>

       {/* Boton  */}
       <div className='startButton'>
      <button type="button" className='btn btn-secondary btn-lg'onClick={changePage} > Siguiente Jugador </button>
    </div>
 
    </>
  )
}


