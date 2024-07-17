import { useState } from 'react'
import "./App.css"
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import { Home } from './Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Home/>
      </div>
     
    </>
  )
}

export default App
