import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  let a = 'Hello';
  return (
    <>
      <h1 className="bg-green-400 text-black rounded-xl p-4">
        Hello world!
      </h1>

      <Card username={a} />

    </>
  )
}

export default App
