import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer mensaje="Hola profesor, esto es una props"/>
    </>
  )
}

export default App
