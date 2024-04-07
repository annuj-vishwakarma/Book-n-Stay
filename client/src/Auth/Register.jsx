import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Register = () => {
  return (
    <section className='w-full h-screen bg-slate-500 flex'>
      <div className='w-3/6 bg-[#EAF4FB] h-screen'>
        <div className='w-full h-3/4 bg-[#A3C6E9]'>
         <div className='w-full h-3/6 flex justify-center items-center'>
         <h1 className='text-5xl font-semibold mr-40 pt-40'>Connecting <br />People & Property <br /> <span className='text-sm font-semibold'>Easy and safe way to buy/sell property.</span></h1>
         </div>
         <div className='w-full h-3/6 flex justify-center items-center mt-12 '><img className='mix-blend-multiply mr-60' src="https://i.pinimg.com/564x/91/c9/bd/91c9bdc2633519eb8081cfdb075f8031.jpg" alt="" /></div>
        </div>
      </div>
      <div className='w-3/6 bg-white h-screen'>
        
      </div>
    </section>
  )
}

export default Register