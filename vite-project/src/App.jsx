

import Demo from './demo.jsx'

function App() {// function name always be in upper case and file extension must be jsx if it return somet
  //hing html
  // this are the components means the functions
  
 const name="apurba"
  return (//it can return only one thing which is wrap under a tag
    <>
    <Demo/>
    <h1>hello {name}</h1>   
    <p>hi</p>
    </>
  )
}
//{name} is evaluated data or variable.
export default App
