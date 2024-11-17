import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header className='flex justify-between p-3 bg-gray-800'>
        <div className="logo">
          <h1 className='font-bold text-2xl text-blue-600'>Teaching Innovators</h1>
        </div>
        <div className="button flex gap-3">
          <button className='p-2 bg-white rounded-md w-20 font-bold'>Login</button>
        
          <button className='p-2 bg-blue-400 rounded-md w-24 font-bold text-white'>Signup</button>
        </div>
      </header>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-blue-400">
        <div className="text-center bg-white p-10 rounded-xl shadow-xl max-w-lg w-full">
          <h1 className="text-4xl font-extrabold text-gray-800 uppercase tracking-wider mb-4">
            Become a Teaching Innovator
          </h1>
          <h2 className="text-xl font-light text-gray-600 mb-6">
            Empower Students, Transform Futures
          </h2>
          <div className="text-6xl mb-6 text-blue-400">
           💻
          </div>
          <button className="bg-yellow-400 text-gray-800 py-2 px-6 rounded-full text-lg font-medium hover:bg-yellow-500 transition-all duration-300">
            Start Your Journey
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header