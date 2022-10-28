import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';


function Header() {
  //hamburger menu start here
  // const hamburgerMenu=(e)=>{
  //  const navbar_menu=document.querySelector('#navbar-menu');

  // if (navbar_menu.style.display === 'none') {
  // 👇️ this SHOWS the form
  // navbar_menu.style.display = 'block';
  // } else {
  // 👇️ this HIDES the form
  // navbar_menu.style.display = 'none';
  // }
  // };
  //  console.log(navbar_menu);
  //  e.target.navbar_menu.classList.add('');


  // hamburgermenu end here
  // javascript code statrt here
  const showMenu = (e) => {
    const menu = document.querySelectorAll('.submenu');
    // console.log(menu);

    menu.forEach((e) => {
      console.log(e);
      e.classList.add('hidden');
    })
    let cl = document.querySelector("." + e.target.id + "__sub")
    cl.classList.toggle('hidden');
    cl.classList.toggle('add');

  }

  const hideMenu = (e) => {
    const menu = document.querySelectorAll('.submenu');
    // console.log(menu);

    menu.forEach((e) => {
      console.log(e);
      e.classList.add('hidden');
    })


  }

  // code end here

  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white backdrop-blur-sm shadow-lg'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6 ">
        <div className="flex items-center justify-between h-16 md:h-20 ">

          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Cruip">
              <svg className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient cx="21.152%" cy="86.063%" fx="21.152%" fy="86.063%" r="79.941%" id="header-logo">
                    <stop stopColor="#4FD1C5" offset="0%" />
                    <stop stopColor="#81E6D9" offset="25.871%" />
                    <stop stopColor="#338CF5" offset="100%" />
                  </radialGradient>
                </defs>
                <rect width="32" height="32" rx="16" fill="url(#header-logo)" fillRule="nonzero" />
              </svg>
            </Link>
          </div>

          {/* Site navigation */}
          {/* <span onClick={hamburgerMenu} className='lg:hidden'><i class="fas fa-bars"></i></span> */}
          <div className='lg:hidden md:hidden absolute right-0 top-0'>
            <Sidebar />
          </div>
          <nav id='navbar-menu' className="hidden lg:flex lg:flex-grow md:flex md:flex-grow  ">
            <ul className='flex'>
              <li className="relative">
                <a id='home' onMouseEnter={showMenu} onMouseLeave={hideMenu} className="cursor-pointer relative font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Home
                  {/* <i className="fas fa-chevron-circle-down ml-2"></i> */}
                </a>
                {/* <ul onMouseEnter={(e) => e.relatedTarget.nextSibling.classList.remove("hidden")} onMouseLeave={hideMenu} className='submenu home__sub hidden absolute left-0 top-10 bg-sky-500  leading-10 text-white text-center  w-32 rounded-lg' id='dropdown'>
                  <li className='hover:bg-slate-200 hover:text-black text-xs'>Architectural Glazing</li>
                  <li className='hover:bg-slate-200 hover:text-black text-xs'>text-2</li>
                  <li className='hover:bg-slate-200 hover:text-black text-xs'>text-3</li>
                  <li className='hover:bg-slate-200 hover:text-black text-xs'>text-4</li>
                </ul> */}
              </li>
              <li className="relative">
                <a id='about' onMouseEnter={showMenu} onMouseLeave={hideMenu} className="cursor-pointer relative font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">About
                  <span><i className="fas fa-chevron-circle-down ml-2"></i></span></a>
                <ul onMouseEnter={(e) => e.relatedTarget.nextSibling.classList.remove("hidden")} onMouseLeave={hideMenu} className='submenu about__sub hidden absolute left-0 top-10 bg-sky-500 leading-4 text-white text-center  w-44 rounded-lg' id='dropdown'>
                  <li className='hover:bg-slate-200 hover:text-black text-xs'>Architectural Glazing</li>
                  <li className='hover:bg-slate-200 hover:text-black text-xs'>Windows, Conservatories & Rooflights</li>
                  <li className='hover:bg-slate-200 hover:text-black text-xs'>Shower Enclosures</li>
                  <li className='hover:bg-slate-200 hover:text-black text-xs'>Decorative / Sandblasted Glass</li>
                  <li className='hover:bg-slate-200 hover:text-black text-xs'>Marine Vessels</li>
                  <li className='hover:bg-slate-200 hover:text-black text-xs'>Glass Splashbacks</li>
                  <li className='hover:bg-slate-200 hover:text-black text-xs'>Offshore</li>
                  <li className='hover:bg-slate-200 hover:text-black text-xs'>Solar Panels</li>
                  <li className='hover:bg-slate-200 hover:text-black text-xs'>Food & Hygiene Applications</li>
                  <li className='hover:bg-slate-200 hover:text-black text-xs'>Railways</li>
                  <li className='hover:bg-slate-200 hover:text-black text-xs'>Problem Glass</li>
                  <li className='hover:bg-slate-200 hover:text-black text-xs'>A Complete System</li>
                  <li className='hover:bg-slate-200 hover:text-black text-xs'>How ClearShield Works</li>
                  <li className='hover:bg-slate-200 hover:text-black text-xs'>On-Site Renovation</li>
                  <li className='hover:bg-slate-200 hover:text-black text-xs'>Tests</li>
                  <li className='hover:bg-slate-200 hover:text-black text-xs'>What Makes ClearShield Unique</li>
                  <li className='hover:bg-slate-200 hover:text-black text-xs'>Why Become a ClearShield Applicator</li>
                  <li className='hover:bg-slate-200 hover:text-black text-xs'>ClearShield Application Equipment</li>
                  <li className='hover:bg-slate-200 hover:text-black text-xs'>QuickSpray 300</li>
                  <li className='hover:bg-slate-200 hover:text-black text-xs'>Online Training and Support Centre</li>
                  <li className='hover:bg-slate-200 hover:text-black text-xs'>FAQs</li>
                  <li className='hover:bg-slate-200 hover:text-black text-xs'>My ClearShield</li>

                </ul>

              </li>
              <li className='relative'>
                <a id='company' onMouseEnter={showMenu} onMouseLeave={hideMenu} className="cursor-pointer relative font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">company
                  <span><i className="fas fa-chevron-circle-down ml-2"></i></span></a>
                <ul onMouseEnter={(e) => e.relatedTarget.nextSibling.classList.remove("hidden")} onMouseLeave={hideMenu} className='submenu company__sub hidden absolute left-0 top-10 bg-sky-500 text-center leading-4 text-white w-44 rounded-lg' id='dropdown'>
                  <li className='hover:bg-slate-200 hover:text-black text-xs'>Why Choose Ritecoat</li>
                  <li className='hover:bg-slate-200 hover:text-black text-xs'>How Ritecoat Works</li>
                  <li className='hover:bg-slate-200 hover:text-black text-xs'>On-Site Renovation</li>
                  <li className='hover:bg-slate-200 hover:text-black text-xs'>Tests and Experience</li>

                </ul>

              </li>
              {/* <li>
                <Link to="" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Pages</Link>

              </li> */}
              <li>
                <Link to="" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Blog</Link>

              </li>
              {/* <li>
                <Link to="" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Shop</Link>

              </li> */}
            </ul>
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <a id='more' onMouseEnter={showMenu} onMouseLeave={hideMenu} className="cursor-pointer relative font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">more
                  <span><i className="fas fa-chevron-circle-down ml-2"></i></span>
                  <ul onMouseEnter={(e) => e.relatedTarget.nextSibling.classList.remove("hidden")} onMouseLeave={hideMenu} className='submenu hidden more__sub absolute right-0 top-10 bg-sky-500  leading-4 text-white text-center  w-44 rounded-lg' id='dropdown'>

                    <li className='hover:bg-slate-200 hover:text-black text-xs'>About Us</li>
                    <li className='hover:bg-slate-200 hover:text-black text-xs'>Other Specialist Products</li>
                    <li className='hover:bg-slate-200 hover:text-black text-xs'>Gallery</li>
                    <li className='hover:bg-slate-200 hover:text-black text-xs'>Links</li>
                    <li className='hover:bg-slate-200 hover:text-black text-xs'>Downloads</li>
                    <li className='hover:bg-slate-200 hover:text-black text-xs'>Terms & Conditions of Use</li>
                    <li className='hover:bg-slate-200 hover:text-black text-xs'>Quality Statement</li>
                    <li className='hover:bg-slate-200 hover:text-black text-xs'>Corporate Social Responsibility Policy</li>
                    <li className='hover:bg-slate-200 hover:text-black text-xs'>Environmental Policy</li>

                  </ul>
                </a>
              </li>
              <li>
                <Link to="/contact" className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3">
                  <span>Contact Us</span>
                  {/* <svg className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                  </svg>                   */}
                </Link>
              </li>
            </ul>

          </nav>

        </div>
      </div>
    </header>
  );
}

export default Header;
