import React from 'react'
import glass1 from '../images/glass1.png';
import glass2 from '../images/glass2.png';
import glass3 from '../images/glass3.png';
import glass4 from '../images/glass4.png';
// import glass4 from '../images/glass.png';
// import glass4 from '../images/glass4.png';
// import glass4 from '../images/glass4.png';


const Product = () => {
    return (
        <>
            <div className='my-10 flex justify-evenly flex-wrap text-neutral-600 font-inter text-lg gap-16 text-center'>
                <div className=' flex flex-col p-2 '>
                    <img className='lg:w-52 h-56 md:w-52 h-56 w-full h-full rounded-md ' src={glass1} alt="glass1" />
                    <pre>
                        Shower Registration &
                    </pre>
                    <pre>After-Care
                        Shop</pre>
                </div>
                <div className='flex flex-col p-2'>
                    <img className='lg:w-52 h-56 md:w-52 h-56 w-full h-full rounded-md ' src={glass2} alt="glass2" />
                    <pre>
                        Other Specialist Products
                    </pre>
                    <pre>Products</pre>
                </div>
                <div className='flex flex-col p-2'>
                    <img className='lg:w-52 h-56 md:w-52 h-56 w-full h-full rounded-md' src={glass3} alt="glass3" />
                    <pre>

                        ClearShield
                        Eco-System®
                    </pre>
                    <pre>Project Gallery</pre>
                </div>
                <div className='flex flex-col p-2'>
                    <img className='lg:w-52 h-56 md:w-52 h-56 w-full h-full rounded-md' src={glass4} alt="glass4" />
                    <pre>
                    About Us
                    </pre>
                
                </div>
                <div className='flex flex-col p-2'>
                    <img className='lg:w-52 h-56 md:w-52 h-56 w-full h-full rounded-md ' src={glass1} alt="glass1" />
                    <pre>
                    Downloads
                    </pre>
                    
                </div>
                <div className='flex flex-col p-2'>
                    <img className='lg:w-52 h-56 md:w-52 h-56 w-full h-full rounded-md' src={glass1} alt="glass1" />
                    <pre>
                      
                       The Ritec
                    </pre>
                    <pre>News Blog</pre>
                </div>
                <div className='flex flex-col p-2'>
                    <img className='lg:w-52 h-56 md:w-52 h-56 w-full h-full rounded-md' src={glass1} alt="glass1" />
                    <pre>
                        
                       Links
                    </pre>
                    
                </div>
                {/* <div className=''>
            <img src={glass1} alt="glass1" width='200px' height='200px' />
        </div>  */}

            </div>
        </>
    )
}

export default Product