import React from 'react'
import '../styles/landingpage.css'
import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <div className='nav-vh  flex justify-center items-center landing-page flex-col bg-lime-950' >
      <div className='text-6xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 landing-header'>HOT SPOT</div>
      <div className='text-3xl p-2'>FOR JOB EMPLOYERS</div>
      <Link to={"/home"}>
        <button className=' text-xl p-2 px-4 m-3 bg-sky-500 text-white font-semibold rounded-xl'>Go home</button>
      </Link>
    </div>
  )
}
