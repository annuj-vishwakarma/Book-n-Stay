import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
const login = () => {
  return (
    <div className='w-full h-screen flex items-start'>
      <div className='relative w-1/2 h-full flex flex-col'>
        <div className='absolute top-[20%] left-[10%] flex flex-col'>
          <h1 className='text-4xl text-white font-bold my-4'>Turn Your Ideas <br /> into reality</h1>
          <p className='text-xl text-white font-normal'>Start for free and get attactive offers from the community</p>
        </div>
        <img src="https://wallpapercave.com/wp/wp10344365.jpg" className='w-full h-full object-cover' />
      </div>
      <div className='w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between'>
        <h1 className='text-xl text-[#060606] font-semibold'>Interactive brand</h1>

        <div className='w-full flex flex-col'>
          <div className='w-full flex flex-col mb-10'>
            <h3 className='text-2xl font-semibold mb-4'>Login</h3>
            <p className='text-sm mb-2'>Welcome back! please enter your details.</p>
          </div>

          <div className='w-full flex flex-col'>
            <input
              type="email"
              placeholder='Email'
              className='w-full text-black py-2 my-2 bg-none border-black outline-none focus:outline-none'
            />
            <input
              type="password"
              placeholder='Password'
              className='w-full text-black py-2 my-2 bg-none border-black outline-none focus:outline-none'
            />
            <div className='w-full flex items-center justify-between'>
              <div className='w-full flex items-center'>
                <input type="checkbox" className='w-4 mr-2' />
                <p className='text-sm'>Remember me for 30 days</p>
              </div>
              <p className='text-sm font-medium whitespace-nowrap cursor-pointer underline unserline-offset-2'>Forget Password</p>
            </div>
            <div className='w-full flex flex-col my-4'>
              <button className='w-full text-white my-2 bg-[#060606] rounded-md p-4 text-center items-center justify-center'>Log in</button>
              <button className='w-full text-[#060606]  my-2 border-2 border-black rounded-md p-4 text-center items-center justify-center'>Signup</button>
            </div>
            <div className='w-full flex items-center justify-center relative py-2'>
              <div className='w-full h-[1px] bg-black'></div>
              <p className='text-lg absolute text-black/80 bg-[#f5f5f5] p-2'>or</p>
            </div>
          </div>
          <div className='w-full flex items-center justify-center'>
            <p className='text-sm font-normal text-[#060606]'>Dont have a account? <span className='font-semibold underline under'></span></p>
          </div>
        </div>
      </div>

    </div>

  )
}

export default login