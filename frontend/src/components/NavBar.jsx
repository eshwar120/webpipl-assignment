import React from 'react'
import { useLocation } from 'react-router-dom'

export default function NavBar() {

  return (
    <nav 
    className='h-[60px] bg-slate-900 flex w-screen justify-center items-center gap-3 sticky'>
      <input 
      type="text" 
      placeholder='ex:- abc@gmail.com or 1234567890'
      className='max-w-[300px] w-screen h-[35px] rounded bg-transparent border-2 border-gray-400 outline-none focus:border-sky-800'/>
      <button className='bg-gray-400 h-[33px] rounded px-4 text-lg hover:bg-gray-600'>
        search
      </button>
    </nav>
  )
}
