
import React from 'react'
import MenuEnlaces from './menuEnlaces'
// import '../../estilosgenerales.css'
import './header.css'

import logoPortal from './imgs/logoportal.png'
import Login from '../Login'

const Encabezado = () => {
  return (
    <div className='header'>
      <img src={logoPortal} alt="" className=''/>
      <div className='blanco'></div>
      <MenuEnlaces />
<Login />

    </div>
  )
}

export default Encabezado