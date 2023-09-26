import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
function MyApp(){
  return(
    <div>
      <h1>custom App || chai</h1>
    </div>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//       href: "https://google.com",
//       target: "_blank"
//   },
//   children: 'click me to visit google'
// };
const anotherElement=(
  <a href='https://google.com' target='_blank'>Visit google</a>
)
const user1="aaru"
const reactElement=React.createElement(
  'a',
  {href: "https://cricbuzz.com",target:"_blank"},
  "visit  ",
  user1
)

ReactDOM.createRoot(document.getElementById('root')).
render(
  
  // anotherElement 
   reactElement
  // <App />

  
)
