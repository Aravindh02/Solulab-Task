import { useState } from 'react'
import SideBar from './components/SideBar'
import Aside1 from './components/Aside1'
import Aside2 from './components/Aside2'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <SideBar></SideBar>
    <Aside1></Aside1>
    <Aside2></Aside2>
    </div>
  )
}

export default App
