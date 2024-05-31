import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Home from './pages/Home'
import NoPage from './pages/NoPage'
import { BrowserRouter,Routes,Route } from 'react-router-dom'


function App() {


  return (
    <div className='grid-container'>
      <BrowserRouter>
      <Header />
      <Sidebar />
        <Routes>
          <Route index element={<Home />} />
       <Route path='*' element={<NoPage/>}/>
        </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App
