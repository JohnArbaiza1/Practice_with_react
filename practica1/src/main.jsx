import React from 'react'
import { createRoot } from 'react-dom/client'

//Importamos los componentes creados
import {App} from './App'

//Importamos los estilos
// import './index.css'


createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <App />
  </React.Fragment>

)
