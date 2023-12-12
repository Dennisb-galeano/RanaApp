import React from 'react';
import ReactDOM from 'react-dom/client';
import { RanaApp } from './RanaApp';
import './styles.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <RanaApp />
    </BrowserRouter>
  </React.StrictMode>,
);


//browser Router viene lo uso para definir las rutas, la config de los directorios, como solo usare una lo voy a hacer en WinBoard
//hay que definir las rutas en el componente creado AppRouter, donde se manejaran todas las posibles rutas