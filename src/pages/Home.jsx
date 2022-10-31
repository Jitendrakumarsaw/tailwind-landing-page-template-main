import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/Features';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';
import Banner from '../partials/Banner';
import Slider from '../partials/slider';
import Footer1 from '../partials/footer1';
import Ritec_System from '../partials/ritec_system';
import Product from '../partials/product';




function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      {/* <Header /> */}
      

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <Slider/>

        <HeroHome />
        <Ritec_System/>

        <FeaturesHome />
        <FeaturesBlocks />
        <Product/>
        <Testimonials />
        <Newsletter />

      </main>

      <Banner />

      {/*  Site footer */}
      {/* <Footer1/> */}

    </div>
  );
}

export default Home;