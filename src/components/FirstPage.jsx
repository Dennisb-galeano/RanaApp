

export const FirstPage = ({ setCurrentPage }) => {

  const changePage = (event) => {
    event.preventDefault();
    setCurrentPage(1)
  }

  return (
    <>
      {/* titulo */}
      <h1> **** RANA APP **** </h1>

      {/* imagen */}
      <div className="sapo">
        <img src="./public/images/sapo.png" alt=" BoliRana" />
      </div>
      <div className="argolla">
        <img src='./public/images/argolla.png' alt='argollaSapo' />
      </div>

      {/* Boton  */}
      <div className='startButton'>
        <button type="button" className='btn btn-secondary btn-lg' onClick={changePage} > Iniciar juego </button>
      </div>

    </>

  )
}
