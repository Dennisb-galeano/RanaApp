
import { useRef, useState } from 'react';

export const ConfigBoard = ({ setCurrentPage }) => {
  // variables 
  const inputNamePlayerRef = useRef(); // devuelve un objeto ref mutable cuya propiedad .current se inicializa en el argumento pasado (valor inicial). El objeto devuelto persistirá durante toda la vida útil del componente.

  // states 
  const [names, setNames] = useState([]); //espacio en memoria para manejar mis categorias
  const [points, setPoints] = useState(500);  

  // functions
  const addPlayer = (event) => {
    event.preventDefault();

    let newPerson = inputNamePlayerRef.current.value;
    if (newPerson.length == 0) {
      alert("EL nombre debe tener al menos un caracter");
      inputNamePlayerRef.current.focus();
      return;
    }
    inputNamePlayerRef.current.value = "";
    setNames([...names, newPerson]);
  }

  const changePage = (event) => {
    event.preventDefault();
    setCurrentPage(2);
  }

  const deleteList = (event) => {
    event.preventDefault();
    setNames([]);
  }

  const selectPoints = (event) => {
    setPoints(event.target.value);
  }

  return (
    <>
      {/* INPUT */}
      <input
        type='text'
        placeholder='Nombre del jugador'
        name='name_player'
        ref={inputNamePlayerRef}
      />

      {/* listado de nombres */}
      <ol>
        {
          names.map(name => {  //me permite barrer c/u de los elementos del arreglo y regresar a algo nuevo
            return <li key={name}> {name} </li>
          })
        }
      </ol>

      {/* botones agregar, eliminar personas */}
      <div className='buttonsChangeList' />
      <button type="button" className="btn btn-primary btn-sm" onClick={addPlayer} > Agregar participante</button>
      <button type="reset" className="btn btn-secondary btn-sm" onClick={deleteList} > Eliminar participantes</button>
      <div />

      {/* PUNTAJES */}
      <div>
        <h2>Selecciona el puntaje del chico </h2>
        <select id='Puntaje' className="form-select" onChange={selectPoints} aria-label="Default select example">
          <option value='500'>500 puntos</option>
          <option value='1000'>1000 puntos</option>
          <option value='1500'>1500 puntos</option>
          <option value='2000'>2000 puntos</option>
          <option value='3000'>3000 puntos</option>
          <option value='4000'>4000 puntos</option>
          <option value='5000'>5000 puntos</option>

        </select>
      </div>
      <div>
        <button type="submit" className="btn btn-secondary btn-lg" onClick={changePage} > JUGAR </button>
      </div>
    </>
  );
}


