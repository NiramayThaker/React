import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCnt] = useState(5)

  function addVAlue() {
    if(counter >= 15)
      console.log("can't increse the value less than 5");
    else
      setCnt(++counter)
    console.log(counter);
  }
  
  let decreseValue = () => {
    if(counter <= 5)
      console.log("can't reduce the value less than 5");
    else
      setCnt(--counter)
    console.log(counter);    
  }

  return (
    <>
      <h1>Hello React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addVAlue}>Add value</button>
      <br />
      <button onClick={decreseValue}>Decrese value</button>
    </>
  )
}

export default App
