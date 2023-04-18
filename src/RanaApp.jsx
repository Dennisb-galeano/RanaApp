import { useState } from "react";
import { AddPerson } from "./components/AddPerson";
// import { FirstPage } from "./components/FirstPage";

// el componente padre, ranaApp hace referencia a tooda la pagina.. 
export const RanaApp = () => {
    const [names, setNames] = useState([]); //espacio en memoria para manejar mis categorias

    const onAddPerson = (NewCategory) => {
      setNames ([...names, NewCategory ]);
    }

  return (
    <>
    {/* Titulo */}
    <h1> 
      LA RANA APP CUENTA TU PUNTAJE !!!  
    </h1>

    {/* imagen */}
    <div className="sapo">
        <img src="./sapo transparente.png" alt=" BoliRana"/>
       
      </div>
    <h2>Configuración del tablero </h2> 
  
    
    {/* INPUT */}
     <AddPerson 
      onNewPerson={onAddPerson} 

    />
     <br/>
     <br/>
     <br/>

    {/* listado de nombres */}
    
    <ol>
     {
      names.map(name => {  //me permite barrer c/u de los elementos del arreglo y regresar a algo nuevo
        return <li key={name}> {name} </li>
      })
      
      }
    </ol>
    

    </>
  )
}

// regla de oro ! no se pueden condicionar los hooks,
// react trabaja los hooks basados en su posicion,  no con nombres
// reakt pierde la referenciade kos states a uqe state se esratia manejando


 

