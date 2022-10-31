import React from 'react'
import { Link } from 'react-router-dom'


const Railways = () => {
  return(
  <>
{/* <div className='text-center bg-pink-100 p-2'>Railways</div> */}
<div className='bg-black h-screen w-screen flex justify-center items-center uppercase text-white h1 mt-1/2 flex-col'>
      <div className=''>Railways page</div>
      <button className='bg-white text-slate-500 uppercase p-3 hover:text-blue-500 rounded-md shadow-inner shadow-slate-300'><Link to="/">Back</Link></button>

    </div>
  </>
  )
}

export default Railways