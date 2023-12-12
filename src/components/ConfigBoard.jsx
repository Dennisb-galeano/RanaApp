import { useRef, useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


export const ConfigBoard = ({ startGame }) => {

  // variables 
  const inputNamePlayerRef = useRef(); // devuelve un objeto ref mutable cuya propiedad .current se inicializa en el argumento pasado (valor inicial). El objeto devuelto persistirá durante toda la vida útil del componente.
  const Myswal = withReactContent(Swal);

  // states 
  const [names, setNames] = useState([]); //espacio en memoria para manejar mis categorias
  const [points, setPoints] = useState();
  // functions
  const addPlayer = (event) => {
    event.preventDefault();

    const newPerson = inputNamePlayerRef.current.value;
    if (newPerson.length == 0) {
      // alert("EL nombre debe tener al menos un caracter");
      inputNamePlayerRef.current.focus();
      return;
    }
    inputNamePlayerRef.current.value = "";
    setNames([...names, newPerson]);
  }

  const changePage = (event) => {
    event.preventDefault();
    if (names == 0) {
      Myswal.fire({
        // icon: 'warning',
        title: 'Estas seguro?',
        html: '<b/>Debes ingresar al menos un jugador<b/>',
        customClass: {
          confirmButton: 'custom-button',
          htmlContainer: 'custom-container'
        },

        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        },

      });
    }
    else {
      startGame(names, points);
    }
  };

  const deleteList = (event) => {
    event.preventDefault();
    setNames([]);
  };

  const selectPoints = (event) => {
    event.preventDefault();
    setPoints(event.target.value);  //es necesario mandar el evento al que quiero acceder, para que tome el valor 
  };



  return (
    <>

      <div>
        <h2 className=' text-center title-config display-4 mb-4'>Configuración del tablero</h2>

        <div className='break-hr mt-5 p-3'>
          <h4 className='text mt-4 mb-1'>Nombre del jugador  </h4>

          {/* INPUT */}
          <input
            className='input mt-4 mb-3'
            type='text'
            placeholder='Ej: Juan Camilo '
            name='name_player'
            ref={inputNamePlayerRef}
          />

          {/* listado de nombres */}
          <ol className='name-player mb-4 mt-2'>
            {
              names.map(name => {  //me permite barrer c/u de los elementos del arreglo y regresar a algo nuevo
                return <li key={name}> {name} </li>
              })
            }
          </ol>


          {/* botones agregar, eliminar personas */}

          <button type="button" className="btn btn-light btn-sm, button-add-player" onClick={addPlayer} >Agregar jugador</button>
          <button type="reset" className="btn btn-light btn-sm, button-delete-players" onClick={deleteList} > Reiniciar listado</button>
          <div />


          {/* PUNTAJES */}

          <div>
            <h4 className='text mt-5 mb-3'>Selecciona el puntaje del chico</h4>

            <select id='Puntaje' className="form-select mb-5" onChange={selectPoints} >
              <option value='500'>500 puntos</option>
              <option value='1000'>1000 puntos</option>
              <option value='1500'>1500 puntos</option>
              <option value='2000'>2000 puntos</option>
              <option value='3000'>3000 puntos</option>
              <option value='4000'>4000 puntos</option>
              <option value='5000'>5000 puntos</option>
            </select>
            
          </div>
        </div>

        <div className='text-center'>
          <button type="submit" className='btn btn-warning btn-lg , principal-buttons' onClick={changePage} > JUGAR </button>
        </div>
      </div>
    </>
  );
}


