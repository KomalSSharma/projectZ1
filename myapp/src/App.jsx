import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Searchbar from './pages/search/Searchbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Searchbar/>
    </>
  )
}

export default App
