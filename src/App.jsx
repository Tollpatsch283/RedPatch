import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <ul>
          <li>RedPatch</li>
          <li><button>Search</button></li>
          <li>About</li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

export default App
