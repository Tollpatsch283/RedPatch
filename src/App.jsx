import React from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/navBar/navBar'
import SubList from './components/SubList'
function App() {
  return (
    <div>
      <NavBar />
      <div className='reddit-content'>
        <SubList />
        <Outlet />
      </div>
      
    </div>

  )
}

export default App
