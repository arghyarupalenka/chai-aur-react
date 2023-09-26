import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
 let myObj={
  userName:"Arghyarupa",
  age:23

 }
  return (
    <>
      <h1 className='bg-green-400 p-4'>Tailwind Test</h1>
      <Card userName="Arghyarupa" btnText="click me"/>
      <Card userName="chai aur code" btnText="Visit me" someObj={myObj}/>

    </>
  )
}

export default App
