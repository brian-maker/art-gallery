import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' 
import Location from './pages/Location'
import LoadingSpinner from './components/LoadingSpinner'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  })
  return (
    <Router className='min-h-screen overflow-hidden min-w-[300px]'>
      {
        loading ? ( <LoadingSpinner/>):(
        <Routes>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Location' element={<Location/>}/>
        </Routes>
        )
      }
      
    </Router>
  )
}

export default App