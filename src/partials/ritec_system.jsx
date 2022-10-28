import React from 'react';
import glass2 from '../images/glass2.png';
import glass3 from '../images/glass3.png';
import glass4 from '../images/glass4.png';


const Ritec_System = () => {
  return (
    <>
      <div className='w-full  lg:h-[500px] lg:bg-blue-500 bg-blue-500  md:h-[500px] md:bg-blue-500 font-inter' >
        <div className='flex flex-col justify-center text-center text-white  mt-10'  >
          <h1 className='text-2xl lg:text-4xl md:text-3xl'>The Ritec Systems</h1>
          <p className='text-xl lg:text-2xl md:text-2xl'>Complete Systems for the Renovation, 'Non-Stick' Protection and Maintenance of...</p>
        </div>
        <div className='lg:flex lg:justify-evenly md:flex md:justify-evenly mt-10 text-white text-sm lg:text-lg md:text-lg text-center  '>
          <div className='flex flex-col'>
            <img className='mx-auto rounded-lg ' src={glass2} alt="first" width='300px' height='300px'/>
            <pre className='mt-5'>Glass &
              ceramics</pre>
            <pre className='mt-5'>The ClearShield
              Eco-System®</pre>
            <button className='mt-10 border-2 rounded-full p-1 hover:bg-white hover:text-black mb-5 '>Learn more</button>



          </div>
          <div className='flex flex-col'>
            <img className='mx-auto rounded-lg' src={glass3} alt="second" width='300px' height='300px' />
            <pre className='mt-5' >
              Metal, plastic & painted surfaces</pre>
            <pre className='mt-5'>The Ritecoat System­™</pre>
            <button className='mt-10 border-2 rounded-full p-1 hover:bg-white hover:text-black mb-5'>Learn more</button>



          </div>
          <div className='flex flex-col'>
            <img className='mx-auto rounded-lg' src={glass4} alt="third" width='300px' height='300px' />
            <pre className='mt-5'>Glass & porcelain
              insulators</pre>
            <pre className='mt-5'>The VoltShield System™</pre>
            <button className='mt-10 border-2 rounded-full p-1 hover:bg-white hover:text-black mb-5 inline-block'>Learn more</button>



          </div>
        </div>
      </div>
    </>
  )
}

export default Ritec_System