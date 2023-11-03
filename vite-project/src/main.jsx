import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function Apurba(){
  return(
    <h1>apurba</h1>
  )
}
const element=(
  <h1>sonai</h1>
)

const anotherelement=React.createElement(
  'h1',
  {},
  'kochupata'
)


ReactDOM.createRoot(document.getElementById('root')).render(// element ,<Apurba/>,<App/> is also possible
  anotherelement
)
