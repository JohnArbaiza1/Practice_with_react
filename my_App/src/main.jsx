import React from 'react'
import { createRoot } from 'react-dom/client'

//importamos los componentes creados
import { App } from './App';

//Importamos los estilos
import './index.css';

// Crear el contenedor raíz y renderizar el componente Button
createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <App />
    
  </React.Fragment>
);