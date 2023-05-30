
import React, { useState } from 'react'
import { ConfigBoard } from './ConfigBoard';


export const Board = ({ resumeGame, namePlayer }) => {

  const [sumPoints, setSumPoints] = useState(0);

  function changePage(event) {
    event.preventDefault();
    resumeGame(sumPoints);
  }

  const resetPoints = (event) => {
    event.preventDefault();
    setSumPoints(0);
  }

  function sumBoxPoints(event) {
    let sumaPuntos = sumPoints + parseInt(event.target.value); // parseInt es una fn( ) que convierte valores string en numero 
    setSumPoints(sumaPuntos);
    console.log(sumaPuntos);
    if (resetPoints == 0) {
      sumBoxPoints();
    }
  }

  return (
    <>
      {/* Tittle */}
      <h1>  ****Juguemos**** </h1>

      {/* Text Box */}
      <div className='turno-de'>
        <span className='block'> Turno de: {namePlayer}
        </span>
      </div>

      {/* Image */}
      <div className="sapo">
        <img src="./public/images/sapo.png" alt=" BoliRana" />
      </div>

      {/* SUM Box POINTS */}
      <div>
        <h4> Sumador de puntos</h4>

        <span className='block'>
          llevas: {sumPoints} puntos
        </span>
      </div>

      {/* Buttons Points */}
      <div className='button-points'>
        <button type="button" value="20" className="btn btn-success" onClick={sumBoxPoints}>20</button>
        <button type="button" value="30" className="ms-1 btn btn-success" onClick={sumBoxPoints}>30</button>
        <button type="button" value="40" className="ms-1 btn btn-success" onClick={sumBoxPoints}>40</button>
        <button type="button" value="50" className="ms-1 btn btn-success" onClick={sumBoxPoints}>50</button>
        <button type="button" value="60" className="ms-1 btn btn-success" onClick={sumBoxPoints}>60</button>
        <button type="button" value="70" className="ms-1 btn btn-success" onClick={sumBoxPoints}>70</button>
        <button type="button" value="80" className="ms-1 btn btn-success" onClick={sumBoxPoints}>80</button>
      </div>

      <div>
        <button type="button" value="200" className="ms-1 btn btn-warning" onClick={sumBoxPoints}>Rana: 200</button>
        <button type="button" value="100" className="ms-1 btn btn-warning" onClick={sumBoxPoints}>Botella: 100</button>
      </div>

      <div>
        <button type="button" value="-10" className="btn btn-danger" onClick={sumBoxPoints}>Se Blanqueo -10</button>
      </div>

      <div className='change-points'>
        <button type="button" className="btn btn-outline-info" onClick={resetPoints} > Reiniciar Puntaje</button>
      </div>

      {/*Final Button */}
      <div>
        <button type="button" className='btn btn-warning btn-lg, principal-buttons' onClick={changePage} > Terminar Turno</button>
      </div>

    </>
  )
}
