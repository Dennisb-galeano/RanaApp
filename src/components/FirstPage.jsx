import 'animate.css';


export const FirstPage = ({ setCurrentPage }) => {

  const changePage = (event) => {
    event.preventDefault();
    setCurrentPage(1)
  }

  return (
    <>
      {/* titulo */}
      <div className="container-flex text-center">
        <h1 className='display-1'>RANA APP</h1>
        <h2 className='mt-5 m-3'>El tablero digital, que Cuenta tu puntaje </h2>


        {/* imagen */}
        <div className=' animate__animated animate__zoomInUp animate__delay-1s'>
          <div className="sapo row d-inline-block mt-3">
            <img src="./images/sapo.png" alt=" BoliRana" />


            <div className="argolla mx-auto text-center col-4 mt-" >
              <img src='./images/argolla.png' alt='argollaSapo' />
            </div>
          </div>
        </div>

        {/* Boton  */}
        <div >
          <button type="button" className='btn btn-warning btn-lg shadow, principal-buttons' onClick={changePage} > Iniciar juego </button>
        </div>



      </div>
    </>

  )
}
