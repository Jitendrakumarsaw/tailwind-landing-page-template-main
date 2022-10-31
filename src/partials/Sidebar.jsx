import { motion, MotionConfig } from 'framer-motion';
import React from 'react';
import { useState, useEffect } from 'react';
import { FaHome } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';

import { FaFacebookMessenger } from 'react-icons/fa';
import { FaSave } from 'react-icons/fa';
import { FaFirstOrderAlt } from 'react-icons/fa';
import { FaFileAlt } from 'react-icons/fa';
import { FaSuitcase } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { FaSearchengin } from 'react-icons/fa';
import { FaRegWindowClose } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa';
import { FaBlenderPhone } from 'react-icons/fa';


import { Link, NavLink } from 'react-router-dom';
const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClose, setIsClose] = useState(false);
  const showMenu = (e) => {
    const menu = document.querySelectorAll('.sidebar-submenu');
    // console.log(menu);

    menu.forEach((e) => {
      console.log(e);
      e.classList.add('hidden');
      // e.classList.toggle('');
    })
    let cl = document.querySelector("." + e.target.id + "__sub")
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
  useEffect(() => {

  }, [isOpen])
  const toggle = () => {
    console.log("clicked")
    setIsOpen(!isOpen);
  }
  const close = () => {
    console.log("hii jitendra");
    setIsOpen(!isOpen);
  }

  const home = {
    // path: "/",
    name: "Home",
    icon: <FaHome />

  }
  const about = {
    // path: "/user",
    name: "About",
    icon: <FaUser />,
  }
  const company = {
    // path: "/messages",
    name: "Company",
    icon: <FaFacebookMessenger />
  }
  const pages = {
    // path: "/saved",
    name: "Pages",
    icon: <FaSave />
  }
  const blog = {
    // path: "/order",
    name: "Blog",
    icon: <FaFirstOrderAlt />
  }
  const soap = {
    // path: "/filemanager",
    name: "Soap",
    icon: <FaFileAlt />
  }
  const more = {
    // path: "/dashboard",
    name: "More",
    icon: <FaSuitcase />
  }
  const contact = {
    // path:"/contact",
    name: "contact",
    icon: <FaBlenderPhone />
  }
  return (

    <>
      <div className='main-container'>
        <MotionConfig >
          <motion.div animate={{ width: isOpen ? "350px" : "0px" }} className="bg-black ">

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
              <div className='text-black p-3 absolute right-5 top-0 text-2xl'>{isOpen == false ? <FaBars onClick={toggle} /> : <FaRegWindowClose className='text-white' onClick={toggle} />}</div>
            </div>
            {
              isOpen && <div className='text-black-800 p-2'><FaSearchengin className='absolute top-[75px] right-24 z-20 text-2xl' /></div>
            }
            {
              isOpen && <input className='rounded-full relative text-left ml-5' type='text' />
            }

            <div className='h-screen overflow-y-auto'>
              <section className='routes flex flex-col gap-3 justify-center text-sm p-5'>
                <div className='flex  gap-28'>
                  <div className='text-white'>{home.icon}</div>
                  <div className='text-white'><Link to="/"  onClick={toggle} >{home.name}</Link></div>
                </div>
                <hr />
                <div className='flex  gap-28 relative'>
                  <div className='text-white'>{about.icon}</div>
                  <div id='sidebar-about' onClick={showMenu} className='text-white'>{about.name}<span className='text-white inline-block ml-2'><FaChevronDown onClick={showMenu}/></span>

                  </div>
                  <ul onMouseEnter={(e) => e.relatedTarget.nextSibling.classList.remove("hidden")} onClick={hideMenu} className='sidebar-submenu sidebar-about__sub hidden absolute top-8 z-10  bg-violet-500 leading-4 text-white text-center  w-full rounded-lg' id='dropdown'>
                    <li className='hover:bg-slate-200 hover:text-black text-xs p-3'><Link to="/architectural" onClick={toggle}>Architectural Glazing</Link></li>
                    <li className='hover:bg-slate-200 hover:text-black text-xs p-3'><Link to="/windows" onClick={toggle}>Windows, Conservatories & Rooflights</Link></li>
                    <li className='hover:bg-slate-200 hover:text-black text-xs p-3'><Link to="/shower" onClick={toggle}>Shower Enclosures</Link></li>
                    <li className='hover:bg-slate-200 hover:text-black text-xs p-3'><Link to="/decorative" onClick={toggle}>Decorative / Sandblasted Glass</Link></li>
                    <li className='hover:bg-slate-200 hover:text-black text-xs p-3'><Link to="/marine" onClick={toggle}>Marine Vessels</Link></li>
                    <li className='hover:bg-slate-200 hover:text-black text-xs p-3'><Link to="/glass-splashback" onClick={toggle}>Glass Splashbacks</Link></li>
                    <li className='hover:bg-slate-200 hover:text-black text-xs p-3'><Link to="/offshore" onClick={toggle}>Offshore</Link></li>
                    <li className='hover:bg-slate-200 hover:text-black text-xs p-3'><Link to="/solar-pannel" onClick={toggle}>Solar Panels</Link></li>
                    <li className='hover:bg-slate-200 hover:text-black text-xs p-3'><Link to='/food-hyzine' onClick={toggle}>Food & Hygiene Applications</Link></li>
                    <li className='hover:bg-slate-200 hover:text-black text-xs p-3'><Link to="/railways" onClick={toggle}>Railways</Link></li>
                    <li className='hover:bg-slate-200 hover:text-black text-xs p-3'><Link to="/problems-glass" onClick={toggle}>Problem Glass</Link></li>
                    <li className='hover:bg-slate-200 hover:text-black text-xs p-3'><Link to="/complete-system" onClick={toggle}>A Complete System</Link></li>
                    <li className='hover:bg-slate-200 hover:text-black text-xs p-3'><Link to="/clearshild-work" onClick={toggle}>How ClearShield Works</Link></li>
                    <li className='hover:bg-slate-200 hover:text-black text-xs p-3'><Link to="/renovation" onClick={toggle}>On-Site Renovation</Link></li>
                    <li className='hover:bg-slate-200 hover:text-black text-xs p-3'><Link to="/test" onClick={toggle}>Tests</Link></li>
                    <li className='hover:bg-slate-200 hover:text-black text-xs p-3'><Link to="/make-clearshield" onClick={toggle}>What Makes ClearShield Unique</Link></li>
                    <li className='hover:bg-slate-200 hover:text-black text-xs p-3'><Link to="/become-applicator" onClick={toggle}>Why Become a ClearShield Applicator</Link></li>
                    <li className='hover:bg-slate-200 hover:text-black text-xs p-3'><Link to="/equipment" onClick={toggle}>ClearShield Application Equipment</Link></li>
                    <li className='hover:bg-slate-200 hover:text-black text-xs p-3'><Link to="/quickspray300" onClick={toggle}>QuickSpray 300</Link></li>
                    <li className='hover:bg-slate-200 hover:text-black text-xs p-3'><Link to="/support-center" onClick={toggle}>Online Training and Support Centre</Link></li>
                    <li className='hover:bg-slate-200 hover:text-black text-xs p-3'><Link to="/faq" onClick={toggle}>FAQs</Link></li>
                    <li className='hover:bg-slate-200 hover:text-black text-xs p-3'><Link to="/my-clearshield" onClick={toggle}>My ClearShield</Link></li>
                  </ul>
                </div>
                <hr />
                <div className='flex  gap-28 relative'>
                  <div className='text-white'>{company.icon}</div>
                  <div id='sidebar-company' onClick={showMenu} className='text-white'>{company.name} <span className='text-white inline-block ml-2'><FaChevronDown /></span></div>
                  <ul onMouseEnter={(e) => e.relatedTarget.nextSibling.classList.remove("hidden")} onClick={hideMenu} className='sidebar-submenu sidebar-company__sub hidden absolute z-10 top-10  bg-violet-500 leading-4 text-white text-center  w-full rounded-lg' id='dropdown'>
                    <li className='hover:bg-slate-200 hover:text-black text-xs p-3'><Link to="/faq" onClick={toggle}>Why Choose Ritecoat</Link></li>
                    <li className='hover:bg-slate-200 hover:text-black text-xs p-3'><Link to="/test" onClick={toggle}>How Ritecoat Works</Link></li>
                    <li className='hover:bg-slate-200 hover:text-black text-xs p-3'><Link to='/support-center' onClick={toggle}>On-Site Renovation</Link></li>
                    <li className='hover:bg-slate-200 hover:text-black text-xs p-3'><Link to="/equipment" onClick={toggle}>Tests and Experience</Link></li>
                  </ul>
                </div>
                <hr />
                <div className='flex  gap-28 relative'>
                  <div className='text-white'>{pages.icon}</div>
                  <div id='sidebar-pages' onClick={showMenu} className='text-white'>{pages.name} <span className='text-white inline-block ml-2'><FaChevronDown /></span></div>
                  <ul onMouseEnter={(e) => e.relatedTarget.nextSibling.classList.remove("hidden")} onClick={hideMenu} className='sidebar-submenu sidebar-pages__sub hidden absolute z-10 top-10  bg-violet-500 leading-4 text-white text-center  w-full rounded-lg' id='dropdown'>
                    <li className='hover:bg-slate-200 hover:text-black text-xs p-3'><Link to="/" onClick={toggle}>Home</Link></li>
                    <li className='hover:bg-slate-200 hover:text-black text-xs p-3'><Link to='signin' onClick={toggle}>SignIn</Link></li>
                    <li className='hover:bg-slate-200 hover:text-black text-xs p-3'><Link to="/product" onClick={toggle}>Product</Link></li>

                  </ul>
                  {/* <div className='text-white'>{pages.name}</div> */}
                </div>
                <hr />
                <div className='flex  gap-28'>
                  <div className='text-white'>{blog.icon}</div>
                  <div className='text-white'><Link to="/test" onClick={toggle}>{blog.name}</Link></div>
                </div>
                <hr />
                <div className='flex  gap-28'>
                  <div className='text-white'>{soap.icon}</div>
                  <div className='text-white'><Link to="/product" onClick={toggle}>{soap.name}</Link></div>
                </div>
                <hr />
                <div className='flex  gap-28 relative'>
                  <div className='text-white'>{more.icon}</div>
                  <div id='sidebar-more' onClick={showMenu} className='text-white'>{more.name} <span className='text-white inline-block ml-2'><FaChevronDown /></span></div>
                  <ul onMouseEnter={(e) => e.relatedTarget.nextSibling.classList.remove("hidden")} onClick={hideMenu} className='sidebar-submenu sidebar-more__sub hidden absolute top-8 z-10 bg-violet-500 leading-4 text-white text-center  w-full rounded-lg' id='dropdown'>
                    <li className='hover:bg-slate-200 hover:text-black text-xs p-3'><Link to='/become-applicator' onClick={toggle}>About Us</Link></li>
                    <li className='hover:bg-slate-200 hover:text-black text-xs p-3'><Link to="/offshore" onClick={toggle}>Other Specialist Products</Link></li>
                    <li className='hover:bg-slate-200 hover:text-black text-xs p-3'><Link to="/food-hyzine" onClick={toggle}>Gallery</Link></li>
                    <li className='hover:bg-slate-200 hover:text-black text-xs p-3'><Link to="/quickspray300" onClick={toggle}>Links</Link></li>
                    <li className='hover:bg-slate-200 hover:text-black text-xs p-3'><Link to="/marine" onClick={toggle}>Downloads</Link></li>
                    <li className='hover:bg-slate-200 hover:text-black text-xs p-3'><Link to="/make-clearshield" onClick={toggle}>Terms & Conditions of Use</Link></li>
                    <li className='hover:bg-slate-200 hover:text-black text-xs p-3'><Link to="/decorative" onClick={toggle}>Quality Statement</Link></li>
                    <li className='hover:bg-slate-200 hover:text-black text-xs p-3'><Link to="/railways" onClick={toggle}>Corporate Social Responsibility Policy</Link></li>
                    <li className='hover:bg-slate-200 hover:text-black text-xs p-3'><Link to="/glass-splashback" onClick={toggle}>Environmental Policy</Link></li>
                  </ul>
                </div>
                <hr />
                <div className='flex  gap-28 relative'>
                  <div className='text-white'>{contact.icon}</div>
                  <div className='text-white'><Link to="/contact" onClick={toggle}>{contact.name}</Link></div>
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