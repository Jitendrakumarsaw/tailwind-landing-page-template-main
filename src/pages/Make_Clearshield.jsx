import React from 'react'
import { Link } from 'react-router-dom'


const Make_Clearshield = () => {
  return (
    <>
    {/* <div className='text-center bg-pink-100 p-2'>Make_Clearshield</div> */}
    <div className='bg-black h-screen w-screen flex justify-center items-center uppercase text-white h1 mt-1/2 flex-col'>
      <div className=''>Make_Clearshield page</div>
      <button className='bg-white text-slate-500 uppercase p-3 hover:text-blue-500 rounded-sm'><Link to="/">Back</Link></button>

    </div>
    </>
  )
}

export default Make_Clearshield