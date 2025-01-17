import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from "./components/Button"
import List from "./components/List"

function App() {

   const listItems = ['Big Mac', 'Chicken Burger', 'McFlurry'];

  return (
    <>
      <div className="">
        <header className="App-header">
          <h1 className="text-5xl font-bold mb-8"> Der Jibbl ausm Video </h1>
          <br></br>
          <div className='bg-gray-400'>
            <h2 className="text-3xl font-bold"> Button </h2>: 
            <Button name="Chef" age="18"></Button>
          </div>
          <br></br>
      <div className="p-8 bg-gray-400 ">
        <h2 className="text-3xl font-bold mb-6"> Liste </h2>
        <List items={listItems} />
      </div>

      <div className="p-8">
        <h2 className="text-3xl font-bold mb-6"> Card </h2>
        
      </div>
      
        </header>
      </div>
    </>
  )
}

export default App
