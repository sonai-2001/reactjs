import { useState } from "react"

function App() {
  let [color,setColor]=useState("white")
 return (
    <>
      <div className="w-full h-screen" 
      style={{backgroundColor:color}}
      >
    <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 ">

      <div className="flex flex-wrap  bg-white rounded  justify-center gap-3 px-5 py-3">
     <button className=" px-3 py-2 rounded 
     " style={{backgroundColor:"red"}} onClick={()=>setColor('red')}>
      red</button>
     <button className=" px-3 py-2 rounded 
     " style={{backgroundColor:"green"}}onClick={()=>setColor('green')}>
      green</button>
     <button className=" px-3 py-2 rounded outline-none
     " style={{backgroundColor:"yellow"}}onClick={()=>setColor('yellow')}>
      yellow</button>
     <button className=" px-3 py-2 rounded 
     " style={{backgroundColor:"pink"}}onClick={()=>setColor('pink')}>
      pink</button>

      </div>
    </div>
    </div>
    </>
  )
}

export default App
