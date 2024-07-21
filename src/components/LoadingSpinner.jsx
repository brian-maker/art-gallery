import React from 'react'
import spinner from '../assets/loader.gif'

function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-screen">
            <img src={spinner} alt="Loading..." />
    </div>
  )
}

export default LoadingSpinner