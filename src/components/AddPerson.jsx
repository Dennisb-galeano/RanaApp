
//este componentee manejará el imput

import { useState } from "react"

export const AddPerson = ({ onNewPerson }) => {


  const [inputPerson, setInputPerson] = useState('');

  const onInputChange = (event) => {
    setInputPerson(event.target.value);
  }

  //permite la entrada de la informacion 
  const onSubmit = (event) => {
    event.preventDefault();
    if (inputPerson.trim().length <= 1) //trim - elimina los espacios en blanco en ambos extremos del string
      return;
    onNewPerson(inputPerson.trim()); //solo se va a emitir, si cunple con la conficion del trim
    setInputPerson('');  // limpia el input
  }

  return (
    <form onSubmit={onSubmit} >
      <input
        id="form_id"
        type="text"
        placeholder="Nombre del jugador"
        value={inputPerson}
        onChange={(onInputChange)} //me permite escribir en el input
     />
    </form>
  
  )
}


// <input type="reset" value="Limpiar formulario"></input>
// onsubmit = llama una funcion cuando se envia un formulario