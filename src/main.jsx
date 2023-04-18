import React from 'react';
import ReactDOM from 'react-dom/client';
import { RanaApp } from './RanaApp';
import './Styles.css';
import { FirstPage } from './components/FirstPage';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RanaApp />
  </React.StrictMode>,
);
