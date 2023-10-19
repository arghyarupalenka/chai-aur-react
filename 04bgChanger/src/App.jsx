import { useState } from "react"

function App() {
  const [color,setColor] = useState("olive")

  return (

    <div style={{ backgroundColor: color }} className="full h-screen duration-200">
       <div className="fixed flex flexWrap justifyCenter gap3 shadowLg bgWhite px3 py2 rounded3xl">
          <button onClick={()=>setColor("red")} className="bg-red-500 text-white px-3 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"red"}}>
            Red
            </button>
            <button onClick={()=>setColor("green")} className="bg-red-500 text-white px-3 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"green"}}>
            Green
            </button>
            <button onClick={()=>setColor("blue")} className="bg-red-500 text-white px-3 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"blue"}}>
            Blue
            </button>
            <button onClick={()=>setColor("pink")} className="bg-red-500 text-white px-3 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"pink"}}>
            Pink
            </button>
            <button onClick={()=>setColor("purple")} className="bg-red-500 text-white px-3 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"purple"}}>
            Purple
            </button>
       </div>
    </div>

  )
}

export default App
