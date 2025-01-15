import React from 'react'
import { createRoot } from 'react-dom/client'

//Importamos los componentes creados
import {Home} from './Home'

//Importamos los estilos
// import './index.css'


createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <Home />

  </React.Fragment>

)
