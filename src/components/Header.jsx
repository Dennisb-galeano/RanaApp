

import React from 'react'

export const Header = () => {
  return (
    <>
      {/* Titulo */}
      <div>
        <h1>
          **Rana APP**
        </h1>

        <h2> 
          Configuración del tablero
        </h2>
      </div>

      {/* imagen */}
      <div className="sapo">
        <img src="./public/images/sapo.png" alt=" BoliRana" />
      </div>
    </>
  );
}

