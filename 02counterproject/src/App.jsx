import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    let [counter,setCounter]=useState(0)
    function increase(){
      if(counter>19)
        return
        setCounter(counter+1)
    }
    function decrease(){
      if(counter<1)
      return
      setCounter(counter-1)
    }

  return (
    <>
<h1>AGE:{counter}</h1>
<button onClick={increase}>INCREASE :{counter}</button>
  <br />
  <button onClick={decrease}>REDUCE:{counter}</button>
  
    </>
  )
}

export default App
