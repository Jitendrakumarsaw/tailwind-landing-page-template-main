import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
 } from 'react-router-dom';

import 'aos/dist/aos.css';
import './css/style.css';

import AOS from 'aos';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Contact from './pages/Contact';
import ResetPassword from './pages/ResetPassword';

// sidebar start here
import Analytics from './pages/Analytics';
import Dashboard from './pages/Dashboard';
import FileManger from './pages/FileManager';
import Messages from './pages/Messages';
import Order from './pages/Order';
import Saved from './pages/Saved';
import setting from './pages/Setting';
import User from './pages/User';
import Setting from './pages/Setting';
import Sidebar from './partials/Sidebar';
import Product from './partials/product';



// sidebar end here

function App() {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
    
    
     <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path='/product' element={<Product/>} />
        <Route path="/reset-password" element={<ResetPassword />} />


          {/* <Route path='/' element={<Dashboard />} />
          <Route path='/user' element={<User />} />
          <Route path='/messages' element={<Messages />} />
          <Route path='/analytics' element={<Analytics />} />
          <Route path='/filemanger' element={<FileManger />} />
          <Route path='/order' element={<Order />} />
          <Route path='/saved' element={<Saved />} />
          <Route path='/setting' element={<Setting />} /> */}
      </Routes>
  
      {/* <Sidebar>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/user' element={<User />} />
          <Route path='/messages' element={<Messages />} />
          <Route path='/analytics' element={<Analytics />} />
          <Route path='/filemanger' element={<FileManger />} />
          <Route path='/order' element={<Order />} />
          <Route path='/saved' element={<Saved />} />
          <Route path='/setting' element={<Setting />} />
        </Routes>
        </Sidebar> */}
    </>
  );
}

export default App;
