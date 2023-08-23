import React from 'react'
import profile from '../assets/profile.svg'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='h-full text-gray-100 flex flex-col justify-center items-center nav-vh gap-3'>
      <img src={profile} alt="Profile" className='h-[150px]' />
      <p>To upload new student details <Link to={"/personalinfo"} className='underline'>click</Link> here</p>
      <Link to={"/personalinfo"}>
        <button className='px-6 py-1 bg-sky-300 text-xl rounded text-slate-700 font-medium'>
          Add
        </button>
      </Link>
    </div>
  )
}
