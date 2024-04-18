import { useState } from 'react'
import Header from './components/header'
import Dashboard from './components/dashboard'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Dashboard />
    </>
  )
}

export default App
