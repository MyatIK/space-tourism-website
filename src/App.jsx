import Home from "./components/Home"
import Destination from "./components/Destination"

import {Routes,Route} from 'react-router-dom'
import Crew from "./components/Crew"
import Technology from "./components/Technology"

function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/destination" element={<Destination/>}/>
      <Route path="/crew" element={<Crew/>}/>
      <Route path="/technology" element={<Technology/>}/>

    </Routes>
    
    </>
  )
}

export default App
