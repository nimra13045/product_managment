import { useState } from 'react'
import Home from './pages/home'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Viewproduct from './pages/viewproduct'
import Recorddetail from './component/recorddetail'
function App() {
  

  return (
    <>
    <Routes>
<Route path='/'element={<Home></Home>}/>
<Route path='view'element={<Viewproduct></Viewproduct>}/>
<Route path="/detail/:id" element={<Recorddetail />} />
    </Routes>
    
    </>
  )
}

export default App
