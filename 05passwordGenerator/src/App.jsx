import { useCallback, useState } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const[noAllowed, setNoAllowed]=useState(false)
  const[charAllowed,setCharAloowed]=useState(false)
  const [password,setPassword]=useState("")

  const passWordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(noAllowed) str+= "1234567890"
    if(charAllowed) str+= "`~!@#$%^&*(?/\,><"

    for(let i=1;i<=Array.length;i++){
      let char=Math.floor(Math.random() * str.length +1);
      pass=str.charAt(char);
    }
    setPassword(pass)

  }, [length,noAllowed,charAllowed,setPassword])

  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
           <div className='flex shadow rounded-lg overflow-hidden mb-4'>
               <input 
               type='text'
               value={password}
               className='outline-none w-full py-1 px-3'
               placeholder='password'
               readOnly
              />
              <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
           </div>
      </div>
      
    </>
  )
}

export default App
