import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
 const increase= function increase(){
    setCount(count+1)
    setCount(count+1)//this are not make any impact because it goes like a brunch
    setCount(count+1)//this are not make any impact because it goes like a brunch
    setCount(count+1)
  }
   const decrease=function decrease(){
    setCount((prevCount)=>prevCount-1)
    setCount((prevCount)=>prevCount-1)//this way affect happened by decreasing amount how much we do 
    //the command 
    setCount((prevCount)=>prevCount-1)
    setCount((prevCount)=>prevCount-1)
   }

  return (
    <>
     <h1> value:{count}</h1>
     <button onClick={increase}>INCREASE :{count}</button>
  <br />
  <button onClick={decrease}>REDUCE:{count}</button> 
    </>
  )
}

export default App
