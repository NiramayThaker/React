import { useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [pswd, setPswd] = useState("")
  
  return (
    <>
      <h1 class="text-4xl font-bold text-center text-white">
        Password generator
      </h1>
    </>
  )
}

export default App
