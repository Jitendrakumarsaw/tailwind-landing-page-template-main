import React from 'react'

const Footer1 = () => {
    return (
        <>
            <hr />
            <h1 className='text-center font-bold text-2xl mb-5'>Ritec International Limited</h1>
            <div className='lg:grid lg:grid-col-12'>
                <div className='mb-5 '>
                    <ul className='lg:grid lg:grid-cols-3 md:grid md:grid-cols-3 flex flex-col '>
                        <li className='m-5 text-center '>Follow
                            <ul className='flex items-center text-2xl ml-20  '>
                                <li className='p-1'><i className="fab fa-facebook"></i></li>
                                <li className='p-1'><i className="fab fa-twitter-square"></i></li>
                                <li className='p-1'><i className="fab fa-linkedin-in"></i></li>
                                <li className='p-1'><i className="fab fa-instagram-square"></i></li>
                                <li className='p-1' ><i className="fab fa-youtube"></i></li>





                            </ul>
                        </li>
                        <li className='m-5 text-center'>Contact
                            <p>info@ritec.co.uk +44 (0)20 8344 8210</p>
                        </li>   
                        <li className='m-5 text-center'>Address
                            <p>Registered Office: 15 Compass West Estate, West Road, London N17 0XL, UK
                                Registered in England & Wales registration number 2106699</p>
                        </li>
                    </ul>
                </div>
                <div className='w-full bg-blue-900 h-auto  lg:h-60 flex flex-col  lg:justify-center text-center  lg:items-center text-white p-5 lg:p-32'>
                    <p>©2022 Ritec International Limited</p>
                    <p className='mt-3'>
                        ©2022 Ritec International Limited
                        All brand names and product names used in the Site are trade marks or trade names of 
                        Ritec International Limited. No permission is given in respect of the use of any of these 
                        names and moreover any such use may constitute an infringement of the holder's rights. </p>
                    <p className='mt-3'>Nothing contained herein shall be construed as conferring by implication, estoppel or otherwise
                         any licence to any patent, trade mark or other intellectual property right of Ritec 
                         International Limited or any third party.</p>
                </div>
            </div>
        </>
    )
}

export default Footer1