import React from 'react'
import Navbar from './component/Navbar'
import { BrowserRouter, Route ,Routes } from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import NoteState from './context/NoteState'

const App = () => {
  return (
    <>
    <NoteState>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path='/home' element={<Home/>}></Route>
      <Route exact path='/about' element={<About/>}></Route>
    </Routes>
    </BrowserRouter>
    </NoteState>
    </>
  )
}

export default App