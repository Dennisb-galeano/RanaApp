
import React from 'react'

export const Board = ({ setCurrentPage }) => {
  const changePage = (event) => {
    event.preventDefault();
    setCurrentPage(3);
  }

  return (
    <>
      {/* Tittle */}
      <h1>
        <br /><br />
        ****Juguemos****
      </h1>
      {/* TEXT BOX */}
      <br /><br />
      <div>
        <span className='block'> Turno de: Carlitos Harvey Yara </span>
      </div>

      {/* Image */}
      <br />
      <div className="sapo">
        <img src="./public/images/sapo.png" alt=" BoliRana" />
      </div>

      {/* SUM POINTS */}
      <div>
        <h4> Sumador de puntos</h4>
        <span>
          llevas: 111 puntos
        </span>
      </div>

      {/* Buttons Points */}
      <div className='ButtonPoints'>
        <button type="button" className="btn btn-success">20</button>
        <button type="button" className="ms-1 btn btn-success">30</button>
        <button type="button" className="ms-1 btn btn-success">40</button>
        <button type="button" className="ms-1 btn btn-success">50</button>
        <button type="button" className="ms-1 btn btn-success">60</button>
        <button type="button" className="ms-1 btn btn-success">70</button>
        <button type="button" className="ms-1 btn btn-success">80</button>
        <button type="button" className="ms-1 btn btn-warning">Rana: 200</button>
        <button type="button" className="ms-1 btn btn-warning">Botella: 100</button>
        <button type="button" className="btn btn-danger">Se Blanqueo -10</button>
     

      </div>

      <div className='change_points'>          
        <button type="button" className="btn btn-outline-info">Reiniciar Puntaje</button>
      </div>


      {/* Final Button  */}
      <br /><br /><br />
      <input type="button" onClick={changePage} value="Como vamos" />

      {/* Boton  */}
      <div className='startButton'>
        <button type="button" className='btn btn-secondary btn-lg' onClick={changePage} > Como vamos</button>
      </div>


    </>


  )
}
