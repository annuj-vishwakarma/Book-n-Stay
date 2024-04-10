import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Register = () => {
  return (
    <div class='lg:flex lg:items-start'>
    <div class='hidden lg:block w-1/2 h-screen relative'>
      <img src="https://wallpapercave.com/wp/wp10344365.jpg" class='w-full h-full object-cover' />
      <div class='absolute top-[20%] left-[10%] flex flex-col'>
        <h1 class='text-4xl lg:text-6xl text-white font-bold my-4'>Create an Account</h1>
        <p class='text-xl lg:text-2xl text-white font-normal'>Join our community today!</p>
      </div>
    </div>
    <div class='w-full lg:w-1/2 bg-[#f5f5f5] flex flex-col p-5 lg:p-20 justify-between'>
      <h1 class='text-xl lg:text-2xl text-[#060606] font-semibold'>Register</h1>
  
      <div class='w-full flex flex-col'>
        <div class='w-full flex flex-col mb-5 lg:mb-10'>
          <h3 class='text-2xl lg:text-3xl font-semibold mb-2 lg:mb-4'>Create Account</h3>
          <p class='text-base lg:text-lg mb-2'>Please fill in your information to register.</p>
        </div>
  
        <div class='w-full flex flex-col'>
          <input
            type="email"
            placeholder='Email'
            class='w-full bg-[#E8F0FE] text-black py-2 my-2 bg-none border-black outline-none focus:outline-none'
          />
          <input
            type="password"
            placeholder='Password'
            class='w-full bg-[#E8F0FE] text-black py-2 my-2 bg-none border-black outline-none focus:outline-none'
          />
          <input
            type="password"
            placeholder='Confirm Password'
            class='w-full text-black bg-[#E8F0FE] py-2 my-2 bg-none border-black outline-none focus:outline-none'
          />
          <select class="w-full bg-[#E8F0FE] text-black py-2 my-2 bg-none border-black outline-none focus:outline-none">
            <option value="" disabled selected>Select Role</option>
            <option value="client">Client</option>
            <option value="user">User</option>
          </select>
          <div class='w-full flex flex-col my-4'>
            <button class='w-full text-white my-2 bg-[#060606] rounded-md p-3 lg:p-4 text-center items-center justify-center'>Register</button>
          </div>
        </div>
        <div class='w-full flex items-center justify-center'>
          <p class='text-base lg:text-lg font-normal text-[#060606] p-2'>Already have an account? <span class='font-semibold underline underline-offset-2 cursor-pointer'>Log in here!</span></p>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Register