
// iniciar pantalla de juego

import React, { useState } from 'react'
import { RanaApp } from '../RanaApp'

export const FirstPage = () => {
  const [inputButton, setInputButton] = useState();
  
  const onInputChange = ({target}) => {
    setInputButton(target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(inputButton);
  }



  // <form on onSubmit={event => console.log(event) } >


  // </form>

  return (
    <>
      {/* titulo */}
      <h1>
        RANA APP
      </h1>
    
       {/* imagen */}
      <div className="sapo">
        <img src="./sapo transparente.png" alt=" BoliRana"/>
      </div>  

    {/* Boton  */}
      <button onClick={addButton }>  iniciar juego</button>

    </>

  )
}





// <input type="reset" value="Limpiar formulario"></input>
// onsubmit = llama una funcion cuando se envia un formulario
