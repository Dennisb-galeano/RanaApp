

export const FirstPage = ({ setCurrentPage }) => {

  const changePage = (event) => {
    event.preventDefault();
    setCurrentPage(1)
  }

  return (
    <>
      {/* titulo */}
      <h1>RANA APP</h1>
      <h2>¡ Cuenta tu puntaje !</h2>

      {/* imagen */}
      <div className="sapo">
        <img src="./public/images/sapo.png" alt=" BoliRana" />
      </div>
      <div className="argolla">
        <img src='./public/images/argolla.png' alt='argollaSapo' />
      </div>

      {/* Boton  */}
      <div >
        <button type="button" className='btn btn-warning btn-lg , principal-buttons' onClick={changePage} > Iniciar juego </button>
      </div>

    </>

  )
}
