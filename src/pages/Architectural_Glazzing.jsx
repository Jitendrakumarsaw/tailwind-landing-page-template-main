import React from 'react';
import { Link } from 'react-router-dom';

const Architectural_Glazzing = () => {
  return (
   <>
 {/* <div className='text-center bg-pink-100 p-2'>Architectural_Glazzing</div> */}
    <div className='bg-blue-500 h-screen w-screen flex justify-center items-center uppercase text-white h1 mt-1/2 flex-col'>
      <div className=''>Architectural_Glazzing page</div>
      <button className='bg-white text-slate-500 uppercase p-3 hover:text-blue-500 rounded-sm'><Link to="/">Back</Link></button>

    </div>
   </>
  )
}

export default Architectural_Glazzing;