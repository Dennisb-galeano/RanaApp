
import { useRef, useState } from 'react';
import { AddPerson } from './AddPerson'

export const ConfigBoard = ({setCurrentPage}) => {

  const [names, setNames] = useState([]); //espacio en memoria para manejar mis categorias

  // const onAddPerson = (NewPerson) => {
  //   setNames (names.concat(NewPerson));
  // }

  const changePage = (event) => {
    event.preventDefault();
    setCurrentPage(2);
  }


  const deletePerson = (event) => {
    event.preventDefault();
    if (names >= 1) {
      return 
    }
    alert('se borraran todos los participantes')
    // document.getElementById("form_id").value="";
  }
    
    const inputElement = useRef();
  
    const eventInput =(event) => {
      event.preventDefault();
      let newPerson = inputElement.current.value;
      if (newPerson.length == 0) {
        alert("EL nombre debe tener al menos un caracter");
        inputElement.current.focus();
        return;
      }
      inputElement.current.value = "";
      setNames([...names, newPerson]);
    }

    

    return (
      
      <>
        {/* INPUT */}

        <input
          type='text'
          placeholder='Nombre del jugador'
          ref={inputElement}
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
        
        <div className='buttonsChangeList'/>
        <button type="button" className="btn btn-primary btn-sm" onClick={eventInput} > Agregar participante</button>
        <button type="reset" className="btn btn-secondary btn-sm" onClick={deletePerson}> Eliminar participante</button>
        <div/>
          {/*onClick={deletePerson} */}

        {/* // PUNTAJES // */}
        <div> <br/><br/>
          <h2>Selecciona el puntaje del chico </h2> <br/><br/>
            <select  id='Puntaje' className="form-select"  aria-label="Default select example">
                <option>500 puntos</option>
                <option>1000 puntos</option>
                <option>1500 puntos</option>
                <option>2000 puntos</option>
                <option>3000 puntos</option>
                <option>4000 puntos</option>
                <option>5000 puntos</option>
            </select>
        </div>
        <br/> <br/>
        
        <div>
          <button type="submit" className="btn btn-secondary btn-lg" onClick={changePage} > JUGAR </button>
        </div>

      </>
    )
  
} 


