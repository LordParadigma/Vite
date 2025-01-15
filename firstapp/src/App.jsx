import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from "./components/Button"

function App() {

   const listItems = ['Big Mac', 'Chicken Burger', 'McFlurry'];

  return (
    <>
      <div className="">
        <header className="App-header">
          <h1>Der Jibbl ausm Video</h1>
          <br></br>
          <div className='bg-blue-300'>
            Button: 
            <Button name="Chef" age="18"></Button>
          </div>
          <br></br>
          <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Dynamische Liste mit Hover-Effekt</h1>
      <List items={listItems} />
    </div>

        </header>
      </div>
    </>
  )
}

export default App
