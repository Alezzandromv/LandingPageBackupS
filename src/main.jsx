import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Reloj from './Card.jsx'
import DatosUsuario from './Card.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DatosUsuario/>
  </StrictMode>,
)
