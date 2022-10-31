import React from 'react'
import { Link } from 'react-router-dom'


const Problems_Glass = () => {
  return (
   <>
    <div className='text-center bg-pink-100 p-2'>QuickSpray300</div>

   <div className='bg-violet-300 h-screen w-screen flex justify-center items-center uppercase text-white h1 mt-1/2 flex-col'>
      <div className=''>QuickSpray300</div>
      <button className='bg-white text-slate-500 uppercase p-3 hover:text-blue-500 rounded-sm'><Link to="/">Back</Link></button>

    </div>
   </>
  )
}

export default Problems_Glass