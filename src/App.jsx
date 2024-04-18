import { useState } from 'react'
import Header from './components/header'
import Dashboard from './components/dashboard'
import Footer from './components/footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Dashboard />
      <Footer />
    </>
  )
}

export default App
