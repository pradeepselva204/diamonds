import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DiamondComponent from './Components/DiamondComponent'
import {HashRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Components/About'
import ShirtComponent from './Components/ShirtComponent'
import PortalComponents from './Components/PortalComponents'
import Portals from './Components/Portals'
import NFTComponent from './Components/NFTComponent'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Router>            
            <Routes>
              <Route path='/:id' element={<DiamondComponent />} />
              <Route path='/' element={<DiamondComponent />} />
              <Route path="/nft" element={<NFTComponent/>}/>
              <Route path='/about' element={<About/>} />
              <Route path='/shirt' element={<ShirtComponent/>} />
              <Route path='/portals' element={<PortalComponents/>} />
              <Route path='/portal' element={<Portals/>} />
            </Routes>
        </Router>
    </>
  )
}

export default App
