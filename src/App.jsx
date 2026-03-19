import React from 'react'
import './App.css'
import NavBar from './components/navBar'
function App() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>

  )
}

export default App
