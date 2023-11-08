import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Demo from './Demo.jsx'

function App(props) {
  
  const info={
    age:22
  }
  return (
    <>
        <h1>{props.name}</h1> 
        <Demo  details={info} />      
    </>
  )
}

export default App
