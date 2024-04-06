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
            <input className='p-2 mt-8 rounded-xl border' type="text" name='email' placeholder='Email' />
            <div className='relative'>
              <input className='p-2 rounded-xl border w-full' type="password" name='password' placeholder='Password' />
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-eye-fill absolute top-1/2 right-1 -transtale-y-1/2 " viewBox="0 0 16 16">
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
              </svg>
            </div>
            <button className='bg-[#613013] rounded-xl py-2 text-white'>Log in</button>
          </form>
          <div className='mt-10 grid grid-cols-3 items-center text-gray-500'>
            <hr className='border-gray-500' />
            <p className='text-center '>or</p>
            <hr className='border-gray-500' />
          </div>
        </div>



        <div className='w-1/2 p-5 sm:block hidden'>
          <img className='rounded-2xl ' src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/a1/9c/80/essentia-luxury-hotel.jpg?w=700&h=-1&s=1" alt="" />
        </div>


      </div>
    </section>
  )
}

export default login