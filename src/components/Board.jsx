
import React, { useState } from 'react'
import { Header } from './Header';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';



export const Board = ({ resumeGame, namePlayer }) => {

  const [sumPoints, setSumPoints] = useState(0);
  const Myswal = withReactContent(Swal);
  


  function changePage(event) {
    event.preventDefault();
    resumeGame(sumPoints);
  }

  function seBlanqueo(event) {
    const restaPuntos = sumPoints + parseInt(event.target.value);
    setSumPoints(restaPuntos);

    if (restaPuntos < -100) {
      setSumPoints(-100);
      Myswal.fire({
      title: 'se blanqueo dos veces?',
      icon: "question",
      // showClass: {
      //   popup: 'animate__animated animate__fadeInDown'
      // },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },

      });


    } else if (sumPoints > 0) {
      setSumPoints(sumPoints);
      Myswal.fire({
        title: 'Regresa: No se blanqueo',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        },
      });
    }

  }
  //TODO: arreglar alerts, no permite avanzar si no coloca valor en el puntaje

  const resetPoints = (event) => {
    event.preventDefault();
    setSumPoints(0);
  }

  function sumBoxPoints(event) {
    const sumaPuntos = sumPoints + parseInt(event.target.value); // parseInt es una fn( ) que convierte valores string en numero 
    setSumPoints(sumaPuntos);
  }



  return (
    <>
      <Header />

      {/* SUM Box POINTS */}
      <h2 className=' text-center title-config display-3'> Sumador de puntos</h2>

      {/* Text Box */}
      <div className='turno text-center mt-5 p-2 shadow'>
        <h3 className='turno-de display-6 '> Turno de : </h3>
        <h3 className='turno-de display-8'> {namePlayer}</h3>

        <div className='span'>
          Llevas: {sumPoints} puntos
        </div>
      </div>

      {/* Buttons Points */}
      <div>
        <div className='text-center button-points'>
          <button type="button" value="30" className="padding-buttons ms-1 btn btn-success" onClick={sumBoxPoints}>30</button>
          <button type="button" value="40" className="padding-buttons ms-1 btn btn-success" onClick={sumBoxPoints}>40</button>
          <button type="button" value="50" className="padding-buttons ms-1 btn btn-success" onClick={sumBoxPoints}>50</button>

        </div>

        <div className='text-center'>
          <button type="button" value="150" className="p-3 ms-1 btn btn-warning" onClick={sumBoxPoints}>Botella: 150</button>
          <button type="button" value="200" className="p-3 ms-1 btn btn-warning" onClick={sumBoxPoints}>Rana: 200</button>
          <button type="button" value="300" className="p-3 ms-1 btn btn-warning" onClick={sumBoxPoints}>Chiquito: 300</button>

        </div>

        <div className='text-center my-1'>
          <button type="button" value="-100" className="p-3 btn btn-danger" onClick={seBlanqueo}>Se Blanqueo -100</button>
        </div>

      </div>

      <div className='text-center reset-points mt-5 '>
        <button type="button" className="btn btn-warning btn-lg, board-buttons" onClick={resetPoints} > Reiniciar Puntaje</button>

        {/*Final Button */}
        <button type="button" className='m-3 btn btn-warning btn-lg, board-buttons' onClick={changePage} > Terminar Turno</button>

      </div>

    </>
  )
}
