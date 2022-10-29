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
import Analytics from './pages/Architectural_Glazzing';
import Dashboard from './pages/Windows';
import FileManger from './pages/Shower';
// import Messages from './pages/Messages';
import Order from './pages/Glass_splashback';
import Saved from './pages/Offshore';
import setting from './pages/Sollar_Pannel';
import User from './pages/Decorative';
import Setting from './pages/Sollar_Pannel';
import Sidebar from './partials/Sidebar';
import Product from './partials/product';
import Architectural_Glazzing from './pages/Architectural_Glazzing';
import Windows from './pages/Windows';
import Shower from './pages/Shower';
import Decorative from './pages/Decorative';
import Marine from './pages/Marine';
import Glass_splashback from './pages/Glass_splashback';
import Offshore from './pages/Offshore';
import Sollar_Pannel from './pages/Sollar_Pannel';
import Food_Hygine from './pages/Food_Hygine';
import Railways from './pages/railways';
import Problems_Glass from './pages/Problems_Glass';
import Complete_System from './pages/Complete_System';
import ClearShild_Works from './pages/ClearShild_Works';
import Renovation from './pages/Renovation';
import Test from './pages/Test';
import Make_Clearshield from './pages/Make_Clearshield';
import Become_Applicator from './pages/Become_Applicator';
import Equipment from './pages/Equipment';
import QuickSpray300 from './pages/QuickSpray300';
import Support_Center from './pages/Support_Center';
import Faq from './pages/Faq';
import My_ClearShield from './pages/My_ClearShield';



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
        <Route exact path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/product' element={<Product />} />
        <Route path="/reset-password" element={<ResetPassword />} />


        <Route path='/architectural' element={<Architectural_Glazzing />} />
        <Route path='/windows' element={<Windows />} />
        <Route path='/shower' element={<Shower />} />
        <Route path='/decorative' element={<Decorative />} />
        <Route path='/marine' element={<Marine />} />
        <Route path='/glass-splashback' element={<Glass_splashback />} />
        <Route path='/offshore' element={<Offshore />} />
        <Route path='/solar-pannel' element={<Sollar_Pannel />} />
        <Route path='/food-hyzine' element={<Food_Hygine />} />
        <Route path='/railways' element={<Railways />} />
        <Route path='/problems-glass' element={<Problems_Glass />} />
        <Route path='/complete-system' element={<Complete_System />} />
        <Route path='/clearshild-work' element={<ClearShild_Works />} />
        <Route path='/renovation' element={<Renovation />} />
        <Route path='/test' element={<Test />} />
        <Route path='/make-clearshield' element={<Make_Clearshield />} />
        <Route path='/become-applicator' element={<Become_Applicator />} />
        <Route path='/equipment' element={<Equipment />} />
        <Route path='/quickspray300' element={<QuickSpray300 />} />
        <Route path='/support-center' element={<Support_Center />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/my-clearshield' element={<My_ClearShield />} />
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
