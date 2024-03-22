import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
const login = () => {
  return (
    <section className='bg-gray-100 min-h-screen flex items-center justify-center'>
      <div className="bg-cyan-200 flex rounded-2xl p-5 shadow-lg max-w-3xl">
        
        <div className='sm:w-1/2 px-16'>
          <h2 className='font-bold text-2xl text-[#613013]'>Login</h2>
          <p className='text-sm mt-4 text-[#613013]'>If you already a user,easily log in!</p>

          <form className='flex flex-col gap-4' action="">
            <input  className='p-2 mt-8 rounded-xl border' type="text" name='email' placeholder='Email' />
            <input className='p-2 rounded-xl border' type="password" name='password' placeholder='Password' />
            <button className='bg-[#613013] rounded-xl py-2 text-white'>Log in</button>
          </form>
        </div>

        <div className='mt-10 grid grid-cols-3 items-center text-gray-500'>
          <hr className='border-gray-400' />
          <p className='text-center'>or</p>
          <hr className='border-gray-400' />
        </div>

        <div className='w-1/2 p-5 sm:block hidden'>
          <img className='rounded-2xl ' src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/a1/9c/80/essentia-luxury-hotel.jpg?w=700&h=-1&s=1" alt="" />
        </div>


      </div>
    </section>
  )
}

export default login