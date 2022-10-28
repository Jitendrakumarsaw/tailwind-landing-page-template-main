import {motion, MotionConfig } from 'framer-motion';
import React from 'react';
import { useState,useEffect } from 'react';
import{FaHome} from 'react-icons/fa';
import{FaUser} from 'react-icons/fa';

import{FaFacebookMessenger} from 'react-icons/fa';
import{FaSave} from 'react-icons/fa';
import{FaFirstOrderAlt} from 'react-icons/fa';
import{FaFileAlt} from 'react-icons/fa';
import{FaSuitcase} from 'react-icons/fa';
import{FaBars} from 'react-icons/fa';
import{FaSearchengin} from 'react-icons/fa';
import{FaRegWindowClose} from 'react-icons/fa';
import{FaChevronDown} from 'react-icons/fa';

import { Link, NavLink } from 'react-router-dom';
const Sidebar = ({children}) => {
  const [isOpen,setIsOpen]= useState(false);
  const [isClose,setIsClose]=useState(false);
  const showMenu = (e) => {
    const menu = document.querySelectorAll('.sidebar-submenu');
    // console.log(menu);

    menu.forEach((e) => {
      console.log(e);
      e.classList.add('hidden');
      // e.classList.toggle('');
    })
    let cl = document.querySelector("."+e.target.id+"__sub")
    cl.classList.toggle('hidden');
    cl.classList.toggle('add');

  }

  const hideMenu = (e) => {
    const menu = document.querySelectorAll('.sidebar-submenu');
    // console.log(menu);

    menu.forEach((e) => {
      console.log(e);
      e.classList.add('hidden');
    })
    

  }
  useEffect(()=>{

  },[isOpen])
  const toggle=()=>{
    console.log("clicked")
    setIsOpen(!isOpen);
  }
  const close=()=>{
    console.log("hii jitendra");
    setIsOpen(!isOpen);
  }

  const routes={
    path:"/",
    name:"Home",
    icon:<FaHome/>
    
  }
  const user={
    path:"/user",
    name:"About",
    icon:<FaUser/>,
  }
  const messages={
    path:"/messages",
    name:"Company",
    icon:<FaFacebookMessenger/>
  }
  const saved={
    path:"/saved",
    name:"Pages",
    icon:<FaSave/>
  }
  const order={
    path:"/order",
    name:"Blog",
    icon:<FaFirstOrderAlt/>
  }
  const filemanger={
    path:"/filemanager",
    name:"Soap",
    icon:<FaFileAlt/>
  }
  const dashboard={
    path:"/dashboard",
    name:"More",
    icon:<FaSuitcase/>
  }
    return (
 
        <>
        <div className='main-container'>
          <MotionConfig >
            <motion.div animate={{width:isOpen? "350px":"0px"}} className="bg-black ">

            {/* <main className=''>
                  <div className=''>
                       {children}
                  </div>
            </main> */}
           <div className='flex justify-center relative '>
          
           <div className='text-white'>
                {
                isOpen && <h1 className='uppercase p-3'>do something</h1>
                }
              </div>
              <div className='text-black p-3 absolute right-5 top-0 text-2xl'>{isOpen == false ? <FaBars onClick={toggle}/> : <FaRegWindowClose className='text-white' onClick={toggle} /> }</div>
           </div>
           {
              isOpen && <div className='text-black-800 p-2'><FaSearchengin className='absolute top-[75px] right-24 z-20 text-2xl'/></div>
           }
              {
                isOpen && <input className='rounded-full relative text-left ml-5' type='text'/> 
              }              

                <div className='h-screen overflow-y-auto'>
                <section className='routes flex flex-col gap-3 justify-center text-sm p-5'>
                   <div className='flex  gap-28'>
                   <div className='text-white'>{routes.icon}</div>
                   <div className='text-white'>{routes.name}</div>
                   </div>
                   <hr />
                  <div className='flex  gap-28 relative'>
                   <div className='text-white'>{user.icon}</div>
                   <div id='sidebar-about' onClick={showMenu}   className='text-white'>{user.name}<span className='text-white inline-block ml-2'><FaChevronDown/></span>
                   
                   </div>
                   <ul onMouseEnter={(e) => e.relatedTarget.nextSibling.classList.remove("hidden")} onClick={hideMenu}  className='sidebar-submenu sidebar-about__sub hidden absolute top-8 z-10  bg-violet-500 leading-4 text-white text-center  w-full rounded-lg' id='dropdown'>
                   <li className='hover:bg-slate-200 hover:text-black text-xs p-3'>Architectural Glazing</li>
                  <li className='hover:bg-slate-200 hover:text-black text-xs p-3'>Windows, Conservatories & Rooflights</li>
                  <li className='hover:bg-slate-200 hover:text-black text-xs p-3'>Shower Enclosures</li>
                  <li className='hover:bg-slate-200 hover:text-black text-xs p-3'>Decorative / Sandblasted Glass</li>
                  <li className='hover:bg-slate-200 hover:text-black text-xs p-3'>Marine Vessels</li>
                  <li className='hover:bg-slate-200 hover:text-black text-xs p-3'>Glass Splashbacks</li>
                  <li className='hover:bg-slate-200 hover:text-black text-xs p-3'>Offshore</li>
                  <li className='hover:bg-slate-200 hover:text-black text-xs p-3'>Solar Panels</li>
                  <li className='hover:bg-slate-200 hover:text-black text-xs p-3'>Food & Hygiene Applications</li>
                  <li className='hover:bg-slate-200 hover:text-black text-xs p-3'>Railways</li>
                  <li className='hover:bg-slate-200 hover:text-black text-xs p-3'>Problem Glass</li>
                  <li className='hover:bg-slate-200 hover:text-black text-xs p-3'>A Complete System</li>
                  <li className='hover:bg-slate-200 hover:text-black text-xs p-3'>How ClearShield Works</li>
                  <li className='hover:bg-slate-200 hover:text-black text-xs p-3'>On-Site Renovation</li>
                  <li className='hover:bg-slate-200 hover:text-black text-xs p-3'>Tests</li>
                  <li className='hover:bg-slate-200 hover:text-black text-xs p-3'>What Makes ClearShield Unique</li>
                  <li className='hover:bg-slate-200 hover:text-black text-xs p-3'>Why Become a ClearShield Applicator</li>
                  <li className='hover:bg-slate-200 hover:text-black text-xs p-3'>ClearShield Application Equipment</li>
                  <li className='hover:bg-slate-200 hover:text-black text-xs p-3'>QuickSpray 300</li>
                  <li className='hover:bg-slate-200 hover:text-black text-xs p-3'>Online Training and Support Centre</li>
                  <li className='hover:bg-slate-200 hover:text-black text-xs p-3'>FAQs</li>
                  <li className='hover:bg-slate-200 hover:text-black text-xs p-3'>My ClearShield</li>
                  </ul>
                   </div>
                   <hr />
                   <div className='flex  gap-28 relative'>
                   <div className='text-white'>{messages.icon}</div>
                   <div id='sidebar-company'  onClick={showMenu} className='text-white'>{messages.name} <span className='text-white inline-block ml-2'><FaChevronDown/></span></div>
                   <ul onMouseEnter={(e) => e.relatedTarget.nextSibling.classList.remove("hidden")} onClick={hideMenu}  className='sidebar-submenu sidebar-company__sub hidden absolute z-10 top-10  bg-violet-500 leading-4 text-white text-center  w-full rounded-lg' id='dropdown'>
                   <li className='hover:bg-slate-200 hover:text-black text-xs p-3'>Why Choose Ritecoat</li>
                  <li className='hover:bg-slate-200 hover:text-black text-xs p-3'>How Ritecoat Works</li>
                  <li className='hover:bg-slate-200 hover:text-black text-xs p-3'>On-Site Renovation</li>
                  <li className='hover:bg-slate-200 hover:text-black text-xs p-3'>Tests and Experience</li>
                  </ul>
                   </div>
                   <hr />
                   <div className='flex  gap-28'>
                   <div className='text-white'>{saved.icon}</div>
                   <div className='text-white'>{saved.name}</div>
                   </div>
                   <hr />
                   <div className='flex  gap-28'>
                   <div className='text-white'>{order.icon}</div>
                   <div className='text-white'>{order.name}</div>
                   </div>
                   <hr />
                  <div className='flex  gap-28'>
                  <div className='text-white'>{filemanger.icon}</div>
                   <div className='text-white'>{filemanger.name}</div>
                  </div>
                  <hr />
                  <div className='flex  gap-28 relative'>
                  <div className='text-white'>{dashboard.icon}</div>
                  <div id='sidebar-more' onClick={showMenu}  className='text-white'>{dashboard.name} <span className='text-white inline-block ml-2'><FaChevronDown/></span></div>
                  <ul onMouseEnter={(e) => e.relatedTarget.nextSibling.classList.remove("hidden")} onClick={hideMenu}  className='sidebar-submenu sidebar-more__sub hidden absolute top-8 z-10 bg-violet-500 leading-4 text-white text-center  w-full rounded-lg' id='dropdown'>
                  <li className='hover:bg-slate-200 hover:text-black text-xs p-3'>About Us</li>
                    <li className='hover:bg-slate-200 hover:text-black text-xs p-3'>Other Specialist Products</li>
                    <li className='hover:bg-slate-200 hover:text-black text-xs p-3'>Gallery</li>
                    <li className='hover:bg-slate-200 hover:text-black text-xs p-3'>Links</li>
                    <li className='hover:bg-slate-200 hover:text-black text-xs p-3'>Downloads</li>
                    <li className='hover:bg-slate-200 hover:text-black text-xs p-3'>Terms & Conditions of Use</li>
                    <li className='hover:bg-slate-200 hover:text-black text-xs p-3'>Quality Statement</li>
                    <li className='hover:bg-slate-200 hover:text-black text-xs p-3'>Corporate Social Responsibility Policy</li>
                    <li className='hover:bg-slate-200 hover:text-black text-xs p-3'>Environmental Policy</li>
                  </ul>
                  </div>
                
                
                </section>
                </div>
                
            </motion.div>
          </MotionConfig>
        </div>
        </>

    )
}

export default Sidebar;