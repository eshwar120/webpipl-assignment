import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Formm from './components/Fromm'
import Router from './components/Router'
import NavBar from './components/NavBar'
import './styles/utils.css'
import { UserContextProvider } from './context/UserContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen bg-slate-700'>
      <UserContextProvider>
        <NavBar />
        <Router />
      </UserContextProvider>
    </div>
  )
}

export default App
